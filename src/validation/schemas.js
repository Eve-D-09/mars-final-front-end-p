import joi from "joi";

export const login = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
  password: joi.string().required().min(6).max(64),
};

export const register = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
  password: joi.string().required().min(8).max(64),
  firstName: joi.string().required().min(3).max(64),
  lastName: joi.string().required().min(3).max(64),
};

export const subscribe = {
    email: joi.string().required().email({tlds: { allows: false }}),
    
};

export const registerDetails = {
  addressLine1: joi.string(), 
  addressLine2: joi.string(),
  city: joi.string(),
  postcode: joi.number(),
  country: joi.string(),
  phoneNumber: joi.number(),
};

export const updateUser = {
  firstName: joi.string().required().min(3).max(64),
  lastName: joi.string().required().min(3).max(64),
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
};

export const updateDetails = {
  addressLine1: joi.string(), 
  addressLine2: joi.string(),
  city: joi.string(),
  postcode: joi.number(),
  country: joi.string(),
  phoneNumber: joi.number(),
};