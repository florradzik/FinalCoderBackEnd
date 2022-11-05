import FactoryDAO from "../models/index.js"
import config from "../config/config.js"

class MessageApi {
  constructor() {
    this.messageDAO = FactoryDAO.get(config.TYPE_DB).messages
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
