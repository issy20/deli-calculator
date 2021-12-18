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
      <p className="text-red-500">Hello</p>
      <button onClick={toCalulator}>Go to Caluculator page</button>
    </Layout>
  )
}

export default Home
