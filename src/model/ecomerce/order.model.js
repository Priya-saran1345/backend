import mongoose from "mongoose";



const orderItemSchema=new mongoose.Schema({

product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    required:true
},
quantity:{
    type:Number,
    required:true,
    default:1
}
});

const orderschema=new mongoose.Schema({
orderprice:{
    type:Number,
    required:true,
    default:0
},
customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
orderItems:[orderItemSchema],
address:{
    type:String,
    required:true
},
status:{
    type:String,
    enum:["Pending","Cancelled","Delivered"],
    default:"Pending"
}
},
{timeseries:true});
export const Order=new mongoose.model("Order",orderschema);
