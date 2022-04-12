import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { RecoilRoot } from 'recoil'
import { registerSW } from 'virtual:pwa-register'

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.querySelector('#root')
)

registerSW()
