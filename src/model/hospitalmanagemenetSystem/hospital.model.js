import mongoose from "mongoose";
const hospitaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    addressLine1:{
        type:String,
        required:true,
    },
    addressLine2:{
        type:String,
        // required:true,
    },
    city:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    spaializedIn:
        [
            {
                type:string
            }
        ]
},{timestamps:true});
export const Hospital=mongoose.model('Hospital',hospitaSchema);