import { ListType } from 'lib/type/type'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { spendResultState } from '@/atoms/spendResultState'

export const SpendCalculator = () => {
  const [spendInputList, setSpendInputList] = useState([
    { spend: '0' },
  ] as ListType[])

  const setSpendResult = useSetRecoilState(spendResultState)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // const { name, value } = e.target
    const list = [...spendInputList]
    list[index][e.target.name] = e.target.value
    setSpendInputList(list)
  }

  const handleRemoveClick = (index: number) => {
    const list = [...spendInputList]
    list.splice(index, 1)
    setSpendInputList(list)
  }

  const handleAddClick = () => {
    setSpendInputList([...spendInputList, { spend: '0' }])
  }

  const spendResult = spendInputList.map((s) => s.spend).map(Number)

  console.log(JSON.stringify(spendResult))

  const sumSpendResult = spendResult.reduce((sum, ele) => sum + ele, 0)

  useEffect(() => {
    setSpendResult(sumSpendResult)
  })

  return (
    <>
      <label className="mt-6 mb-2">支出(レシート、領収書)</label>
      {spendInputList.map((x, i) => (
        <React.Fragment key={i}>
          <div>
            <input
              value={x.spend}
              inputMode="numeric"
              name="spend"
              type="text"
              onChange={(e) => handleInputChange(e, i)}
              className="shadow appearance-none mb-2 text-gray-700 border rounded text-center"
            />
            {spendInputList.length !== 1 && (
              <button
                className="text-gray-400 ml-2"
                onClick={() => handleRemoveClick(i)}
              >
                ×
              </button>
            )}
          </div>

          {spendInputList.length - 1 === i && (
            <button className="text-gray-400" onClick={handleAddClick}>
              +
            </button>
          )}
        </React.Fragment>
      ))}
      <p>{isNaN(sumSpendResult) ? '数値を入力してください' : sumSpendResult}</p>
    </>
  )
}
