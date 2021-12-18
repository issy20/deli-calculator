import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import Calculator from './components/page/Calculator'
import Home from './components/page/Home'
import { App } from './App'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.querySelector('#root')
)
