import express from 'express';
const app = express();
import cors from 'cors'
import cookieParser from 'cookie-parser'

// cors origin 
app.use(cors())
// for taking data in json formate
app.use(express.json({limit: 10000}));
// for taking data fron the url
app.use(express.urlencoded({ extended:true,limit: 10000 }))
// for storing files like pdf
app.use(express.static('public'))
// for performing the crud operations on cookies of the user
app.use(cookieParser())