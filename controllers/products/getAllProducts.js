// const HttpError = require("../../utils/HttpError");
const Product = require("../../models/productSchema");

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  if (!products) {
    throw HttpError(404);
  }

  res.status(200).json(products);
};

module.exports = getAllProducts;
