import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/UserModel";
import bcryptjs from 'bcryptjs'

import {NextRequest,NextResponse} from 'next/server'

connect()

export async function POST(request:NextRequest){
    try {
     const reqBody =  await request.json()

const {username,email,number,password} = reqBody

// validation

const user = await User.findOne({email})
if (user) {
    return NextResponse.json({error:"user already exist"},{status:400})
}
const salt = await bcryptjs.genSalt(10);

const hashedPassword = await bcryptjs.hash(password,salt)

const newUser = new User({
    username,
    email,
    number,
    password:hashedPassword
})

const savedUser = await newUser.save()

console.log(savedUser)


return NextResponse.json({
    message:"User Registration Succesfully",
    success:true,
    savedUser
})

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}