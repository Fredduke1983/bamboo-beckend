const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    return res.status(err.status === undefined ? 500 : err.status).json({
      errorMsg: err.message,
      statusCode: err.status,
    });
  });
};

module.exports = catchAsync;
