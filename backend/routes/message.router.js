import express from "express"
import MessageController from "../controller/message.controller"
const router = express.Router()

class MessageRouter {
  constructor() {
    this.messageController = MessageController
  }

  start() {
    router.get("/:id?", this.messageController.getMessages)
    router.post("/", this.messageController.insertMessage)
    router.put("/:id", this.messageController.editMessage)
    router.delete("/:id", this.messageController.deleteMessage)
  }
}

export default MessageRouter
