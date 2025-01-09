import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.routes.js"

const app=express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

//route decleration
app.use("/api/v1/users", userRouter)    

export  {app}