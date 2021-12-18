import { incomeResultState } from '@/atoms/incomeResultState'
import { spendResultState } from '@/atoms/spendResultState'
import { calculated } from '@/selectors/calculated'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export const Bop = () => {
  // const spend = useRecoilState(spendResultState)
  // const income = useRecoilState(incomeResultState)
  // useEffect(() =>  {
  //   const bop = income - spend
  // }, [])

  const bop = useRecoilValue(calculated)

  return (
    <>
      <p className="mt-6">売上(収入-支出)</p>
      <p>{isNaN(bop) ? '数値を入力してください' : bop}</p>
    </>
  )
}
