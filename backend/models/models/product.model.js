import mongoose from "mongoose"

const ProductModel = mongoose.model(
  "Products",
  new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    photo: String,
    price: Number,
    stock: Number,
    category: String,
    createdAt: Date,
  })
)

module.exports = ProductModel
