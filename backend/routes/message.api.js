import FactoryDAO from "../models/index"
import MessageFactoryDAO from "../models/factory/message.factoryDAO"
import config from "../config/config"

class MessageApi {
  constructor() {
    this.messageDAO = new FactoryDAO(config.TYPE_DB).messages
  }

  async getMessage(id) {
    return await this.messageDAO.getObjects(id)
  }

  async insertMessage(newMessage) {
    return await this.messageDAO.insertNew(newMessage)
  }

  async deleteMessage(id) {
    return await this.messageDAO.deletebyID(id)
  }

  async editMessage(message, id) {
    return await this.messageDAO.editById(message, id)
  }
}

export default MessageApi
