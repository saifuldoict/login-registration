import express from 'express';
import { register } from '../controllers/register.js';
import login from '../controllers/login.js';
import forgetPassword from '../controllers/forgetPassword.js';
import verifyOtp from '../controllers/verifyOtp.js';




const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post ('/forget/password', forgetPassword)
userRouter.post('/otp/verify', verifyOtp)

export default userRouter;