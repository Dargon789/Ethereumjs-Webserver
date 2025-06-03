import { bytesToHex, equalsBytes, short } from '@ethereumjs/util'

import { EvmErrorResult, OOGResult } from '../evm.js'
import { ERROR, EvmError } from '../exceptions.js'

import {
  BLS12_381_FromG2Point,
  BLS12_381_ToFrPoint,
  BLS12_381_ToG2Point,
} from './util/bls12_381.js'

import type { ExecResult } from '../types.js'
import type { PrecompileInput } from './types.js'

export async function precompile0f(opts: PrecompileInput): Promise<ExecResult> {
  const mcl = (<any>opts._EVM)._mcl!

  const inputData = opts.data

  // note: the gas used is constant; even if the input is incorrect.
  const gasUsed = opts.common.paramByEIP('gasPrices', 'Bls12381G2MulGas', 2537) ?? BigInt(0)
  if (opts._debug !== undefined) {
    opts._debug(
      `Run BLS12G2MUL (0x0f) precompile data=${short(opts.data)} length=${
        opts.data.length
      } gasLimit=${opts.gasLimit} gasUsed=${gasUsed}`
    )
  }

  if (opts.gasLimit < gasUsed) {
    if (opts._debug !== undefined) {
      opts._debug(`BLS12G2MUL (0x0f) failed: OOG`)
    }
    return OOGResult(opts.gasLimit)
  }

  if (inputData.length !== 288) {
    if (opts._debug !== undefined) {
      opts._debug(`BLS12G2MUL (0x0f) failed: Invalid input length length=${inputData.length}`)
    }
    return EvmErrorResult(new EvmError(ERROR.BLS_12_381_INVALID_INPUT_LENGTH), opts.gasLimit)
  }

  // check if some parts of input are zero bytes.
  const zeroBytes16 = new Uint8Array(16)
  const zeroByteCheck = [
    [0, 16],
    [64, 80],
    [128, 144],
    [192, 208],
  ]

  for (const index in zeroByteCheck) {
    const slicedBuffer = opts.data.subarray(zeroByteCheck[index][0], zeroByteCheck[index][1])
    if (!equalsBytes(slicedBuffer, zeroBytes16)) {
      if (opts._debug !== undefined) {
        opts._debug(`BLS12G2MUL (0x0f) failed: Point not on curve`)
      }
      return EvmErrorResult(new EvmError(ERROR.BLS_12_381_POINT_NOT_ON_CURVE), opts.gasLimit)
    }
  }

  // TODO: verify that point is on G2

  // convert input to mcl G2 point/Fr point, add them, and convert the output to a Uint8Array.
  let mclPoint
  try {
    mclPoint = BLS12_381_ToG2Point(opts.data.subarray(0, 256), mcl)
  } catch (e: any) {
    if (opts._debug !== undefined) {
      opts._debug(`BLS12G2MUL (0x0f) failed: ${e.message}`)
    }
    return EvmErrorResult(e, opts.gasLimit)
  }

  const frPoint = BLS12_381_ToFrPoint(opts.data.subarray(256, 288), mcl)

  const result = mcl.mul(mclPoint, frPoint)

  const returnValue = BLS12_381_FromG2Point(result)

  if (opts._debug !== undefined) {
    opts._debug(`BLS12G2MUL (0x0f) return value=${bytesToHex(returnValue)}`)
  }

  return {
    executionGasUsed: gasUsed,
    returnValue,
  }
}
