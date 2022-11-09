import express from "express"
import ProductController from "../controller/product.controller.js"
import { userAuth, adminAuth } from "../utils/jwt.js"
const router = express.Router()

class ProductRouter {
  constructor() {
    this.productController = new ProductController()
  }

  start() {
    router.get("/get/:id?", userAuth, this.productController.getProducts)
    router.get("/add", this.productController.getAddProduct)
    router.get("/:category", this.productController.getProductsByCategory)
    router.post("/", adminAuth, this.productController.insertProduct)
    router.put("/", adminAuth, this.productController.editProduct)
    router.delete("/", adminAuth, this.productController.deleteProduct)
    return router
  }
}

export default ProductRouter
