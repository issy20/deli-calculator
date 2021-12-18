import { atom } from 'recoil'

export const incomeResultState = atom<number>({
  key: 'incomeResultState',
  default: 0,
})
