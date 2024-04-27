import { connect } from "@/dbConfig/dbConfig";
import slugify from 'slugify';


import {NextRequest,NextResponse} from 'next/server'
import Brand from "@/model/BrandModel";

connect()

export async function POST(request:NextRequest){
try {
     const reqBody =  await request.json()
const {name,logo,discount,condition} = reqBody

// Validation
const brand = await Brand.findOne({name})
if (brand) {
    return NextResponse.json({error:"Brand Name Already exist"},{status:400})
}

const newBrands = new Brand({
     name,
     slug:slugify(name),
     logo,
     discount,
     condition
    
})

const savedBrand = await newBrands.save()

return NextResponse.json({
    message:"Brand Create Successfully",
    success:true,
    savedBrand
})


} catch (error:any) {
     return NextResponse.json({error:error.message},{status:500})
}
}



export async function GET(request:NextRequest){
 const data = await Brand.find()

 return NextResponse.json({
    message:" Brand Fetched Successfully",
    success:true,
    data
})

}