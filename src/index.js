import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT  || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
        app.on("error",()=>{
            console.log("ERROR",error)
            throw error
        })
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err)
})






/*
const app= express()

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening at port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR :",error)
        throw error
    }
})()
*/