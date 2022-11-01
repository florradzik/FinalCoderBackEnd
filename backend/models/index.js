import CartMongoDAO from "./DAOs/cartMongoDAO"
import ProductMongoDAO from "./DAOs/productMongoDAO"
import OrderMongoDAO from "./DAOs/ordersMongoDAO"
import MessageMongoDAO from "./DAOs/messageMongoDAO"
import UserMongoDAO from "./DAOs/userMongoDAO"

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
