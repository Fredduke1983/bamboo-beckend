var jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const formatDate = require("../utils/formatDate");
const { errorsCatcher } = require("../utils/errorsCatcher");
const catchAsync = require("../utils/catchAsync");

const authenticate = catchAsync(async (req, res, next) => {
  const { SECRET_KEY } = process.env;
  const { authorization } = await req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    const { id: userId } = jwt.verify(token, SECRET_KEY);
    const currentUser = await User.findById(userId);
    req.user = currentUser;
  } catch (error) {
    const date = formatDate(error.expiredAt);
    errorsCatcher(400, `your token expired at ${date}`);
  }

  next();
});

module.exports = authenticate;
