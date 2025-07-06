import UsersModel from "../model/UsersModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const login = async (req, res, next) => {
    const {email , password } = req.body;

    try{
        const formateEmail = email.toLowerCase();
        const findUser = await UsersModel.findOne({email: formateEmail});
        if(!findUser){
            const error = new Error("User not found");
            error.statusCode = 404; // Not Found
            throw error;
        }
        const isPassMatch = await bcrypt.compare(password,findUser.password);
        if(!isPassMatch){
            const error = new Error("Incorrect password");
            error.statusCode = 400// Not Found
            throw error
        }

        const accessToken = jwt.sign({email:formateEmail, userId: findUser._id},
            process.env.ACCESS_TOKEN_KEY, 
            {expiresIn: '1h'})

            res.json({status: "success",message: "Login successfully",token: accessToken,});

    }catch (error) {
       next(error);
    }
}
export default login;