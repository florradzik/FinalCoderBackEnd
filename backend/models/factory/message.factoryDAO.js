import MessageMongoDAO from "./DAOs/MessageMongoDAO"

class MessageFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return new MessageMongoDAO("Messages")
    }
  }
}

export default MessageFactoryDAO
