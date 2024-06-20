import express from "express";
import cookieParser from "cookie-parser";
// cookieParser used for CRUD operation on user browser
import cors from 'cors'

const app =express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import

import userRouter from './routes/userRoutes.js'

// routes declarations

app.use("/api/v1/users",userRouter)

export {app}