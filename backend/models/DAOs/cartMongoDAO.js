import MongoContainer from "../containers/baseMongoContainer.js"
import CartModel from "../models/Cart.model.js"

class CartMongoDAO extends MongoContainer {
  constructor() {
    super("carts")
  }

  deleteProductFromCart = async (product, id) => {
    try {
      let cart = await this._collection.findOne({
        _id: ObjectId(id),
      })
      const itemFound = cart.products.findIndex(
        (item) => item.id.toString() === product.id.toString()
      )
      if (itemFound !== -1) {
        cart.products.splice(itemFound, 1)
        this.editById(cart, id)
      }
      return cart
    } catch (e) {
      console.log("Error to delete", e)
      return False
    }
  }

  addProductToCart = async (product, id) => {
    try {
      let cart = await this._collection.findOne({
        _id: ObjectId(id),
      })
      const itemFound = await cart.products.findIndex(
        (item) => item._id.toString() === product._id.toString()
      )
      if (itemFound !== -1) {
        cart.products.append(item)
        await this.editById(cart, id)
      }
      return cart
    } catch (e) {
      console.log("Error to add", e)
      return False
    }
  }
}

export default CartMongoDAO
