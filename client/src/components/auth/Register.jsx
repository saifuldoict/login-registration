import React, { useState } from 'react'
import './auth.css'
import Input from '../ui/Input'
import { FaRegSquarePlus } from "react-icons/fa6";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import toast from 'react-hot-toast';
import LoadingButton from '../ui/LoadingButton';

const Register = () => {

    const navigate = useNavigate();
const [name, setName]= useState('')
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

 const [loading, setLoading] = useState(false);

const nameChange = (event)=>{
    
    setName(event.target.value)
}
const emailChange = (event)=>{
    setEmail(event.target.value)
}
const passwordChange = (event)=>{
    setPassword(event.target.value)
}

    const submitHandler=async (event)=>{
        event.preventDefault();
       
         try {
             setLoading(true);
            const response = await fetch(api().registerUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, password})
            });
            const result = await response.json();
            setLoading(false);
            if (!response.ok) {
                throw new Error(result.message || 'Registration failed');
            }
            if(result?.status){
                toast.success(result?.message);
              navigate('/login')  
            }
        } catch (error) {
            toast.error(error.message || 'Something went wrong');
            
        }
        
    }
  return (
    <div className='auth_main'>
        <form onSubmit={submitHandler}>
            <div className='auth_container'>
                <div className='auth_header'>
                    <FaRegSquarePlus />
                    <h1 className='auth_heading'>Welcome</h1>
                    <p className='auth_title'>Create Your Account</p>
                </div>
                <div className='auth_item'>
                    <label>Name *</label>
                    <Input onChange={nameChange} type="text" required placeholder={'Enter Your Name'}/>
                </div>
                 <div className='auth_item'>
                    <label>Email *</label>
                    <Input onChange={emailChange} type="email" required placeholder={'Enter Your Email'}/>
                </div>
                 <div className='auth_item'>
                    <label>Password *</label>
                    <Input onChange={passwordChange} type="password" required placeholder={'Enter Your Password'}/>
                </div>

                <div className='auth_action'>
                    <Button >
                        <LoadingButton loading={loading} title={'Register'} />
                    </Button>
                </div>
                <div>
                    <BackToLogin/>
                </div>
                
            </div>
        </form>
    </div>
  )
}

export default Register