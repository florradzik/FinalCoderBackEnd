import OrderMongoDAO from "./DAOs/OrderMongoDAO"

class OrderFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return new OrderMongoDAO("Orders")
    }
  }
}

export default OrderFactoryDAO
