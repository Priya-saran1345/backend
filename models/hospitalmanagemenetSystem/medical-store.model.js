import mongoose from "mongoose";
const medicalStoreSchema= new mongoose.Schema({},{timestamps:true})
export const MedicalStore=mongoose.model('MedicalStore',medicalStoreSchema)