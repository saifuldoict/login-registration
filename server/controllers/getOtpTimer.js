import UsersModel from "../model/UsersModel.js"

const getOtpTime = async(req,res,next)=>{
    const {token}= req.body
    try{
        const findUser = UsersModel.findOne({'otp.otpToken':token}).select('otp')
        console.log(findUser)
        if(!findUser){
            const error = new Error('Something went wrong')
            error.status = 404
            throw error   
        }

        res.status(200).json({message:'success',status:true,sendTime:findUser.otp.sendTime})

    }catch(error){
        next(error)
    }
}
export default getOtpTime;