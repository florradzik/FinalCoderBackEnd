import CartApi from "../api/cart.api.js"

class CartController {
  constructor() {
    this.cartApi = new CartApi()
  }

  getCarts = async (req, res) => {
    try {
      const id = req.params.id
      const carts = await this.cartApi.getCart(id)
      res.json(carts)
    } catch (e) {
      console.log("Error to get carts", e)
      res.send(e)
    }
  }

  insertCart = async (req, res) => {
    try {
      const cart = req.body
      const saved = await this.cartApi.inserCart(cart)
      res.json(saved)
    } catch (e) {
      console.log("Error to save cart", e)
      res.send(e)
    }
  }

  deleteCart = async (req, res) => {
    try {
      const id = req.params.id
      const deleted = await this.cartApi.deleteById(id)
      res.json(deleted)
    } catch (e) {
      console.log("Error to delete cart", e)
      res.send(e)
    }
  }

  editCart = async (req, res) => {
    try {
      const id = req.params.id
      const edited = await this.cartApi.editById(id)
      res.json(edited)
    } catch (e) {
      console.log("Error to edit cart", e)
      res.send(e)
    }
  }

  addProductToCart = async (req, res) => {
    try {
      const product = req.body
      const id = req.params.id
      const cart = await this.cartApi.addProduct(product, id)
      req.json(cart)
    } catch (e) {
      console.log("Error adding product to cart", e)
      res.send(e)
    }
  }

  deleteProductFromCart = async (req, res) => {
    try {
      const product = req.body
      const id = req.params.id
      const cart = await this.cartApi.deleteProduct(product, id)
      req.json(cart)
    } catch (e) {
      console.log("Error deleting product from cart", e)
      res.send(e)
    }
  }
}

export default CartController
