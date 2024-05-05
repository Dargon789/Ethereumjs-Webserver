import { Blockchain } from '@ethereumjs/blockchain'
import { Chain } from '@ethereumjs/common'
import { getGenesis } from '@ethereumjs/genesis'
import { Address } from '@ethereumjs/util'
import { VM } from '@ethereumjs/vm'

const main = async () => {
  const genesisState = getGenesis(Chain.Mainnet)

  const blockchain = await Blockchain.create({ genesisState })
  const vm = await VM.create({ blockchain, genesisState })
  const account = await vm.stateManager.getAccount(
    Address.fromString('0x000d836201318ec6899a67540690382780743280')
  )
  console.log(
    `This balance for account 0x000d836201318ec6899a67540690382780743280 in this chain's genesis state is ${Number(
      account?.balance
    )}`
  )
}
main()
