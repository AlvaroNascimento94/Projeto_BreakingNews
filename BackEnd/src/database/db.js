<<<<<<< HEAD
import mongoose from "mongoose";


const connectDataBase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDb connect"))
    .catch((error) => console.log(error));
};

export default connectDataBase;
=======
import mongoose from "mongoose";


const connectDataBase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDb connect"))
    .catch((error) => console.log(error));
};

export default connectDataBase;
>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
