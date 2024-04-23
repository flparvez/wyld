import mongoose,{Schema,Document} from 'mongoose'



 export interface Brands extends Document{
    name:String,
    slug:String,
    logo:String,
    discount:Number,
    condition:String,
  
}

const BrandSchema:Schema<Brands> = new Schema({
name:{
    type:String,
    required:true
},
slug:{
    type:String,
    required:true
},

logo:{
    type:String,
    required:true
},
discount:Number,
condition:String,


})


const Brand =mongoose.models.brands || mongoose.model("brands",BrandSchema)

export default Brand