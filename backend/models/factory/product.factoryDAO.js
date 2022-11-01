import ProductMongoDAO from "./DAOs/ProductMongoDAO"

class ProductFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "mongo":
        return new ProductMongoDAO("Products")
    }
  }
}

export default ProductFactoryDAO
