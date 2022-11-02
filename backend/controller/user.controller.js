import UserApi from "../api/user.api"
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
      return res.json(await this.userApi.insertUser(newUser))
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
}

export default UserController
