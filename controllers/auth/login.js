const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/userSchema");
const catchAsync = require("../../utils/catchAsync");
const { errorsCatcher } = require("../../utils/errorsCatcher");

const loginUserController = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return errorsCatcher(404, "Incorrect fields");
  }

  const user = await User.findOne({ email });
  if (!user) {
    return errorsCatcher(404, "Email not found");
  }

  const { SECRET_KEY } = process.env;

  const isCorrectPass = await bcrypt.compare(password, user.password);

  if (!isCorrectPass) {
    return errorsCatcher(400, "Incorrect password");
  }
  const token = jwt.sign({ id: `${user._id}` }, SECRET_KEY, {
    expiresIn: "24h",
  });
  const currentUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true, select: "-password" }
  );

  res.status(200).json({
    user: currentUser,
  });
});

module.exports = loginUserController;
