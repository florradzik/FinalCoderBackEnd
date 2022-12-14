import mongoose from "mongoose"

const CartModel = mongoose.model(
  "Cart",
  new mongoose.Schema({
    products: [{ type: String }],
    createdAt: Date,
  })
)

export default CartModel
