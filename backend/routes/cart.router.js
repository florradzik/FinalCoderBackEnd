import express from "express"
import CartController from "../controller/cart.controller"
const router = express.Router()

class CartRouter {
  constructor() {
    this.cartController = CartController
  }

  start() {
    router.get("/:id?", this.cartController.getCarts)
    router.post("/", this.cartController.insertCart)
    router.post("/:id/products", this.cartController.addProductToCart)
    router.put("/:id", this.cartController.editCart)
    router.delete("/:id", this.cartController.deleteCart)
    router.delete(
      "/:id/products/:id",
      this.cartController.deleteProductFromCart
    )
  }
}

export default CartRouter
