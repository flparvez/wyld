import { connect } from "@/dbConfig/dbConfig";
import slugify from 'slugify';
import Investor  from "@/model/InvestorsModel";

import {NextRequest,NextResponse} from 'next/server'


connect()


export async function GET(request:NextRequest,context:any){
 const { slug } = context.params;
//  console.log(slug)

const result = await Investor.findOne({slug:slug})



return NextResponse.json({
    message:"Brand Details Fetched Successfully",
    success:true,
    result
})

}





export async function PUT(request:NextRequest,context:any){


try {
     const reqBody =  await request.json()
// const {img,name,slug,work} = reqBody


     const { slug } = context.params;
     const result = await Investor.findOne({slug:slug},reqBody)
     let success= true
// Validation
if (result) {
    success:true
}


return NextResponse.json({
    message:"Investor Brand Edit Successfully",
    success,
    result
})




} catch (error:any) {
     return NextResponse.json({error:error.message},{status:500})
}
}