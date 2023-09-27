const Product = require("../../models/productSchema");

const addProduct = async (req, res) => {
  const { url, public_id } = req;
  const { name, price } = req.body;

  console.log(public_id);

  const addedNewProduct = await Product.create({
    name,
    price,
    img: url,
    public_id,
  });

  res.status(200).json(addedNewProduct);
};

module.exports = addProduct;
