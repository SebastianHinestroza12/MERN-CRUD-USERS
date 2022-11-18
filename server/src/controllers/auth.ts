import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/user";

const allUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    user.length > 0
      ? res.status(200).json(user)
      : res.status(404).json({
          done: false,
          message: "no tenemos usuarios",
        });
  } catch (error) {
    console.log(error);
  }
};

const findUser = async () => {};

const createUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, city, phone } = req.body;

  try {
    const replique = await User.findOne({ phone });
    if (replique) {
      return res.status(409).json({
        done: false,
        message: `Ya existe un registro con el numero ${phone}`,
      });
    } else {
      const userCreate = new User({ name, city, phone });
      await userCreate.save();
      return res.status(201).json({
        done: true,
        data: userCreate,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { allUsers, createUser, findUser };
