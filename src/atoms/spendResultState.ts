import { ListType } from 'lib/type/type'
import { atom } from 'recoil'

export const spendResultState = atom<number>({
  key: 'spendResultState',
  default: 0,
})
