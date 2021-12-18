import React, { ChangeEvent, memo, useState } from 'react'
import { Bop } from '../model/Bop'
import { IncomeCalculator } from '../model/IncomeCalculator'
import { SpendCalculator } from '../model/SpendCalculator'
import { Layout } from '../ui/Layout'

const Calculator = memo(() => {
  return (
    <Layout>
      <IncomeCalculator />
      <SpendCalculator />
      <Bop />
    </Layout>
  )
})

export default Calculator
