import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './utils/cs'


async function run() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  )
}

run()
