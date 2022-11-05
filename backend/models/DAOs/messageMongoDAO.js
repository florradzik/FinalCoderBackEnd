import MongoContainer from "../containers/baseMongoContainer.js"
import MessageModel from "../models/message.model.js"

class MessageMongoDAO extends MongoContainer {
  constructor() {
    super("messages")
  }
}

export default MessageMongoDAO
