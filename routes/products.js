const express = require("express");
const getAllProducts = require("../controllers/products/getAllProducts");
const authenticate = require("../middlewares/authenticate");
const addProduct = require("../controllers/products/addProduct");
const uploadFile = require("../middlewares/uploadFile");
const cloudinaryHandler = require("../utils/cloudinaryHandler");

const router = express.Router();
router.get("/getall", getAllProducts);
router.post("/add", uploadFile(), cloudinaryHandler, addProduct);

module.exports = router;
