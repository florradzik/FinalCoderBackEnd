import UserApi from "../api/user.api.js"
import bcrypt from "bcrypt"

class UserController {
  constructor() {
    this.userApi = new UserApi()
  }

  getUser = async (req, res) => {
    try {
      const id = req.params.id
      const users = await this.userApi.getUser(id)
      res.json(users)
    } catch (e) {
      console.log("Error to get users", e)
      res.send(e)
    }
  }

  insertUser = async (req, res) => {
    try {
      const { username, email, name, address, phone, photo, password } =
        req.body
      password = bcrypt.hashSync(password, 10)
      newUser = { username, email, name, address, phone, photo, password }
      user = await this.userApi.insertUser(newUser)
      res.status(200).json({
        success: true,
        message: "success",
        user: req.user,
      })
      //send email
    } catch (e) {
      console.log("Error to insert new User", e)
    }
  }

  deleteUser = async (req, res) => {
    try {
      const id = req.params.id
      const deleted = await this.userApi.deleteById(id)
      res.json(deleted)
    } catch (e) {
      console.log("Error to delete user", e)
      res.send(e)
    }
  }

  editUser = async (req, res) => {
    try {
      const id = req.params.id
      const edited = await this.userApi.editById(id)
      res.json(edited)
    } catch (e) {
      console.log("Error to edit user", e)
      res.send(e)
    }
  }

  logout = async (req, res, next) => {
    try {
      req.logOut(function (err) {
        if (err) {
          return next(err)
        }
        req.session.destroy(function (error) {
          if (error) {
            return next(error)
          }
          res.clearCookie("connect.sid").send("Logout successfully")
        })
      })
    } catch (error) {
      console.log("Could not logout", e)
    }
  }

  loginSuccess = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        auth: true,
        message: "Successful login",
        user: req.user,
      })
    } else {
      res.status(401).json({
        auth: false,
        message: "Not authorized",
        user: req.user,
      })
    }
  }
}

export default UserController
