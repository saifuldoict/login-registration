import React, { useEffect, useRef, useState } from 'react'
import './auth.css'
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import { TbLockPassword } from "react-icons/tb";
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../utils/api';
const VerifyOtp = () => {
    const navigate = useNavigate()
    const ref1=useRef(null)
    const ref2=useRef(null)
    const ref3=useRef(null)
    const ref4=useRef(null)
    const ref5=useRef(null)
    const ref6=useRef(null)

    const inputRef=[ref1,ref2,ref3,ref4,ref5,ref6]
    

    const [otp1, setOtp1]= useState('')
    const [otp2, setOtp2]= useState('')
    const [otp3, setOtp3]= useState('')
    const [otp4, setOtp4]= useState('')
    const [otp5, setOtp5]= useState('')
    const [otp6, setOtp6]= useState('')

    const otpArray =[setOtp1,setOtp2,setOtp3,setOtp4,setOtp5,setOtp6]


    useEffect(()=>{
        if(ref1.current){
            ref1.current.focus()
        }
    },[])

    const inputChange =(event,location)=>{
        if(location <5 && event.target.value){
           inputRef[location+1].current.focus(); 
           
        }
         otpArray[location](event.target.value);
         
    };
    const submitHandler= async (event)=>{
            event.preventDefault();
            const finalOtp=otp1+otp2+otp3+otp4+otp5+otp6;
            // console.log(finalOtp)
            try{
                const response = await fetch(api().otpVerify,{
                    method: 'POST',
                    body:JSON.stringify({otp:finalOtp}),
                    headers:{'Content-type': 'application/json'}
                })
                const result = await response.json()
                if(!response.ok){
                    throw new Error(result?.message)
                }
                if(result?.status){
                    console.log(result)
                }
            }catch(error){
                toast.error(error.message)
            }
            // navigate('/update/password')
            
             
        }
  return (
    <div className='auth_main'>
        <form onSubmit={submitHandler}>
            <div className='auth_container'>
                <div className='auth_header'>
                    <TbLockPassword />
                    <h1 className='auth_heading'>Verify your OTP</h1>
                    <p className='auth_title'>Enter OTP here from your email</p>
                </div>
                
                 
                 <div className='auth_item'>
                    <label>OTP *</label>
                    <div className='otp_input_container'>
                      {
                        inputRef.map((item, index)=>{
                            return(
                                 <input 
                                 required
                                     key={index}
                                    onChange={(event)=>inputChange(event,index)}
                                 ref={item}
                                 onInput={(event)=>{
                                if(event.target.value.length >1){
                                    event.target.value = event.target.value.slice(0,1)
                                }
                            }} type='number' className='ui_input otp_input'/>
                        )
                        })
                      }
                    </div>
                </div>

                <div className='auth_action'>
                    <Button>Verify</Button>
                </div>
                <div className='auth_timer'>
                    <Timer/>
                </div>
                <div>
                    <BackToLogin/>
                </div>
               

            </div>
        </form>
    </div>
  )
}

export default VerifyOtp