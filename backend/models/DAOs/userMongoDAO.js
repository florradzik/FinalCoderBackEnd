import MongoContainer from "../containers/baseMongoContainer.js"
import UserModel from "../models/User.model.js"

class UserMongoDAO extends MongoContainer {
  constructor() {
    super("users")
  }

  async getByUsername(_username) {
    try {
      const user = await this._collection.findOne({
        username: _username,
      })
      return user
    } catch (e) {
      console.log("Could not find user with that username", e)
      return False
    }
  }
}

export default UserMongoDAO
