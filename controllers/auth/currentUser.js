const User = require("../../models/userSchema");

const getCurrentUser = async (req, res) => {
  console.log(req.params.id);
  const current = await User.findById(req.params.id);
  console.log(current);
};

module.exports = getCurrentUser;
