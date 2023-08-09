import joi from "joi";
import { login, register, subscribe, registerDetails, updateUser } from "../validation/schemas";

export const validate = async (payload, type) => {
  let result;
  switch (type) {
    case "login":
      result = joi.object(login);
      break;
      

    case "register":
      result = joi.object(register);
      break;
      

    case "subscribe":
      result = joi.object(subscribe);
      break;

    case "registerDetails": 
    result = joi.object(registerDetails);
    break;

    case "updateUser":
      result = joi.object(updateUser);
      break;
      
  }

  try {
    await result.validateAsync(payload, { abortEarly: false });
    return null;
  } catch (errors) {
    const errorsMod = {};
    errors.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });
    return errorsMod;
  }
};
