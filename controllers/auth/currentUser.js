const User = require("../../models/userSchema");
const { ObjectId } = require("mongodb");
const { errorsCatcher } = require("../../utils/errorsCatcher");
const catchAsync = require("../../utils/catchAsync");

const getCurrentUser = catchAsync(async (req, res) => {
  const { id: paramsId } = req.params;
  const isCorrectToken = ObjectId.isValid(paramsId);
  if (!isCorrectToken) {
    errorsCatcher(400, "incorrect id");
  }

  const current = await User.findById(paramsId).select("-password");
  if (!current) {
    errorsCatcher(404, "user not found");
  }
  res.status(200).json({ currentUser: current });
});

module.exports = getCurrentUser;
