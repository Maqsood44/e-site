import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './Context/Cart/Context.jsx'
import LoginContextProvider from './Context/Login/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <LoginContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
)
