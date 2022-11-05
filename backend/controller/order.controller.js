import OrderApi from "../api/order.api.js"

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
      const user = req.params.user
      const orders = await this.orderApi.getByUser(user)
      res.json(orders)
    } catch (e) {
      console.log("Error to get orders", e)
      res.send(e)
    }
  }

  insertOrder = async (req, res) => {
    try {
      const order = req.body
      const saved = await this.orderApi.inserOrder(order)
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
