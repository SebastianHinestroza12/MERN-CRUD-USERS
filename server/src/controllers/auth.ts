import { Request, Response } from "express";
import { validationResult } from "express-validator";
import * as Interface from "../interfaces/index";
import User from "../models/user";

/**
  Estamos tratando de encontrar a todos los usuarios en la base de datos y, si los encontramos, los
  devolveremos en la respuesta; de lo contrario, enviaremos un mensaje de error 404".
 */

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

/**
 * Busca un usuario por id y devuelve una respuesta con el usuario o un mensaje si no se encuentra el
 * usuario.
 */

const findUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const searchUser = await User.findById(id).exec();

  try {
    if (!searchUser) {
      return res.status(404).json({
        done: false,
        message: `No se encontro un usuario con id: ${id}`,
      });
    }
    return res.status(200).json({
      done: true,
      user: searchUser,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Toma una identificación de usuario, encuentra al usuario por esa identificación y actualiza al
 * usuario con los datos en el cuerpo de la solicitud.
 */

const modifyDataUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  User.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true },
    function (err, result) {
      if (err) {
        return res.status(400).json({
          modificado: false,
          message: "error al modificar los datos",
        });
      }
      return res.status(200).json({
        modificado: true,
        data: result,
      });
    }
  );
};

/**
 * Elimina un usuario de la base de datos por id.
 */

const deleteUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteUser = await User.findByIdAndDelete(id);

  try {
    if (!deleteUser) {
      return res.status(400).json({
        delete: false,
        message: "No se elimino al usuario",
      });
    }
    return res.status(200).json({
      delete: true,
      user: deleteUser,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
Crea un nuevo usuario en la base de datos.
*/

const createUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, city, phone }: Interface.DataUser = req.body;
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

export { allUsers, createUser, findUser, modifyDataUser, deleteUserId };
