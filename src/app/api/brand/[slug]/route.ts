import { connect } from "@/dbConfig/dbConfig";
import Brand from "@/model/BrandModel";
import slugify from 'slugify';




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
const {name,logo,discount,condition} = reqBody

console.log(reqBody)

     const { slug } = context.params;
     const result = await Brand.findOne({slug:slug})
    //  let success= true
// Validation
// if (result) {
//     success:true
// }

result.name= name
result.slug= slugify(name)
result.logo = logo
result.discount =discount
result.condition = condition

   await result.save();

return NextResponse.json({
    message:"Brand Edit Successfully",
    success:true,
    result
    
})




} catch (error:any) {
     return NextResponse.json({error:error.message},{status:500})
}
}