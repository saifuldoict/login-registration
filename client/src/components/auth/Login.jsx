import React,{ useState } from 'react'
import './auth.css'
import Input from '../ui/Input'
import Button from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../utils/api';
import LoadingButton from '../ui/LoadingButton';
const Login = () => {
  const navigate = useNavigate()
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [loading, setLoading] = useState(false);
   
    const emailChange = (event)=>{
        setEmail(event.target.value)
    }
    const passwordChange = (event)=>{
        setPassword(event.target.value)
    }
    
        const submitHandler= async(event)=>{
            event.preventDefault();
            try{
                    setLoading(true);
                    const response = await fetch(api().loginUser,{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({email, password})
                    });
                    const result = await response.json();
                    setLoading(false);
                    if(!response.ok){
                        throw new Error(result.message || 'Login failed');
                    }
                    if(result?.status){
                        toast.success(result?.message);
                        localStorage.setItem('accessToken', result?.token);}
                
            }catch (error) {
                toast.error(error.message || 'Something went wrong'); 
            }
            navigate('/')
            console.log(email, password)
        }
  return (
    <div className='auth_main'>
        <form onSubmit={submitHandler}>
            <div className='auth_container'>
                <div className='auth_header'>
                    
                    <h1 className='auth_heading'>Welcome back</h1>
                    <p className='auth_title'>Login to continue</p>
                </div>
                
                 <div className='auth_item'>
                    <label>Email *</label>
                    <Input onChange={emailChange}  type="email" required placeholder={'Enter Your Email'}/>
                </div>
                 <div className='auth_item'>
                    <label>Password *</label>
                    <Input onChange={passwordChange} type="password" required placeholder={'Enter Your Password'}/>
                </div>

                <div className='auth_action'>
                    <Button >
                        <LoadingButton loading={loading} title={'login'} />
                    </Button>
                </div>
               <div className='auth_options'>
                    <Link to={'/register'}>Create new account?</Link>
                    <Link to={'/forget'}>Forget password</Link>
                </div>

            </div>
        </form>
    </div>
  )
}

export default Login