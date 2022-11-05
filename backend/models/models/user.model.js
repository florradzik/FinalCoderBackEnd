import mongoose from "mongoose"

const UserModel = mongoose.model(
  "user",
  mongoose.Schema({
    name: { type: String, max: 200 },
    email: { type: String, max: 200 },
    avatar: { type: String, max: 200 },
    age: { type: Number },
    rol: { type: String, max: 10 },
  })
)

export default UserModel
