import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/MERN", {})
  .then(() => console.log("Connection to Db established😀🍓"))
  .catch((err: string) => console.log(`Fallo la conexion a la db ${err}`));
