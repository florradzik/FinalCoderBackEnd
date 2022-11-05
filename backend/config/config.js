import dotenv from "dotenv"
import path from "path"

const NODE_ENV = process.env.NODE_ENV || "develop"

dotenv.config({
  path: path.resolve(process.cwd(), `./config/${NODE_ENV}.env`),
})

export default {
  NODE_ENV: NODE_ENV,
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  TYPE_DB: process.env.TYPE_DB || "mongo",
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1",
  MONGO_DB: process.env.MONGO_DB,
  SESSION_PASS: process.env.SESSION_PASS,
}
