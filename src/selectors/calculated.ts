import { incomeResultState } from '@/atoms/incomeResultState'
import { spendResultState } from '@/atoms/spendResultState'
import { selector } from 'recoil'

export const calculated = selector({
  key: 'calculated',
  get: ({ get }) => {
    const spend = get(spendResultState)
    const income = get(incomeResultState)
    return income - spend
  },
})
