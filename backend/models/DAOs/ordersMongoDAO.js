import MongoContainer from "../containers/baseMongoContainer.js"
import OrderModel from "../models/Order.model.js"

class OrderMongoDAO extends MongoContainer {
  constructor() {
    super("orders")
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

export default OrderMongoDAO
