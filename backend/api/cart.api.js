import FactoryDAO from "../models/index.js"
import config from "../config/config.js"

class CartApi {
  constructor() {
    this.cartDAO = FactoryDAO.get(config.TYPE_DB).carts
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
    return await this.cartDAO.addProductToCart(product, id)
  }

  async deleteProduct(product, id) {
    return await this.cartDAO.deleteProductFromCart(product, id)
  }

  async getCartByUser(user) {
    return await this.cartDAO.getByUser(user)
  }
}

export default CartApi
