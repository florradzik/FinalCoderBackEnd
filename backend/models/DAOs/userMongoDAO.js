import MongoContainer from "../containers/baseMongoContainer"
import UserModel from "../models/User.model"

class UserMongoDAO extends MongoContainer {
  constructor() {
    super(UserModel)
  }
}

module.exports = UserMongoDAO
