const User = require("../models/userSchema");
const catchAsync = require("../utils/catchAsync");
const { errorsCatcher } = require("../utils/errorsCatcher");

const isUniqueUser = catchAsync(async (req, res, next) => {
  const emailUser = req.body.email;
  const user = await User.findOne({ email: emailUser });
  if (user) {
    errorsCatcher(504, `Email ${emailUser} already existing`);
  }
  next();
});

module.exports = isUniqueUser;
