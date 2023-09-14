import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        position: "top-right",
        style: {
          background: "#283046",
          color: 'white'
        }
      }}
    />
  </React.StrictMode>,
)
