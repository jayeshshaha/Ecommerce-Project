// pakages
import  Path  from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


// utils
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT;
connectDB();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

import userRoutes from "./routes/userRoutes.js"
app.use('/api/users',userRoutes)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`Server Up!`);
})