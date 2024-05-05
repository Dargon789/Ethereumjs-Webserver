import { Block } from '@ethereumjs/block'
import { Chain, Common } from '@ethereumjs/common'
import { bytesToHex, hexToBytes } from '@ethereumjs/util'
import { VM } from '../src/vm.js'
import goerliBlock2 from './testData/goerliBlock2.json'

const main = async () => {
  const common = new Common({ chain: Chain.Goerli, hardfork: 'london' })
  const vm = await VM.create({ common, setHardfork: true })

  const block = Block.fromRPC(goerliBlock2, undefined, { common })
  const result = await vm.runBlock({ block, generate: true, skipHeaderValidation: true }) // we skip header validaiton since we are running a block without the full Ethereum history available
  console.log(`The state root for Goerli block 2 is ${bytesToHex(result.stateRoot)}`)
}

main()
