import mongoose from "mongoose"

const UserModel = mongoose.model(
  "user",
  mongoose.Schema({
    name: { type: String, max: 200 },
    email: { type: String, max: 200 },
    avatar: { type: String, max: 200 },
  })
)

export default UserModel
