import dotenv from "dotenv"

import path from "path"

const NODE_ENV = process.env.NODE_ENV || "develop"

dotenv.config({
  path: path.resolve(process.cwd(), `backend/config/develop.env`),
})

export default {
  NODE_ENV: NODE_ENV,
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  TYPE_DB: process.env.TYPE_DB || "mongo",
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1",
  MONGO_DB: process.env.MONGO_DB,
  SESSION_PASS: process.env.SESSION_PASS,
  TOKEN_KEY: process.env.TOKEN_KEY,
  TOKEN_DURATION: process.env.TOKEN_DURATION,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  NODEMAILER_USER: process.env.NODEMAILER_USER,
  NODEMAILER_PASS: process.env.NODEMAILER_PASS,
}
