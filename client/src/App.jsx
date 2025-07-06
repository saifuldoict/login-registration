

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import ForgetPassword from './components/auth/ForgetPassword.jsx'
import VerifyOtp from './components/auth/VerifyOtp.jsx'
import UpdatePassword from './components/auth/UpdatePassword.jsx'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
        <Route path='/otp/verify' element={<VerifyOtp/>}/>
        <Route path='/update/password' element={<UpdatePassword/>}/>
      </Routes>
    </div>
  )
}

export default App
