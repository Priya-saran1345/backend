import mongoose from "mongoose";
import { Hospital } from "./hospital.model";


const HospitalHours=new mongoose.Schema({
   
})

const doctorSchema= new mongoose.Schema({

    name:{
    type:String,
    required:true
},
salary:{
    type:Number,
    required:true
},
qualification:{
    type:String,
    required:true
},
experienceInYear:{
    type:Number,
    required:true,
    default:0
},
worksInHospitals:[
    
]

},{timestamps:true})
export const Doctor=mongoose.model('Doctor',doctorSchema)