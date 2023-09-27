const Joi = require("joi");

exports.productValidate = (data) =>
  Joi.object()
    .keys({
      name: Joi.string().alphanum().min(3).max(30).required(),
      price: Joi.string()
        .pattern(/^[0-9]+$/)
        .required(),
      rating: Joi.string().pattern(/^[0-9]+$/),
    })
    .validate(data);
