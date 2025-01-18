import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from './constant.js';
import connection from '../src/db/db-connection.js'  // Ensure this file exports DB_NAME correctly
dotenv.config();
const app = express();
// const DB_NAME = "YOUTUBE";
const PORT = process.env.PORT || 3001;
// Connect to MongoDB

connection()
app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });


























        


// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to the database", error);
//   }
// })();
// export default app;
