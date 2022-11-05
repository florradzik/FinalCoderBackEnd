import MongoContainer from "../containers/baseMongoContainer.js"
import ProductModel from "../models/product.model.js"

class ProductMongoDAO extends MongoContainer {
  constructor() {
    super("products")
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

export default ProductMongoDAO
