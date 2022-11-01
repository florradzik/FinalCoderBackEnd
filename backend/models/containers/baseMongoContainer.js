import mongodb from "mongodb"
import config from "./config/config.js"
const { MongoClient, ObjectId } = mongodb

class MongoContainer {
  constructor(collection) {
    const init = async () => {
      console.log("Connecting mongo DB ...")

      const connection = await MongoClient.connect(`${config.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      const db = connection.db(config.MONGO_DB)
      this._collection = db.collection(collection)
    }
    init()
  }

  editById = async (obj, id) => {
    try {
      const objUpdated = await this._collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: obj }
      )
      return objUpdated
    } catch (e) {
      console.log("Error to upadte", e)
    }
  }

  deletebyID = async (_id) => {
    try {
      await this._collection.deleteOne({ _id: new ObjectId(id) })
      return true
    } catch (e) {
      console.log("Error to delete", e) //improve with logging
      return false
    }
  }

  getObjects = async (_id) => {
    try {
      if (!_id) {
        const objects = await this._collection.find({}).toArray()
        return objects
      }
      console.log("Search ", _id)
      const newOne = await this._collection.findOne({
        _id: ObjectId(_id),
      })
      return [newOne]
    } catch (e) {
      console.log("Error to get objects", e) //improve with logging
      return []
    }
  }

  insertNew = async (newToInsert) => {
    try {
      await this._collection.insertOne(newToInsert)
    } catch (e) {
      console.log("Error to insert", e) //improve with logging
      return newToInsert
    }
  }

  getById = async (id) => {
    try {
      return await this._collection.findOne({
        _id: ObjectId(id),
      })
    } catch (e) {
      console.log("Could not find object with that id", e)
      return False
    }
  }
}

export default MongoContainer
