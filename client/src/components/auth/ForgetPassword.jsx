import React,{ useState } from 'react'
import './auth.css'
import Input from '../ui/Input'
import { FaRegSquarePlus } from "react-icons/fa6";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../utils/api';

const ForgetPassword = () => {
    const [email, setEmail]= useState('')
    const navigate = useNavigate()
    
    
  
    const emailChange =async (event)=>{
        setEmail(event.target.value)

        try{
            const response = await fetch(api().forgetPassword,{
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ email: event.target.value }),
        });
        const result = await response.json();

        if(!response.ok){
            throw new Error(result?.message || 'Something went wrong');
        }
        if(result?.status){
            toast.success(response?.message);
            console.log(result);
        }




        }catch(error){
            toast.error(error.message)
        }
    }
    
    
        const submitHandler=(event)=>{
            event.preventDefault();
            console.log(email)
            navigate('/otp/verify')
            
        }
  return (
    <div className='auth_main'>
        <form onSubmit={submitHandler}>
            <div className='auth_container'>
                <div className='auth_header'>
                    <FaRegSquarePlus />
                    <h1 className='auth_heading'>Forget your password</h1>
                    <p className='auth_title'>Enter your registered password</p>
                </div>
               
                 <div className='auth_item'>
                    <label>Email *</label>
                    <Input onChange={emailChange} type="email" required placeholder={'Enter Your Email'}/>
                </div>
                 

                <div className='auth_action'>
                    <Button>Send OTP</Button>
                </div>
                <div>
                    <BackToLogin/>
                </div>

            </div>
        </form>
    </div>
  )
}

export default ForgetPassword