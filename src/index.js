import React from 'react'
import 'core-js'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//import 'typeface-roboto'
import './index.css'
import App from './components/App/App'

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
)