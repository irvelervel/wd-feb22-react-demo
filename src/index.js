import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// App is a React Component

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
// This file is basically mounting <App />, a React Component, into the empty div with an id="root"
