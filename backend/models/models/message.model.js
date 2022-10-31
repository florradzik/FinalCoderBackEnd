const mongoose = require("mongoose")

const MessageModel = mongoose.model(
  "Message",
  new mongoose.Schema({
    message: [{ type: String }],
    createdAt: Date,
    user: mongoose.Schema.ObjectId,
  })
)

module.exports = MessageModel
