import mongoose from "mongoose"

const ProductModel = mongoose.model(
  "products",
  new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    photo: String,
    price: Number,
    stock: Number,
    category: String,
    createdAt: Date,
    category: { type: String, enum: ["hair", "makeup", "body cream"] },
  })
)

module.exports = ProductModel
