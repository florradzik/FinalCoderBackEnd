import MongoContainer from "../containers/baseMongoContainer.js"
import CartModel from "../models/Cart.model.js"

class CartMongoDAO extends MongoContainer {
  constructor() {
    super("carts")
  }

  deleteProductFromCart = async (product, id) => {
    try {
      let cart = await this._collection.findOne({
        _id: id,
      })
      const items = cart.products.filter((item) => {
        item.product._id.toString() != product.toDelete._id.toString()
      })
      cart.products = items
      await this.editById(cart, id)
      return cart
    } catch (e) {
      console.log("Error to delete", e)
      return false
    }
  }

  addProductToCart = async (product, id) => {
    try {
      let cart = await this._collection.findOne({
        _id: id,
      })
      if (cart.products.length > 0) {
        const item = cart.products.filter((item) => {
          console.log(product)
          item.product._id.toString() == product.product._id.toString()
        })
        if (!item) {
          cart.products = [...cart.products, product]
        }
      } else {
        cart.products = [product]
      }
      await this.editById(cart, id)
      return cart
    } catch (e) {
      console.log("Error to add", e)
      return false
    }
  }

  getByUser = async (user) => {
    try {
      return await this._collection.findOne({
        user: user,
      })
    } catch (e) {
      console.log("Error to find", e)
      return False
    }
  }
}

export default CartMongoDAO
