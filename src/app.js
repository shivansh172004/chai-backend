import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes

import userRouter from './routes/user.routes.js';

//routes decalaration
app.use("/api/v1/users", userRouter) // in this we are not using get because we are using many files and in this we are using use middleware


// http://localhost:8000/api/v1/users/register

export { app }