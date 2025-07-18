


const api =()=>{
   
    const baseUrl = 'http://localhost:5100/api/';
    
    const list ={
        registerUser: `${baseUrl}user/register`,
        loginUser: `${baseUrl}user/login`,
        forgetPassword: `${baseUrl}user/forget/password`,
        otpVerify: `${baseUrl}user/otp/verify`,
    }
    return list;
}
export default api;