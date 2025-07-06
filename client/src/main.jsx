import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
 <div className='bg-amber-100'>
    <div className='max-w-7xl mx-auto p-4'>
      <AuthProvider>
    <BrowserRouter>
    <Toaster position='top-right'/>
        <App />
  </BrowserRouter>
  </AuthProvider>
    </div>
 </div>
)
