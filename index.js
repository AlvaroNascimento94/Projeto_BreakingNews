import express from "express";
import connectDataBase from './src/database/db.js'
import useRoute from "./src/routes/userRouter.js";

const app = express();
const PORT = 3333;

connectDataBase()

app.use(express.json())

app.use("/user", useRoute);

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
