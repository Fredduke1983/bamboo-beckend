const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    res
      .status(err.status === undefined ? (err.status = 100) : err.status)
      .json({
        errorMsg: err.message,
      });
  });
};

module.exports = catchAsync;
