import MongoContainer from "../containers/baseMongoContainer"
import OrderModel from "../models/Order.model"

class OrderMongoDAO extends MongoContainer {
  constructor() {
    super(OrderModel)
  }
}

module.exports = OrderMongoDAO
