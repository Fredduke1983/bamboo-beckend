const express = require("express");
const getAllProducts = require("../controllers/products/getAllProducts");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();
router.get("/getall", authenticate, getAllProducts);

module.exports = router;
