import express from "express"
import ProductController from "../controller/product.controller"
const { adminAuth } = require("../utils/jwt")
const router = express.Router()

class ProductRouter {
  constructor() {
    this.productController = ProductController
  }

  start() {
    router.get("/:id?", this.productController.getProducts)
    router.get("/category", this.productController.getProductsByCategory)
    router.post("/", adminAuth, this.productController.insertProduct)
    router.put("/", adminAuth, this.productController.editProduct)
    router.delete("/", adminAuth, this.productController.deleteProduct)
  }
}

export default ProductRouter
