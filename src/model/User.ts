import mongoose,{Schema,Document} from 'mongoose'



 export interface Messeage extends Document{
    content:String,
    createdAt:Date
}

const UserSchema:Schema<Messeage> = new Schema({
content:String,
createdAt:Date
})