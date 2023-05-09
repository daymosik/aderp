import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/styles/main.scss'

import 'bootstrap/js/dist/dropdown.js'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'

ReactDOM.createRoot(document.getElementById('wrapper') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
