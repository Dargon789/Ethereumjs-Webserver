import { Chain, Common, Hardfork } from '@ethereumjs/common'
import { assert, describe, it } from 'vitest'

import { EVM, getActivePrecompiles } from '../../src/index.js'

describe('Precompiles: ECMUL', () => {
  it('ECMUL', async () => {
    const common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Petersburg })
    const evm = await EVM.create({
      common,
    })
    const ECMUL = getActivePrecompiles(common).get('0000000000000000000000000000000000000007')!

    const result = await ECMUL({
      data: new Uint8Array(0),
      gasLimit: BigInt(0xffff),
      common,
      _EVM: evm,
    })

    assert.deepEqual(result.executionGasUsed, BigInt(40000), 'should use petersburg gas costs')
  })
})
