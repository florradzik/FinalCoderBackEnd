import ProductApi from "../api/products.api.js"

class ProductController {
  constructor() {
    this.productApi = new ProductApi()
  }

  getProducts = async (req, res) => {
    try {
      const id = req.params.id
      const products = await this.productApi.getProduct(id)
      res.render("products", { products: products })
    } catch (e) {
      console.log("Error to get products", e)
      res.send(e)
    }
  }

  getProductsByCategory = async (req, res) => {
    try {
      const category = req.params.category
      const products = await this.productApi.getByCategory(category)
      res.json(products)
    } catch (e) {
      console.log("Error to get products", e)
      res.send(e)
    }
  }

  insertProduct = async (req, res) => {
    try {
      const product = req.body
      const saved = await this.productApi.inserProduct(product)
      res.json(saved)
    } catch (e) {
      console.log("Error to save product", e)
      res.send(e)
    }
  }

  deleteProduct = async (req, res) => {
    try {
      const id = req.params.id
      const deleted = await this.productApi.deleteById(id)
      res.json(deleted)
    } catch (e) {
      console.log("Error to delete product", e)
      res.send(e)
    }
  }

  editProduct = async (req, res) => {
    try {
      const id = req.params.id
      const edited = await this.productApi.editById(id)
      res.json(edited)
    } catch (e) {
      console.log("Error to edit product", e)
      res.send(e)
    }
  }
}

export default ProductController
