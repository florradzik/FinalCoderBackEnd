const MongoContainer = require("../containers/baseMongoContainer")
const MessageModel = require("../models/message.model")

class MessageMongoDAO extends MongoContainer {
  constructor() {
    super(MessageModel)
  }
}

module.exports = MessageMongoDAO
