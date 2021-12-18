import { calculated } from '@/selectors/calculated'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const Bop = () => {
  const bop = useRecoilValue(calculated)

  return (
    <>
      <p className="mt-6">売上(収入-支出)</p>
      <p>{isNaN(bop) ? '数値を入力してください' : bop}</p>
    </>
  )
}
