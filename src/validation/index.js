import joi from "joi";
import { login, register, subscribe, registerDetails, updateUser, updateDetails } from "../validation/schemas";

export const validate = async (payload, type) => {
  let result;
  switch (type) {
    case "login":
      result = joi.object(login).options({ allowUnknown: true});
      break;
      

    case "register":
      result = joi.object(register).options({ allowUnknown: true});
      break;
      

    case "subscribe":
      result = joi.object(subscribe).options({ allowUnknown: true});
      break;

    case "registerDetails": 
    result = joi.object(registerDetails).options({ allowUnknown: true});
    break;

    case "updateUser":
      result = joi.object(updateUser).options({ allowUnknown: true});

      break;

    case "updateDetails": 
       result = joi.object(updateDetails).options({ allowUnknown: true});
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
