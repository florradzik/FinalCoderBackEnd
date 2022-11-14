import OrderApi from "../api/order.api.js"
import { sendPurchase } from "../utils/sendEmail.js"

class OrderController {
  constructor() {
    this.orderApi = new OrderApi()
  }

  getOrders = async (req, res) => {
    try {
      const id = req.params.id
      const orders = await this.orderApi.getOrder(id)
      res.json(orders)
    } catch (e) {
      console.log("Error to get orders", e)
      res.send(e)
    }
  }

  getOrdersByUser = async (req, res) => {
    try {
      const user = req.user
      const orders = await this.orderApi.getByUser(user)
      res.json(orders)
    } catch (e) {
      console.log("Error to get orders", e)
      res.send(e)
    }
  }

  insertOrder = async (req, res) => {
    try {
      const products = req.body.products
      const user = req.user
      let total = 0
      total = products.map((item) => (total += item.product.price))
      const order = {
        user,
        products,
        createdAt: new Date().toLocaleString(),
        total,
        state: "En progreso",
      }
      const saved = await this.orderApi.insertOrder(order)
      sendPurchase()
      res.json(saved)
    } catch (e) {
      console.log("Error to save order", e)
      res.send(e)
    }
  }

  deleteOrder = async (req, res) => {
    try {
      const id = req.params.id
      const deleted = await this.orderApi.deleteById(id)
      res.json(deleted)
    } catch (e) {
      console.log("Error to delete order", e)
      res.send(e)
    }
  }

  editOrder = async (req, res) => {
    try {
      const id = req.params.id
      const edited = await this.orderApi.editById(id)
      res.json(edited)
    } catch (e) {
      console.log("Error to edit order", e)
      res.send(e)
    }
  }
}

export default OrderController
