import { Chain, Common, Hardfork } from '@ethereumjs/common'
import { Address, hexToBytes } from '@ethereumjs/util'
import { assert, describe, it } from 'vitest'

import { EVM, getActivePrecompiles } from '../../src/index.js'

describe('Precompiles: hardfork availability', () => {
  it('Test ECPAIRING availability', async () => {
    const ECPAIR_AddressStr = '0000000000000000000000000000000000000008'
    const ECPAIR_Address = new Address(hexToBytes('0x' + ECPAIR_AddressStr))

    // ECPAIR was introduced in Byzantium; check if available from Byzantium.
    const commonByzantium = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Byzantium })

    let ECPAIRING = getActivePrecompiles(commonByzantium).get(ECPAIR_AddressStr)

    if (!ECPAIRING) {
      assert.fail('ECPAIRING is not available in petersburg while it should be available')
    } else {
      assert.ok(true, 'ECPAIRING available in petersburg')
    }

    let evm = await EVM.create({
      common: commonByzantium,
    })
    let result = await evm.runCall({
      caller: Address.zero(),
      gasLimit: BigInt(0xffffffffff),
      to: ECPAIR_Address,
      value: BigInt(0),
    })

    assert.equal(result.execResult.executionGasUsed, BigInt(100000)) // check that we are using gas (if address would contain no code we use 0 gas)

    // Check if ECPAIR is available in future hard forks.
    const commonPetersburg = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Petersburg })
    ECPAIRING = getActivePrecompiles(commonPetersburg).get(ECPAIR_AddressStr)!
    if (ECPAIRING === undefined) {
      assert.fail('ECPAIRING is not available in petersburg while it should be available')
    } else {
      assert.ok(true, 'ECPAIRING available in petersburg')
    }

    evm = await EVM.create({
      common: commonPetersburg,
    })
    result = await evm.runCall({
      caller: Address.zero(),
      gasLimit: BigInt(0xffffffffff),
      to: ECPAIR_Address,
      value: BigInt(0),
    })

    assert.equal(result.execResult.executionGasUsed, BigInt(100000))

    // Check if ECPAIR is not available in Homestead.
    const commonHomestead = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Homestead })
    ECPAIRING = getActivePrecompiles(commonHomestead).get(ECPAIR_AddressStr)!

    if (ECPAIRING !== undefined) {
      assert.fail('ECPAIRING is available in homestead while it should not be available')
    } else {
      assert.ok(true, 'ECPAIRING not available in homestead')
    }

    evm = await EVM.create({
      common: commonHomestead,
    })

    result = await evm.runCall({
      caller: Address.zero(),
      gasLimit: BigInt(0xffffffffff),
      to: ECPAIR_Address,
      value: BigInt(0),
    })

    assert.equal(result.execResult.executionGasUsed, BigInt(0)) // check that we use no gas, because we are calling into an address without code.
  })
})
