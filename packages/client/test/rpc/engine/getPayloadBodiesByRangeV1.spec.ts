import { Block, BlockHeader } from '@ethereumjs/block'
import { Hardfork } from '@ethereumjs/common'
import { DefaultStateManager } from '@ethereumjs/statemanager'
import { TransactionFactory } from '@ethereumjs/tx'
import { Account, Address, bytesToHex, hexToBytes } from '@ethereumjs/util'
import { assert, describe, it, vi } from 'vitest'

import { INVALID_PARAMS, TOO_LARGE_REQUEST } from '../../../src/rpc/error-code.js'
import genesisJSON from '../../testdata/geth-genesis/eip4844.json'
import preShanghaiGenesisJSON from '../../testdata/geth-genesis/post-merge.json'
import { baseSetup, getRpcClient, setupChain } from '../helpers.js'

const method = 'engine_getPayloadBodiesByRangeV1'

describe(method, () => {
  it('call with too many hashes', async () => {
    const { rpc } = await baseSetup({ engine: true, includeVM: true })

    const res = await rpc.request(method, ['0x1', '0x55'])
    assert.equal(res.error.code, TOO_LARGE_REQUEST)
    assert.ok(res.error.message.includes('More than 32 execution payload bodies requested'))
  })

  it('call with invalid parameters', async () => {
    const { rpc } = await baseSetup({ engine: true, includeVM: true })

    const res = await rpc.request(method, ['0x0', '0x0'])
    assert.equal(res.error.code, INVALID_PARAMS)
    assert.ok(res.error.message.includes('Start and Count parameters cannot be less than 1'))
  })

  it('call with valid parameters', async () => {
    DefaultStateManager.prototype.setStateRoot = vi.fn()
    DefaultStateManager.prototype.shallowCopy = function () {
      return this
    }
    const { chain, service, server, common } = await setupChain(genesisJSON, 'post-merge', {
      engine: true,
      hardfork: Hardfork.Cancun,
    })
    const rpc = getRpcClient(server)
    common.setHardfork(Hardfork.Cancun)
    const pkey = hexToBytes('0x9c9996335451aab4fc4eac58e31a8c300e095cdbcee532d53d09280e83360355')
    const address = Address.fromPrivateKey(pkey)
    await service.execution.vm.stateManager.putAccount(address, new Account())
    const account = await service.execution.vm.stateManager.getAccount(address)

    account!.balance = 0xfffffffffffffffn
    await service.execution.vm.stateManager.putAccount(address, account!)
    const tx = TransactionFactory.fromTxData(
      {
        type: 0x01,
        maxFeePerBlobGas: 1n,
        maxFeePerGas: 10000000000n,
        maxPriorityFeePerGas: 100000000n,
        gasLimit: 30000000n,
      },
      { common }
    ).sign(pkey)
    const tx2 = TransactionFactory.fromTxData(
      {
        type: 0x01,
        maxFeePerBlobGas: 1n,
        maxFeePerGas: 10000000000n,
        maxPriorityFeePerGas: 100000000n,
        gasLimit: 30000000n,
        nonce: 1n,
      },
      { common }
    ).sign(pkey)
    const block = Block.fromBlockData(
      {
        transactions: [tx],
        header: BlockHeader.fromHeaderData(
          { parentHash: chain.genesis.hash(), number: 1n },
          { common, skipConsensusFormatValidation: true }
        ),
      },
      { common, skipConsensusFormatValidation: true }
    )
    const block2 = Block.fromBlockData(
      {
        transactions: [tx2],
        header: BlockHeader.fromHeaderData(
          { parentHash: block.hash(), number: 2n },
          { common, skipConsensusFormatValidation: true }
        ),
      },
      { common, skipConsensusFormatValidation: true }
    )

    await chain.putBlocks([block, block2], true)

    const res = await rpc.request(method, ['0x1', '0x4'])
    assert.equal(
      res.result[0].transactions[0],
      bytesToHex(tx.serialize()),
      'got expected transaction from first payload'
    )
    assert.equal(
      res.result.length,
      2,
      'length of response matches start of range up to highest known block'
    )

    const res2 = await rpc.request(method, ['0x3', '0x2'])
    assert.equal(
      res2.result.length,
      0,
      'got empty array when start of requested range is beyond current chain head'
    )
  })

  it('call with valid parameters on pre-Shanghai hardfork', async () => {
    DefaultStateManager.prototype.setStateRoot = vi.fn()
    DefaultStateManager.prototype.shallowCopy = function () {
      return this
    }
    const { chain, service, server, common } = await setupChain(preShanghaiGenesisJSON, 'london', {
      engine: true,
      hardfork: Hardfork.London,
    })
    const rpc = getRpcClient(server)
    common.setHardfork(Hardfork.London)
    const pkey = hexToBytes('0x9c9996335451aab4fc4eac58e31a8c300e095cdbcee532d53d09280e83360355')
    const address = Address.fromPrivateKey(pkey)
    await service.execution.vm.stateManager.putAccount(address, new Account())
    const account = await service.execution.vm.stateManager.getAccount(address)

    account!.balance = 0xfffffffffffffffn
    await service.execution.vm.stateManager.putAccount(address, account!)
    const tx = TransactionFactory.fromTxData(
      {
        type: 0x01,
        maxFeePerBlobGas: 1n,
        maxFeePerGas: 10000000000n,
        maxPriorityFeePerGas: 100000000n,
        gasLimit: 30000000n,
      },
      { common }
    ).sign(pkey)
    const tx2 = TransactionFactory.fromTxData(
      {
        type: 0x01,
        maxFeePerBlobGas: 1n,
        maxFeePerGas: 10000000000n,
        maxPriorityFeePerGas: 100000000n,
        gasLimit: 30000000n,
        nonce: 1n,
      },
      { common }
    ).sign(pkey)
    const block = Block.fromBlockData(
      {
        transactions: [tx],
        header: BlockHeader.fromHeaderData(
          { parentHash: chain.genesis.hash(), number: 1n },
          { common, skipConsensusFormatValidation: true }
        ),
      },
      { common, skipConsensusFormatValidation: true }
    )
    const block2 = Block.fromBlockData(
      {
        transactions: [tx2],
        header: BlockHeader.fromHeaderData(
          { parentHash: block.hash(), number: 2n },
          { common, skipConsensusFormatValidation: true }
        ),
      },
      { common, skipConsensusFormatValidation: true }
    )

    await chain.putBlocks([block, block2], true)

    const res = await rpc.request(method, ['0x1', '0x4'])

    assert.isNull(res.result[0].withdrawals, 'withdrawals field is null for pre-shanghai blocks')

    service.execution.vm.common.setHardfork(Hardfork.London)
  })
})
