import mongoose from "mongoose"

const MessageModel = mongoose.model(
  "message",
  new mongoose.Schema({
    message: [{ type: String }],
    createdAt: Date,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    email: String,
    type: { type: String, enum: ["usuario", "sistema"] },
  })
)

export default MessageModel
