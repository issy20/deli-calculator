import { incomeResultState } from '@/atoms/incomeResultState'
import { ListType } from 'lib/type/type'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

export const IncomeCalculator = () => {
  const [incomeInputList, setIncomeInputList] = useState([
    { income: '0' },
  ] as ListType[])

  const setIncomeResult = useSetRecoilState(incomeResultState)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target
    const list = [...incomeInputList]
    list[index][name] = value
    setIncomeInputList(list)
  }

  const handleRemoveClick = (index: number) => {
    const list = [...incomeInputList]
    list.splice(index, 1)
    setIncomeInputList(list)
  }

  const handleAddClick = () => {
    setIncomeInputList([...incomeInputList, { income: '0' }])
  }

  const incomeResult = incomeInputList.map((a) => a.income).map(Number)

  console.log(JSON.stringify(incomeResult))

  const sumIncomeResult = incomeResult.reduce((sum, ele) => sum + ele, 0)

  useEffect(() => {
    setIncomeResult(sumIncomeResult)
  })

  console.log(sumIncomeResult)
  return (
    <>
      <label className="mb-2">収入(代金引換)</label>
      {incomeInputList.map((x, i) => (
        <React.Fragment key={i}>
          <div>
            <input
              type="text"
              inputMode="numeric"
              value={x.income}
              name="income"
              onChange={(e) => handleInputChange(e, i)}
              className="shadow appearance-none mb-2 text-gray-700 border rounded text-center"
            />
            {incomeInputList.length !== 1 && (
              <button
                className="text-gray-400 ml-2"
                onClick={() => handleRemoveClick(i)}
              >
                ×
              </button>
            )}
          </div>
          {incomeInputList.length - 1 === i && (
            <button className="text-gray-400" onClick={handleAddClick}>
              +
            </button>
          )}
        </React.Fragment>
      ))}
      <p>
        {isNaN(sumIncomeResult) ? '数値を入力してください' : sumIncomeResult}
      </p>
    </>
  )
}
