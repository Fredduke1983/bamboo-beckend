const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name"],
    },
    email: {
      type: String,
      required: [true, "Enter email"],
    },

    password: {
      type: String,
      required: [true, "Enter password"],
    },

    avatar: {
      type: String,
    },

    token: {
      type: String,
    },

    testimonials: {
      type: [],
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
