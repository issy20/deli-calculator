import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../ui/Layout'

const Home = () => {
  let navigate = useNavigate()
  const toCalulator = () => {
    navigate('/calculator')
  }
  return (
    <Layout>
      <button onClick={toCalulator}>精算する</button>
    </Layout>
  )
}

export default Home
