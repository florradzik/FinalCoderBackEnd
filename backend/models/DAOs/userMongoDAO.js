const MongoContainer = require("../containers/baseMongoContainer")
const UserModel = require("../models/User.model")

class UserMongoDAO extends MongoContainer {
  constructor() {
    super(UserModel)
  }
}

module.exports = UserMongoDAO
