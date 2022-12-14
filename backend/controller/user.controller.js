import UserApi from "../api/user.api.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt.js"
import config from "../config/config.js"
import { sendRegister } from "../utils/sendEmail.js"

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
      let { name, username, avatar, password } = req.body
      password = bcrypt.hashSync(password, 10)
      let role = ""
      username === config.ADMIN_EMAIL ? (role = "ADMIN") : (role = "USER")
      let newUser = { name, username, avatar, password, role }
      const user = await this.userApi.insertUser(newUser)
      res.status(200).json({
        success: true,
        message: "success",
        user: req.user,
      })
      sendRegister()
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

  login = async (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    try {
      const user = await this.userApi.getUserByUsername(username)
      if (!user) {
        console.log("Could not find user, you should register")
        return res.status(404) // res.render error login
      }
      console.log(user)
      if (!bcrypt.compare(password, user.password)) {
        console.log("Incorrect password!")
        return res.status(404) // res.render error login
      }

      //generate Token
      const token = await generateToken(user._id)
      console.log(token)
      return res.json({ ok: true, user: user, token: token })
    } catch (e) {
      console.log("There was an error", e)
    }
  }

  authAdmin = async (req, res, next) => {
    const token = req.headers.token
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      })
    }
    jwt.verify(token, config.TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
        })
      }
      user = this.getUser(decoded.uid)
      if (user.role == "ADMIN") next()
      else
        return res.status(401).json({
          message: "You don't have admin privilages",
        })
    })
  }
}

export default UserController
