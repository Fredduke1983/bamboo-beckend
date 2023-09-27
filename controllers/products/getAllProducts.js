const Product = require("../../models/productSchema");
const catchAsync = require("../../utils/catchAsync");
const { errorsCatcher } = require("../../utils/errorsCatcher");

const getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.find();
  if (!products) {
    errorsCatcher(404, "not find any product");
  }

  res.status(200).json(products);
});

module.exports = getAllProducts;
