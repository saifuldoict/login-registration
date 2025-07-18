import UsersModel from "../model/UsersModel.js";
import crypto from "crypto";
import sendMail from "../utils/sendMail.js";

const forgetPassword = async (req, res) => {
    const { email } = req.body;
    try{
        const formatEmail = email.toLowerCase();
        const findUser = await UsersModel.findOne({email: formatEmail});
        if(!findUser){
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }

        if(findUser.otp && new Date(findUser.otp.sendTime).getTime()> new Date().getTime())
        {
            const error = new Error(`please wait until ${new Date(findUser.otp.sendTime).toLocaleString()}`);
            error.status = 400;
            throw error;
        }
        const otp = Math.floor(Math.random()*90000)+100000;
        console.log(otp);
        const token = crypto.randomBytes(32).toString("hex");

        findUser.otp.otp = otp
        findUser.otp.sendTime = new Date().getTime();
        findUser.otp.token = token;

        await findUser.save();
        sendMail(otp,formatEmail);
        res.json({status:"success", message: "OTP sent successfully", token: token})



    }catch(error){
        next(error);
    }
}
export default forgetPassword;