import { Withdrawal } from '@ethereumjs/util'

const withdrawal = Withdrawal.fromWithdrawalData({
  index: 0n,
  validatorIndex: 65535n,
  address: '0x0000000000000000000000000000000000000000',
  amount: 0n,
})

console.log('Withdrawal object created:')
console.log(withdrawal.toJSON())
