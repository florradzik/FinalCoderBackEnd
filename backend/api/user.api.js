import FactoryDAO from "../models/index.js"
import config from "../config/config.js"

class UserApi {
  constructor() {
    this.userDAO = FactoryDAO.get(config.TYPE_DB).users
  }

  async getUser(id) {
    return await this.userDAO.getObjects(id)
  }

  async insertUser(newUser) {
    return await this.userDAO.insertNew(newUser)
  }

  async deleteUser(id) {
    return await this.userDAO.deletebyID(id)
  }

  async editUser(user, id) {
    return await this.userDAO.editById(user, id)
  }
}

export default UserApi
