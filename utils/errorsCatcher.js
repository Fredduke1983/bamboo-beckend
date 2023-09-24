const errorsCatcher = (statusCode, errorMsg) => {
  const newError = new Error(errorMsg);

  newError.status = statusCode;
  throw newError;
};

module.exports = { errorsCatcher };
