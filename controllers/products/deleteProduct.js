const Product = require("../../models/productSchema");

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);

  req.public_id = deletedProduct.public_id;
  next();
};

module.exports = deleteProduct;
