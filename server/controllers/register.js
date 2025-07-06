import UsersModel from "../model/UsersModel.js";
import bcrypt from 'bcrypt';
import Joi from "joi";
export const register = async (req, res, next)=>{
    // Validate request body
    const {error: validationError} = validateUser(req.body)
    const { name, email, password } = req.body;
    try {
        
        if (validationError) {
            const error = new Error(validationError.details[0].message);
            error.statusCode = 400; // Bad Request
            throw error;
        }

        const formateName = name.toLowerCase();
        const formateEmail = email.toLowerCase();

        const findUser = await UsersModel.findOne({email: formateEmail});
            if (findUser) {
            const error = new Error("User already exists");
            error.statusCode = 400; 
            throw error;
            }
       
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new UsersModel({
            name: formateName,
            email: formateEmail,
            password: hashedPassword
        })
         await newUser.save();
        res.json({status: "success", message: "User registered successfully"});
    }
    catch (error) {
        console.log(error.message || "Internal Server Error");
        res.json({status:'false', message: error.message || "Internal Server Error"});
    }
} 

const validateUser = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(12).required()
    });
    return schema.validate(data);
}