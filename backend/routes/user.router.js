import express from "express"
import passport from "../utils/passport.js"
import { login, userAuth } from "../utils/jwt.js"
import UserController from "../controller/user.controller.js"
const router = express.Router()

class UserRouter {
  constructor() {
    this.userController = new UserController()
  }

  start() {
    router.get("/:id?", this.userController.getUser)
    router.post("/login", passport.authenticate("login"), login)
    router.post("/signup", this.userController.insertUser)
    router.get("/login/success", userAuth, this.userController.loginSuccess)
    router.get("/logout", userAuth, this.userController.logout)
    router.delete("/:id", this.userController.deleteUser)
    router.put("/:id", this.userController.editUser)
    return router
  }
}

export default UserRouter
