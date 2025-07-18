import UsersModel from "../model/UsersModel.js";

const verifyOtp = async (req, res, next)=>{
    const { otp } = req.body;
    try{
        const findUser = await UsersModel.findOne({'otp.otp':otp})
        if(!findUser){
            const error = new Error("invalid otp");
            error.status = 404;
            throw error;
        }
        if(new Date(findUser.opt.sendTime).getTime() < new Date().getTime()){
            const error = new Error("OTP expired");
            error.status = 400;
            throw error;
        }
        findUser.otp.otp = null;
        await findUser.save();
        res.status(200).json({status: 'success', message: "OTP verified successfully" });

    }catch(error){
       next(error);
    }
}
export default verifyOtp;