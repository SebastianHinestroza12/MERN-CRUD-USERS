import express from "express";
import { router } from "./routes";
import morgan from "morgan";
import cors from "cors";
import "./db";
const app = express();
const PORT: number = 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor Corriendo En El Puerto ${PORT}🍓💻`);
});
