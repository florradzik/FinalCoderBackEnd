import express from "express"
import CartController from "../controller/cart.controller.js"
import { userAuth } from "../utils/jwt.js"
const router = express.Router()

class CartRouter {
  constructor() {
    this.cartController = new CartController()
  }

  start() {
    router.get("/:id?", userAuth, this.cartController.getCarts)
    router.post("/", this.cartController.insertCart)
    router.post("/products", userAuth, this.cartController.addProductToCart)
    router.put("/:id", userAuth, this.cartController.editCart)
    router.delete("/", userAuth, this.cartController.deleteCart)
    router.post(
      "/products/:id_product",
      userAuth,
      this.cartController.deleteProductFromCart
    )
    return router
  }
}

export default CartRouter
