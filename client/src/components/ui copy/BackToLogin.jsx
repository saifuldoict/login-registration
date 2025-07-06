import React from 'react'
import './backtoLogin.css'
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const BackToLogin = () => {
  const navigate = useNavigate();
  const navigateHandler = () =>{
    navigate('/login')
  }
  return (
    <div onClick={navigateHandler} className='back_toLogin_ui'>
        <LuArrowLeft />
        <span>Back To Login</span>
        </div>
  )
}

export default BackToLogin