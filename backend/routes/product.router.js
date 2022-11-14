import express from "express"
import ProductController from "../controller/product.controller.js"
import { userAuth } from "../utils/jwt.js"
const router = express.Router()

class ProductRouter {
  constructor() {
    this.productController = new ProductController()
  }

  start() {
    router.get("/get/:id?", userAuth, this.productController.getProducts)
    router.post("/add", userAuth, this.productController.getAddProduct)
    router.get("/:category", this.productController.getProductsByCategory)
    router.post("/", userAuth, this.productController.insertProduct)
    router.put("/", userAuth, this.productController.editProduct)
    router.delete("/", userAuth, this.productController.deleteProduct)
    return router
  }
}

export default ProductRouter
