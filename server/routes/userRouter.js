import express from 'express';
import { register } from '../controllers/register.js';
import login from '../controllers/login.js';
import forgetPassword from '../controllers/forgetPassword.js';


const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post ('/forget/password', forgetPassword)

export default userRouter;