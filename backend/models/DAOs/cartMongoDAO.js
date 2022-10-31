const MongoContainer = require("../containers/baseMongoContainer")
const CartModel = require("../models/Cart.model")

class CartMongoDAO extends MongoContainer {
  constructor() {
    super(CartModel)
  }
}

module.exports = CartMongoDAO
