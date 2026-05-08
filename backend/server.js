dns.setServers(["1.1.1.1", "1.0.0.1"]);
import dns from "node:dns/promises";


import express from "express"
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from './routes/authRoutes.js'
const app =express();
const port=process.env.PORT ||3000
connectDB()
app.use(express.json())
app.use(cookieParser());
app.use(cors({credentials:true}))


// app.use("/users",router);
app.use('/api/auth',authRouter)
app.get('/',(req,res) =>res.send("Server successfully run"))
app.listen(port,()=>console.log(`Server started on Port:${port}`))
