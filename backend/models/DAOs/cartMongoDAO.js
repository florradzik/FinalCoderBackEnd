import MongoContainer from "../containers/baseMongoContainer"
import CartModel from "../models/Cart.model"

class CartMongoDAO extends MongoContainer {
  importructor() {
    super(CartModel)
  }
}

module.exports = CartMongoDAO
