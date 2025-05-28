import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Asegúrate que esté presente:
import './index.css' // o './App.css'
import './index.css' // o './App.css' si ese estás usando

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
