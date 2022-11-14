import express from "express"
import OrderController from "../controller/order.controller.js"
import { userAuth } from "../utils/jwt.js"
const router = express.Router()

class OrderRouter {
  constructor() {
    this.orderController = new OrderController()
  }

  start() {
    router.get("/:id?", userAuth, this.orderController.getOrdersByUser)
    router.post("/", userAuth, this.orderController.insertOrder)
    router.put("/:id", userAuth, this.orderController.editOrder)
    router.delete("/:id", userAuth, this.orderController.deleteOrder)
    return router
  }
}

export default OrderRouter
