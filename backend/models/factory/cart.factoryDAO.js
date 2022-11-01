import CartMongoDAO from "./DAOs/cartMongoDAO"

class CartFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return new CartMongoDAO("carts")
    }
  }
}

export default CartFactoryDAO
