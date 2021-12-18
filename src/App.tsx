import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/page/Home'
import React from 'react'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
