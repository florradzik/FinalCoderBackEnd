import MongoContainer from "../containers/baseMongoContainer.js"
import UserModel from "../models/User.model.js"

class UserMongoDAO extends MongoContainer {
  constructor() {
    super("users")
  }
}

export default UserMongoDAO
