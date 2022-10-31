import CartMongoDAO from "./DAOs/cartMongoDAO"
import ProductMongoDAO from "./DAOs/productMongoDAO"
import OrderMongoDAO from "./DAOs/ordersMongoDAO"
import MessageMongoDAO from "./DAOs/messagesMongoDAO"
import UserMongoDAO from "./DAOs/userMongoDAO"

class FactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return {
          cart: new CartMongoDAO("carts"),
          product: new ProductMongoDAO("products"),
          order: new OrderMongoDAO("orders"),
          message: new MessageMongoDAO("messages"),
          user: new UserMongoDAO("users"),
        }
    }
  }
}

export default FactoryDAO
