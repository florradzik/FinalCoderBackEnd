const MongoContainer = require("../containers/baseMongoContainer")
const ProductModel = require("../models/product.model")

class ProductMongoDAO extends MongoContainer {
  constructor() {
    super(ProductModel)
  }
}

module.exports = ProductMongoDAO
