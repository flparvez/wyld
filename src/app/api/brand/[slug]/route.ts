import { connect } from "@/dbConfig/dbConfig";
import Brand from "@/model/BrandModel";



import {NextRequest,NextResponse} from 'next/server'


connect()


export async function GET(request:NextRequest,context:any){
 const { slug } = context.params;
//  console.log(slug)

const result = await Brand.findOne({slug:slug})



return NextResponse.json({
    message:"Brand Details Fetched Successfully",
    success:true,
    result
})

}





export async function PUT(request:NextRequest,context:any){


try {
     const reqBody =  await request.json()



     const { slug } = context.params;
     const result = await Brand.findOne({slug:slug},reqBody)
     let success= true
// Validation
if (result) {
    success:true
}


return NextResponse.json({
    message:"Brand Edit Successfully",
    success,
    result
})




} catch (error:any) {
     return NextResponse.json({error:error.message},{status:500})
}
}