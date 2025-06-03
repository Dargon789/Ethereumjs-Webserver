import { Chain, Common, Hardfork } from '@ethereumjs/common'
import { assert } from 'vitest'

import { DPT, ETH, RLPx, genPrivateKey } from '../../src/index.js'
import * as testdata from '../testdata.json'

import type { Capabilities } from '../../src/index.js'
import type { it } from 'vitest'

export const delay = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export const localhost = '127.0.0.1'

export function getTestDPTs(numDPTs: number, basePort: number) {
  const dpts = []

  for (let i = 0; i < numDPTs; ++i) {
    const dpt = new DPT(genPrivateKey(), {
      endpoint: {
        address: localhost,
        udpPort: basePort + i,
        tcpPort: basePort + i,
      },
      timeout: 100,
      shouldFindNeighbours: false, // Disable findNeighbors since only needed for bootstrap test
    })
    dpt.bind(basePort + i)
    dpts.push(dpt)
  }
  return dpts
}

export function getTestDPTsWithDns(numDPTs: number, basePort: number) {
  const dpts = []

  for (let i = 0; i < numDPTs; ++i) {
    const dpt = new DPT(genPrivateKey(), {
      endpoint: {
        address: localhost,
        udpPort: basePort + i,
        tcpPort: basePort + i,
      },
      timeout: 1000,
      refreshInterval: 400,
      dnsNetworks: [testdata.dns.enrTree],
      shouldFindNeighbours: false,
      shouldGetDnsPeers: true,
    })
    dpt.bind(basePort + i)
    dpts.push(dpt)
  }
  return dpts
}

export function initTwoPeerDPTSetup(basePort: number) {
  const dpts = getTestDPTs(2, basePort)
  const peer = { address: localhost, udpPort: basePort + 1 }
  dpts[0].addPeer(peer).catch(() => {
    /* Silently catch rejections here since not an actual test error */
  })
  return dpts
}

export function destroyDPTs(dpts: DPT[]) {
  for (const dpt of dpts) dpt.destroy()
}

export function getTestRLPXs(
  numRLPXs: number,
  maxPeers: number = 10,
  basePort: number,
  capabilities?: Capabilities[],
  common?: Object | Common
) {
  const rlpxs = []
  if (typeof capabilities === 'undefined') {
    capabilities = [ETH.eth66, ETH.eth65, ETH.eth64, ETH.eth63, ETH.eth62]
  }
  if (!common) {
    common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.London })
  }
  const dpts = getTestDPTs(numRLPXs, basePort)

  for (let i = 0; i < numRLPXs; ++i) {
    const rlpx = new RLPx(dpts[i]['_privateKey'], {
      dpt: dpts[i],
      maxPeers,
      capabilities,
      common: common.constructor === Array ? common[i] : (common as Common),
      listenPort: basePort + i,
    })
    rlpx.listen(basePort + i)
    rlpxs.push(rlpx)
  }
  return rlpxs
}

export function initTwoPeerRLPXSetup(
  maxPeers?: any,
  capabilities?: any,
  common?: Object | Common,
  basePort = 30306
): RLPx[] {
  const rlpxs = getTestRLPXs(2, maxPeers, basePort, capabilities, common)
  const peer = { address: localhost, udpPort: basePort + 1, tcpPort: basePort + 1 }
  rlpxs[0]['_dpt']!.addPeer(peer).catch(() => {
    /* Silently catch rejections here since not an actual test error */
  })
  return rlpxs
}

/**
 * @param {Test} t
 * @param {Array} capabilities Capabilities
 * @param {Object} opts
 * @param {Dictionary} opts.status0 Status values requested by protocol
 * @param {Dictionary} opts.status1 Status values requested by protocol
 * @param {Function} opts.onOnceStatus0 (rlpxs, protocol) Optional handler function
 * @param {Function} opts.onPeerError0 (err, rlpxs) Optional handler function
 * @param {Function} opts.onPeerError1 (err, rlpxs) Optional handler function
 * @param {Function} opts.onOnMsg0 (rlpxs, protocol, code, payload) Optional handler function
 * @param {Function} opts.onOnMsg1 (rlpxs, protocol, code, payload) Optional handler function
 */
export function twoPeerMsgExchange(
  t: typeof it,
  opts: any,
  capabilities?: Capabilities[],
  common?: Object | Common,
  basePort = 30306
) {
  const rlpxs = initTwoPeerRLPXSetup(null, capabilities, common, basePort)
  rlpxs[0].events.on('peer:added', function (peer: any) {
    const protocol = peer.getProtocols()[0]
    protocol.sendStatus(opts.status0) // (1 ->)

    protocol.events.once('status', () => {
      if (opts.onOnceStatus0 !== undefined) opts.onOnceStatus0(rlpxs, protocol)
    }) // (-> 2)
    protocol.events.on('message', async (code: any, payload: any) => {
      if (opts.onOnMsg0 !== undefined) opts.onOnMsg0(rlpxs, protocol, code, payload)
    })
    peer.events.on('error', (err: Error) => {
      if (opts.onPeerError0 !== undefined) {
        opts.onPeerError0(err, rlpxs)
      } else {
        assert.fail(`Unexpected peer 0 error: ${err}`)
      }
    }) // (-> 2)
  })

  rlpxs[1].events.on('peer:added', function (peer: any) {
    const protocol = peer.getProtocols()[0]
    protocol.events.on('message', async (code: any, payload: any) => {
      switch (code) {
        // Comfortability hack, use constants like devp2p.ETH.MESSAGE_CODES.STATUS
        // in production use
        case 0x00: // (-> 1)
          assert.ok(true, 'should receive initial status message')
          try {
            protocol.sendStatus(opts.status1) // (2 ->)
          } catch {
            // Silently handle error conditions that are tested via events
          }
          break
      }
      if (opts.onOnMsg1 !== undefined) opts.onOnMsg1(rlpxs, protocol, code, payload)
    })
    peer.events.on('error', (err: any) => {
      if (opts.onPeerError1 !== undefined) {
        opts.onPeerError1(err, rlpxs)
      } else {
        assert.fail(`Unexpected peer 1 error: ${err}`)
      }
    })
  })
}

export function destroyRLPXs(rlpxs: any) {
  for (const rlpx of rlpxs) {
    // FIXME: Call destroy() on dpt instance from the rlpx.destroy() method
    rlpx._dpt.destroy()
    rlpx.destroy()
  }
}

export async function twoPeerMsgExchange2(
  t: typeof it,
  opts: any,
  capabilities?: any,
  common?: Object | Common,
  basePort = 30306
) {
  const rlpxs = initTwoPeerRLPXSetup(null, capabilities, common, basePort)
  rlpxs[0].events.on('peer:added', function (peer: any) {
    const protocol = peer.getProtocols()[0]
    const v4Hello = {
      protocolVersion: 4,
      clientId: 'fakePeer',
      capabilities: [ETH.eth66],
      port: 30303,
      id: new Uint8Array(12),
    }
    // Set peer's devp2p protocol version to 4
    protocol._peer._hello = v4Hello
    protocol.sendStatus(opts.status0)
    peer.events.on('error', (err: Error) => {
      assert.fail(`Unexpected peer 0 error: ${err}`)
    })
  })

  rlpxs[1].events.on('peer:added', function (peer: any) {
    const protocol = peer.getProtocols()[0]
    protocol.events.once('message', async (code: any, _payload: any) => {
      switch (code) {
        case ETH.MESSAGE_CODES.STATUS:
          assert.fail('should not have been able to process status message')
          break
      }
    })
    peer.events.once('error', (err: any) => {
      assert.equal(
        err.message,
        'Invalid Snappy bitstream',
        'unable to process snappy compressed message'
      )
      destroyRLPXs(rlpxs)
      opts.promise(undefined)
    })
  })
}

/**
 * @param {Test} t
 * @param {Array} capabilities Capabilities
 * @param {Object} opts
 * @param {Function} opts.onSendMessage (rlpxs, protocol) Optional handler function
 * @param {Function} opts.onPeerError0 (err, rlpxs) Optional handler function
 * @param {Function} opts.onPeerError1 (err, rlpxs) Optional handler function
 * @param {Function} opts.onReceiveMessage (rlpxs, protocol, code, payload) Optional handler function
 */
export function twoPeerMsgExchange3(
  t: typeof it,
  opts: any,
  capabilities?: any,
  common?: Object | Common,
  basePort = 30306
) {
  const rlpxs = initTwoPeerRLPXSetup(null, capabilities, common, basePort)
  rlpxs[0].events.on('peer:added', function (peer: any) {
    const protocol = peer.getProtocols()[0]
    opts.sendMessage(rlpxs, protocol)
  })

  rlpxs[1].events.on('peer:added', function (peer: any) {
    const protocol = peer.getProtocols()[0]
    protocol.events.on('message', async (code: any, payload: any) => {
      opts.receiveMessage(rlpxs, protocol, code, payload)
    })
    peer.events.on('error', (err: any) => {
      if (opts.onPeerError1 !== false) {
        opts.onPeerError1(err, rlpxs)
      } else {
        assert.fail(`Unexpected peer 1 error: ${err}`)
      }
    })
  })
}
