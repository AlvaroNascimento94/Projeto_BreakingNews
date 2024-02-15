const express = require("express");
const app = express();
const connectDataBase = require('./src/database/db')

const useRoute = require("./src/routes/userRouter");

const PORT = 3333;

connectDataBase()
app.use(express.json())

app.use("/user", useRoute);

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
