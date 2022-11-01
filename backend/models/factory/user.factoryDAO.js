import UserMongoDAO from "./DAOs/UserMongoDAO"

class UserFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return new UserMongoDAO("Users")
    }
  }
}

export default UserFactoryDAO
