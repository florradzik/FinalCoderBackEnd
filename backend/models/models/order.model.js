import mongoose from "mongoose"

const OrderModel = mongoose.model(
  "Cart",
  new mongoose.Schema({
    products: [{ type: String }],
    createdAt: Date,
    state: String,
    adress: String,
    user: mongoose.Schema.ObjectID,
  })
)

module.exports = OrderModel
