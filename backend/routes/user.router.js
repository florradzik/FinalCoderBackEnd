import express from "express"
import passport from "../utils/passport"
import { login, userAuth } from "../utils/jwt"
import UserController from "../controller/user.controller"
const router = express.Router()

class UserRouter {
  constructor() {
    this.userController = UserController
  }

  start() {
    router.get("/:id?", this.userController.getUsers)
    router.post("/login", passport.authenticate("login"), login)
    router.post("/siginup", this.userController.addUser)
    router.get("/login/success", userAuth, this.userController.loginSuccess)
    router.get("/logout", userAuth, this.userController.logout)
    router.delete("/:id", this.userController.deleteUser)
  }
}

export default UserRouter
