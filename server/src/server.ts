import express from "express";
import { router } from "./routes";
import morgan from "morgan";
const app = express();
const PORT: number = 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor Corriendo En El Puerto ${PORT}🍓💻`);
});
