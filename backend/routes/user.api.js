import UserFactoryDAO from "../models/factory/user.factoryDAO"
import config from "../config/config"

class UserApi {
  constructor() {
    this.userDAO = new UserFactoryDAO(config.TYPE_DB)
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
