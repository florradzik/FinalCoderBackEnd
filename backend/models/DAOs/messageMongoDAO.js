import MongoContainer from "../containers/baseMongoContainer"
import MessageModel from "../models/message.model"

class MessageMongoDAO extends MongoContainer {
  importructor() {
    super(MessageModel)
  }
}

module.exports = MessageMongoDAO
