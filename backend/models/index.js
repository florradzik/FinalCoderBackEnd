import CartMongoDAO from "./DAOs/cartMongoDAO.js"
import ProductMongoDAO from "./DAOs/productMongoDAO.js"
import OrderMongoDAO from "./DAOs/ordersMongoDAO.js"
import MessageMongoDAO from "./DAOs/messageMongoDAO.js"
import UserMongoDAO from "./DAOs/userMongoDAO.js"

class FactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return {
          carts: new CartMongoDAO("carts"),
          products: new ProductMongoDAO("products"),
          orders: new OrderMongoDAO("orders"),
          messages: new MessageMongoDAO("messages"),
          users: new UserMongoDAO("users"),
        }
    }
  }
}

export default FactoryDAO
