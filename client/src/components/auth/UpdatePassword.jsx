import React, { useState } from 'react'
import './auth.css'
import Input from '../ui/Input'
import { FaRegSquarePlus } from "react-icons/fa6";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { useNavigate } from 'react-router-dom';
const UpdatePassword = () => {
    const navigate = useNavigate()
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const passwordChange = (event)=>{
        setPassword(event.target.value);
    }
    const confirmPasswordChange = (event)=>{
        setConfirmPassword(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        navigate('/login')
       console.log(password, confirmPassword); 
        }
       
    return (
    <div className='auth_main'>
        <form onSubmit={submitHandler}>
            <div className='auth_container'>
                <div className='auth_header'>
                   
                    <h1 className='auth_heading'>Set New Password</h1>
                    <p className='auth_title'>Enter 6 digit password here</p>
                </div>
               
               
                 <div className='auth_item'>
                    <label>Password *</label>
                    <Input onChange={passwordChange} type="password" required placeholder='Enter Your new Password'/>
                </div>
                <div className='auth_item'>
                    <label>Confirm Password *</label>
                    <Input onChange={confirmPasswordChange} type="password" required placeholder='Confirm Your Password'/>
                </div>


                <div className='auth_action'>
                    <Button>Update Password</Button>
                </div>
                <div>
                    <BackToLogin/>
                </div>

            </div>
        </form>
    </div>
  )
}

export default UpdatePassword