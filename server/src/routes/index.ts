import express from "express";
const router = express.Router();
import * as auth from "../controllers/auth";

router.get("/", auth.allUsers);
router.get("/:id", auth.findUser);
router.post("/", auth.createUser);

export { router };
