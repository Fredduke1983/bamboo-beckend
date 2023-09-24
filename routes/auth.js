const express = require("express");
const { registerUserController } = require("../controllers/auth/register");
const User = require("../models/userSchema");
const isUniqueUser = require("../middlewares/isUniqueUser");
const loginUserController = require("../controllers/auth/login");
const getCurrentUser = require("../controllers/auth/currentUser");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/register", isUniqueUser, registerUserController);
router.post("/login", loginUserController);
router.get("/current/:id", authenticate, getCurrentUser);

module.exports = router;
