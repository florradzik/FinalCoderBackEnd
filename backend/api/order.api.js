import FactoryDAO from "../models/index"
import OrderFactoryDAO from "../models/factory/order.factoryDAO"
import config from "../config/config"

class OrderApi {
  constructor() {
    this.orderDAO = new FactoryDAO(config.TYPE_DB).orders
  }

  async getOrder(id) {
    return await this.orderDAO.getObjects(id)
  }

  async insertOrder(newOrder) {
    return await this.orderDAO.insertNew(newOrder)
  }

  async deleteOrder(id) {
    return await this.orderDAO.deletebyID(id)
  }

  async editOrder(order, id) {
    return await this.orderDAO.editById(order, id)
  }

  async getByUser(user) {
    return await this.orderDAO.getByUser(user)
  }

  //   async addProduct(product, id) {
  //     return await this.orderDAO.addProduct(product, id)
  //   }

  //   async deleteProduct(product, id) {
  //     return await this.orderDAO.deleteProduct(product, id)
  //   }
}

export default OrderApi
