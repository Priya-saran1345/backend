import mongoose from "mongoose";
const medicalStoreSchema= new mongoose.Schema({

name:{
    type:String,
    required:true
},
disgnostWith:{
    type:String,
    required:true
},
address:{
 type:String,
    required:true

},
age:{
    type:Number,
    required:true
},
bloodgroup:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true,
    enum:['M','F','O']
},
admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",
    required:true
}
},{timestamps:true})
export const MedicalStore=mongoose.model('MedicalStore',medicalStoreSchema)