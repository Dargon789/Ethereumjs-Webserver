import { Address } from '@ethereumjs/util'
import { Chain, Common, Hardfork } from '@ethereumjs/common'
import { LegacyTransaction } from '@ethereumjs/tx'
import { VM } from '@ethereumjs/vm'

const main = async () => {
  const common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Shanghai })
  const vm = await VM.create({ common })

  const tx = LegacyTransaction.fromTxData({
    gasLimit: BigInt(21000),
    gasPrice: BigInt(1000000000),
    value: BigInt(1),
    to: Address.zero(),
    v: BigInt(37),
    r: BigInt('62886504200765677832366398998081608852310526822767264927793100349258111544447'),
    s: BigInt('21948396863567062449199529794141973192314514851405455194940751428901681436138'),
  })
  const res = await vm.runTx({ tx, skipBalance: true })
  console.log(res.totalGasSpent) // 21000n - gas cost for simple ETH transfer
}

main()
