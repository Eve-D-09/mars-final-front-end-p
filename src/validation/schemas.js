import joi from "joi";

export const login = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
  password: joi.string().required().min(8).max(16),
};

export const register = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
  password: joi.string().required().min(8).max(16),
  firstName: joi.string().required().min(3).max(16),
  lastName: joi.string().required().min(8).max(16),
};

export const subscribe = {
    email: joi.string().required().email({tlds: { allows: false }})
}