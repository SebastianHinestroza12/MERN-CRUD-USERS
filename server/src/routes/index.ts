import express from "express";
const router = express.Router();
import * as auth from "../controllers/auth";
import * as validator from "../middlewares/authUser";

router.get("/", auth.allUsers);
router.get("/:id", auth.findUser);
router.put("/:id", auth.modifyDataUser);
router.post("/", validator.createUserValidator(), auth.createUser);

export { router };
