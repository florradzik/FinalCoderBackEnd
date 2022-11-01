import ProductFactoryDAO from "../models/factory/product.factoryDAO"
import config from "../config/config"

class ProductApi {
  constructor() {
    this.productDAO = new ProductFactoryDAO(config.TYPE_DB)
  }

  async getProduct(id) {
    return await this.productDAO.getObjects(id)
  }

  async insertProduct(newProduct) {
    return await this.productDAO.insertNew(newProduct)
  }

  async deleteProduct(id) {
    return await this.productDAO.deletebyID(id)
  }

  async editProduct(product, id) {
    return await this.productDAO.editById(product, id)
  }

  async getByCategory(category) {
    return await this.productDAO.getByCategory(category)
  }
}

export default ProductApi
