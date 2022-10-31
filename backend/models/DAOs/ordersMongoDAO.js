const MongoContainer = require("../containers/baseMongoContainer")
const OrderModel = require("../models/Order.model")

class OrderMongoDAO extends MongoContainer {
  constructor() {
    super(OrderModel)
  }
}

module.exports = OrderMongoDAO
