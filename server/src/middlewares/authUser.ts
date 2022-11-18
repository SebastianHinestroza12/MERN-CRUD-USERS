import { body, ValidationChain } from "express-validator";

const createUserValidator = () => {
  const validatorUser: ValidationChain[] = [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name es obligatorio")
      .isAlpha()
      .withMessage("No se aceptan numeros, solo letras")
      .isLength({ min: 3, max: 20 })
      .withMessage(" Debe contener minimo 3 caracteres y maximo 20"),
    body("city")
      .trim()
      .notEmpty()
      .withMessage("City es obligatorio")
      .isAlpha()
      .withMessage("No se aceptan numeros"),
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Telefono es obligatorio")
      .isInt()
      .withMessage("No se aceptan letras, solo numeros"),
  ];
  return validatorUser;
};

const updateValidator = () => {
  const userUpdate: ValidationChain[] = [
    body("name")
      .trim()
      .isAlpha()
      .withMessage("No se aceptan numeros, solo letras")
      .isLength({ min: 3, max: 20 })
      .withMessage(" Debe contener minimo 3 caracteres y maximo 20"),
    body("city").trim().isAlpha().withMessage("No se aceptan numeros"),
    body("phone")
      .trim()
      .isInt()
      .withMessage("No se aceptan letras, solo numeros"),
  ];
  return userUpdate;
};

export { createUserValidator, updateValidator };
