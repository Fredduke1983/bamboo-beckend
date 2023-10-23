const catchAsync = require("./catchAsync");

const errorsCatcher = (statusCode = 500, errorMsg) => {
  const newError = new Error(errorMsg);

  newError.status = statusCode;
  throw newError;
};

module.exports = { errorsCatcher };
