const bcrypt = require("bcryptjs");
const User = require("../../models/userSchema");
const catchAsync = require("../../utils/catchAsync");
const { errorsCatcher } = require("../../utils/errorsCatcher");
const { userRegistrationValidator } = require("../../utils/userValidate");

const registerUserController = catchAsync(async (req, res) => {
  const { error, value } = userRegistrationValidator(req.body);
  const { name, email, password } = value;

  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(password, salt);

  if (error) {
    return errorsCatcher(504, `Incorrect ${error.details[0].path[0]}`);
  }

  const newUser = await User.create({ name, email, password: hashedPass });

  res.status(201).json({
    msg: "New user added",
    user: newUser,
  });
});

module.exports = registerUserController;
