import MongoContainer from "../containers/baseMongoContainer"
import OrderModel from "../models/Order.model"

class OrderMongoDAO extends MongoContainer {
  constructor() {
    super(OrderModel)
  }

  getByUser = async (user) => {
    try {
      const order = await this._collection.find({
        user: {
          $eq: user,
        },
      })
      return order
    } catch (e) {
      console.log("Could not find orders for that user", e)
      return False
    }
  }
}

module.exports = OrderMongoDAO
