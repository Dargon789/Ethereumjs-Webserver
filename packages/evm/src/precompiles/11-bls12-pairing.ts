import { bytesToHex, concatBytes, equalsBytes, hexToBytes, short } from '@ethereumjs/util'

import { EvmErrorResult, OOGResult } from '../evm.js'
import { ERROR, EvmError } from '../exceptions.js'

import { BLS12_381_ToG1Point, BLS12_381_ToG2Point } from './util/bls12_381.js'

import type { ExecResult } from '../types.js'
import type { PrecompileInput } from './types.js'

const zeroBuffer = new Uint8Array(32)
const oneBuffer = concatBytes(new Uint8Array(31), hexToBytes('0x01'))

export async function precompile11(opts: PrecompileInput): Promise<ExecResult> {
  const mcl = (<any>opts._EVM)._mcl!

  const inputData = opts.data

  const baseGas = opts.common.paramByEIP('gasPrices', 'Bls12381PairingBaseGas', 2537) ?? BigInt(0)

  if (inputData.length === 0) {
    if (opts._debug !== undefined) {
      opts._debug(`BLS12PAIRING (0x11) failed: Empty input`)
    }
    return EvmErrorResult(new EvmError(ERROR.BLS_12_381_INPUT_EMPTY), opts.gasLimit)
  }

  const gasUsedPerPair =
    opts.common.paramByEIP('gasPrices', 'Bls12381PairingPerPairGas', 2537) ?? BigInt(0)

  const gasUsed = baseGas + gasUsedPerPair * BigInt(Math.floor(inputData.length / 384))
  if (opts._debug !== undefined) {
    opts._debug(
      `Run BLS12PAIRING (0x11) precompile data=${short(opts.data)} length=${
        opts.data.length
      } gasLimit=${opts.gasLimit} gasUsed=${gasUsed}`
    )
  }

  if (inputData.length % 384 !== 0) {
    if (opts._debug !== undefined) {
      opts._debug(`BLS12PAIRING (0x11) failed: Invalid input length length=${inputData.length}`)
    }
    return EvmErrorResult(new EvmError(ERROR.BLS_12_381_INVALID_INPUT_LENGTH), opts.gasLimit)
  }

  if (opts.gasLimit < gasUsed) {
    if (opts._debug !== undefined) {
      opts._debug(`BLS12PAIRING (0x11) failed: OOG`)
    }
    return OOGResult(opts.gasLimit)
  }

  // prepare pairing list and check for mandatory zero bytes

  const pairs = []

  const zeroBytes16 = new Uint8Array(16)
  const zeroByteCheck = [
    [0, 16],
    [64, 80],
    [128, 144],
    [192, 208],
    [256, 272],
    [320, 336],
  ]

  for (let k = 0; k < inputData.length / 384; k++) {
    // zero bytes check
    const pairStart = 384 * k
    for (const index in zeroByteCheck) {
      const slicedBuffer = opts.data.subarray(
        zeroByteCheck[index][0] + pairStart,
        zeroByteCheck[index][1] + pairStart
      )
      if (!equalsBytes(slicedBuffer, zeroBytes16)) {
        if (opts._debug !== undefined) {
          opts._debug(`BLS12PAIRING (0x11) failed: Point not on curve`)
        }
        return EvmErrorResult(new EvmError(ERROR.BLS_12_381_POINT_NOT_ON_CURVE), opts.gasLimit)
      }
    }
    let G1
    try {
      G1 = BLS12_381_ToG1Point(opts.data.subarray(pairStart, pairStart + 128), mcl)
    } catch (e: any) {
      if (opts._debug !== undefined) {
        opts._debug(`BLS12PAIRING (0x11) failed: ${e.message}`)
      }
      return EvmErrorResult(e, opts.gasLimit)
    }

    const g2start = pairStart + 128
    let G2
    try {
      G2 = BLS12_381_ToG2Point(opts.data.subarray(g2start, g2start + 256), mcl)
    } catch (e: any) {
      if (opts._debug !== undefined) {
        opts._debug(`BLS12PAIRING (0x11) failed: ${e.message}`)
      }
      return EvmErrorResult(e, opts.gasLimit)
    }

    pairs.push([G1, G2])
  }

  // run the pairing check
  // reference (Nethermind): https://github.com/NethermindEth/nethermind/blob/374b036414722b9c8ad27e93d64840b8f63931b9/src/Nethermind/Nethermind.Evm/Precompiles/Bls/Mcl/PairingPrecompile.cs#L93

  let GT

  for (let index = 0; index < pairs.length; index++) {
    const pair = pairs[index]
    const G1 = pair[0]
    const G2 = pair[1]

    if (index === 0) {
      GT = mcl.millerLoop(G1, G2)
    } else {
      GT = mcl.mul(GT, mcl.millerLoop(G1, G2))
    }
  }

  GT = mcl.finalExp(GT)

  let returnValue

  if (GT.isOne() === true) {
    returnValue = oneBuffer
  } else {
    returnValue = zeroBuffer
  }

  if (opts._debug !== undefined) {
    opts._debug(`BLS12PAIRING (0x11) return value=${bytesToHex(returnValue)}`)
  }

  return {
    executionGasUsed: gasUsed,
    returnValue,
  }
}
