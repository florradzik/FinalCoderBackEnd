import express from "express"
import { userAuth } from "../utils/jwt.js"
import UserController from "../controller/user.controller.js"
const router = express.Router()

class UserRouter {
  constructor() {
    this.userController = new UserController()
  }

  start() {
    router.get("/login", this.userController.getLogin)
    router.get("/register", this.userController.getRegister)
    router.post("/login", this.userController.login)
    router.post("/register", this.userController.insertUser)
    router.get("/user/:id", this.userController.getUser)
    router.get("/logout", userAuth, this.userController.logout)
    router.delete("/user/:id", this.userController.deleteUser)
    router.put("/user/:id", this.userController.editUser)
    return router
  }
}

export default UserRouter
