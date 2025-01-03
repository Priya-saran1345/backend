// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
import mongoose from "mongoose";
import DB_NAME from './constant'
import express from "express";
const app=express();
(async()=>{
    try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log('Connected to MongoDB');
       app.on(()=>{
        "error",(error)=>{
console.log("Error: " ,error)
        }
       })
       app.listen(process.env.PORT,()=>{
        console.log("Server is running on port 3001 -----------",process.env.PORT)
       })
    }
    catch(error){
        console.log(error);
        process.exit(1);  // Exit with failure status if unable to connect to MongoDB.

    }

})()






