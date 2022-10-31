import MongoContainer from "../containers/baseMongoContainer"
import ProductModel from "../models/product.model"

class ProductMongoDAO extends MongoContainer {
  constructor() {
    super(ProductModel)
  }
}

module.exports = ProductMongoDAO
