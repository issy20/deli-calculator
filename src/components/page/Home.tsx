import React from 'react'
import { Bop } from '../model/Bop'
import { IncomeCalculator } from '../model/IncomeCalculator'
import { SpendCalculator } from '../model/SpendCalculator'
import { Layout } from '../ui/Layout'

const Home = () => {
  return (
    <Layout>
      <IncomeCalculator />
      <SpendCalculator />
      <Bop />
    </Layout>
  )
}

export default Home
