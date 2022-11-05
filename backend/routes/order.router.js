import express from "express"
import OrderController from "../controller/order.controller.js"
const router = express.Router()

class OrderRouter {
  constructor() {
    this.orderController = new OrderController()
  }

  start() {
    router.get("/:id?", this.orderController.getOrders)
    router.post("/", this.orderController.insertOrder)
    router.put("/:id", this.orderController.editOrder)
    router.delete("/:id", this.orderController.deleteOrder)
    return router
  }
}

export default OrderRouter
