import mongoose,{Schema,Document} from 'mongoose'



 export interface Investors extends Document{
    img:String,
    name:String,
    slug:String,
    work:String,
  
}

const InvestorSchema:Schema<Investors> = new Schema({
img:{
    type:String,
    required:[true,"Please Provide Image Url"],
},
name:{
    type:String,
    required:[true,"Please Provide Brand Name"],
},
slug:{
type:String,

},
work:{
    type:String,
    required:[true,"Please Provide Work Details"],
},


})

const Investor =mongoose.models.investors || mongoose.model("investors",InvestorSchema)

export default Investor