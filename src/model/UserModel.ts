import mongoose,{Schema,Document} from 'mongoose'



 export interface Users extends Document{
    username:String,
    email:String,
    number:Number,
    password:String,
    isVerified:Boolean,
    isAdmin:Boolean,
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
     verifyToken:String,
    verifyExpiry:Date,
}

const UserSchema:Schema<Users> = new Schema({
username:{
    type:String,
    required:[true,"Please Provide A Username"],
    unique:true
},
email:{
     type:String,
    required:[true,"Please Provide A Email"],
    unique:true
},
number:{
    type:String,
    required:[true,"Please Provide A Mobile Number"],
    unique:true
},
password:{
    type:String,
    required:[true,"Please Provide Password"],
    unique:true
},

isVerified:{
    type:Boolean,
    default:true,
},


isAdmin:{
    type:Boolean,
    default:true,
},

forgotPasswordToken:String,
forgotPasswordExpiry:Date,
verifyToken:String,
verifyExpiry:Date

})

const User =mongoose.models.users || mongoose.model("users",UserSchema)

export default User