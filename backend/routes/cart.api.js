import FactoryDAO from "../models/index"
import CartFactoryDAO from "../models/factory/cart.factoryDAO"
import config from "../config/config"

class CartApi {
  constructor() {
    this.cartDAO = new FactoryDAO(config.TYPE_DB).carts
  }

  async getCart(id) {
    return await this.cartDAO.getObjects(id)
  }

  async insertCart(newCart) {
    return await this.cartDAO.insertNew(newCart)
  }

  async deleteCart(id) {
    return await this.cartDAO.deletebyID(id)
  }

  async editCart(cart, id) {
    return await this.cartDAO.editById(cart, id)
  }

  async addProduct(product, id) {
    return await this.cartDAO.addProduct(product, id)
  }

  async deleteProduct(product, id) {
    return await this.cartDAO.deleteProduct(product, id)
  }
}

export default CartApi
