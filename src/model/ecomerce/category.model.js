import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({

name:{
    type:String,
    required:true
}


},{timeseries:true});

export const Category=new mongoose.model("Category",categorySchema)