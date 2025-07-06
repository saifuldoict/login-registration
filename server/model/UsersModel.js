import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    otp:{
        otp:{type:String},
        sendTime:{type: Number},
        token:{type:String}
    },
},{timestamps:true, versionKey:false});

const UsersModel = mongoose.model('User', userSchema);
export default UsersModel;