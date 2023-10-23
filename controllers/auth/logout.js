const User = require("../../models/userSchema");
const catchAsync = require("../../utils/catchAsync");
const { errorsCatcher } = require("../../utils/errorsCatcher");

const logoutController = catchAsync(async (req, res) => {
  const { email } = req.user;

  const currentUser = await User.findOneAndUpdate(
    { email },
    {
      token: "",
    }
  );

  res.status(201).json({
    msg: "User logged out",
    user: currentUser,
  });
});

module.exports = logoutController;
