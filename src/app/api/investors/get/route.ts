import { connect } from "@/dbConfig/dbConfig";

import Investor  from "@/model/InvestorsModel";

import {NextRequest,NextResponse} from 'next/server'

connect()

export async function GET(request:NextRequest){
 const data = await Investor.find()

 return NextResponse.json({
    message:"Investor Brand Fetched Succesfully",
    success:true,
    data
})

}