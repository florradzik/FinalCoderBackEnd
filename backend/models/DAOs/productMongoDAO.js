import MongoContainer from "../containers/baseMongoContainer"
import ProductModel from "../models/product.model"

class ProductMongoDAO extends MongoContainer {
  constructor() {
    super(ProductModel)
  }

  getByCategory = async (category) => {
    try {
      const products = await this._collection.find({
        category: {
          $eq: category,
        },
      })
      return products
    } catch (e) {
      console.log("Could not find products with that category", e)
      return False
    }
  }
}

module.exports = ProductMongoDAO
