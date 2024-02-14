const express = require("express");

const useRoute = require("./src/routes/userRouter");
const PORT = 3333;

const app = express();


app.use(express.json())

app.use("/user", useRoute);

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
