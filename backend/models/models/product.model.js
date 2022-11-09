import mongoose from "mongoose"

const ProductModel = mongoose.model(
  "products",
  new mongoose.Schema({
    name: String,
    description: String,
    photo: String,
    price: Number,
    stock: Number,
    createdAt: Date,
    category: { type: String, enum: ["hair", "makeup", "body cream"] },
  })
)

export default ProductModel
