import express from "express";
import connectDataBase from './src/database/db.js'
import dotenv from "dotenv"

import useRoute from "./src/routes/userRouter.js";
import authRoute from "./src/routes/authRouter.js";
import newsRoute from "./src/routes/newsRouter.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3333;

connectDataBase()
app.use(express.json())
app.use("/user", useRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);



app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
