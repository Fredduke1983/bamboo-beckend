const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name"],
    },
    img: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

productSchema.post("save", (req, res, next) => {
  next();
});
const Product = model("product", productSchema);

module.exports = Product;
