const Joi = require("joi");

exports.userRegistrationValidator = (data) =>
  Joi.object()
    .keys({
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string()
        .pattern(/^\w+@[a-zA-Z\d-]+\.[a-zA-Z]{2,4}$/)
        .required(),
      password: Joi.string()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/) //* pass must include at least one upper case letter, one lower case letter, and one numeric digit. Must be at least 4 characters, no more than 20 characters
        .required(),
    })
    .validate(data);
