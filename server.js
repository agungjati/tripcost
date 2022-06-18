import express from "express"
import mongoose from 'mongoose'
import router from "./routes/index.js";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO_URL);

const app = express()
app.use(express.json())
app.use('/', router)
app.listen(3000, () => console.log("Server ready"))