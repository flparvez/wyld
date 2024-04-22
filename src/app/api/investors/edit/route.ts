import { connect } from "@/dbConfig/dbConfig";

import Investor  from "@/model/InvestorsModel";

import {NextRequest,NextResponse} from 'next/server'

connect()

export async function PUT(request:NextRequest){
try {
     const reqBody =  await request.json()
const {img,name,slug,work} = reqBody

// Validation
const brand = await Investor.findOne({name})
if (brand) {
    return NextResponse.json({error:"Brand Name Already exist"},{status:400})
}

const newInvestors = new Investor({
     img,
     name,
     work
})

const savedInvestors = await newInvestors.save()

return NextResponse.json({
    message:"Investor Brand Create Succesfully",
    success:true,
    savedInvestors
})




} catch (error:any) {
     return NextResponse.json({error:error.message},{status:500})
}
}