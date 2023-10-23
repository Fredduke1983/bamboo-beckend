const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    return res.status(err.status).json({
      errorMsg: err.message,
      statusCode: err.status,
    });
  });
};

module.exports = catchAsync;
