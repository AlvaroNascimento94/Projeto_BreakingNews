import express from "express";
import connectDataBase from './src/database/db.js'
import "dotenv/config"
import cors from "cors"
import router from "./src/routes/index.js";

const app = express();

connectDataBase()
app.use(cors())
app.use(express.json())
app.use(router)

export default  app


