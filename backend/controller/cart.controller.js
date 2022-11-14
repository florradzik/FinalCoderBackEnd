import CartApi from "../api/cart.api.js"

class CartController {
  constructor() {
    this.cartApi = new CartApi()
  }

  getCarts = async (req, res) => {
    try {
      // buscamos el carrito del usuario
      const user = req.user
      const cart = await this.cartApi.getCartByUser(user)
      if (!cart) {
        // si no existe un carrito para este usuario, hay que crear uno
        const products = []
        const newCart = {
          user: user,
          products: products,
          date: new Date().toLocaleString(),
        }
        const saved = await this.cartApi.insertCart(newCart)
        return res.json({ cart: saved })
      }
      return res.json({ cart })
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
      const user = req.user
      const cart = await this.cartApi.getCartByUser(user)
      const deleted = await this.cartApi.deleteCart(cart._id)
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
      const user = req.user
      let cart = await this.cartApi.getCartByUser(user)
      if (!cart) {
        // si no existe un carrito para este usuario, hay que crear uno
        let newCart = {
          user: user,
          products: [product],
          date: new Date().toLocaleString(),
        }
        cart = await this.cartApi.insertCart(newCart)
      } else cart = await this.cartApi.addProduct(product, cart._id)
      res.json(cart)
    } catch (e) {
      console.log("Error adding product to cart", e)
      res.send(e)
    }
  }

  deleteProductFromCart = async (req, res) => {
    try {
      const product = req.body
      const user = req.user
      let cart = await this.cartApi.getCartByUser(user)
      cart = await this.cartApi.deleteProduct(product, cart._id)
      res.json(cart)
    } catch (e) {
      console.log("Error deleting product from cart", e)
      res.send(e)
    }
  }
}

export default CartController
