import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './components/page/Calculator'
import Home from './components/page/Home'
import React from 'react'
import { RecoilRoot } from 'recoil'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
)
