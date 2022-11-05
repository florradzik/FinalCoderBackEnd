import MessageApi from "../api/message.api.js"

class MessageController {
  constructor() {
    this.messageApi = new MessageApi()
  }

  getMessages = async (req, res) => {
    try {
      const id = req.params.id
      const messages = await this.messageApi.getMessage(id)
      res.json(messages)
    } catch (e) {
      console.log("Error to get messages", e)
      res.send(e)
    }
  }

  insertMessage = async (req, res) => {
    try {
      const message = req.body
      const saved = await this.messageApi.inserMessage(message)
      res.json(saved)
    } catch (e) {
      console.log("Error to save message", e)
      res.send(e)
    }
  }

  deleteMessage = async (req, res) => {
    try {
      const id = req.params.id
      const deleted = await this.messageApi.deleteById(id)
      res.json(deleted)
    } catch (e) {
      console.log("Error to delete message", e)
      res.send(e)
    }
  }

  editMessage = async (req, res) => {
    try {
      const id = req.params.id
      const edited = await this.messageApi.editById(id)
      res.json(edited)
    } catch (e) {
      console.log("Error to edit message", e)
      res.send(e)
    }
  }
}

export default MessageController
