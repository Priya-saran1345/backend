import mongoose from "mongoose";
const hospitaSchema=new mongoose.Schema({},{timestamps:true});
export const Hospital=mongoose.model('Hospital',hospitaSchema);