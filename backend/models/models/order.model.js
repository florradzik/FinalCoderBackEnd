import mongoose from "mongoose"

const OrderModel = mongoose.model(
  "order",
  new mongoose.Schema({
    products: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        count: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    createdAt: Date,
    total: Number,
    adress: String,
    user: { type: mongoose.Schema.ObjectID, ref: "user" },
  })
)

module.exports = OrderModel
