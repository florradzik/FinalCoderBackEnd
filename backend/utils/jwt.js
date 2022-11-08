import passport from "passport"
import jwt from "jsonwebtoken"
import config from "../config/config.js"

const adminAuth = async (req, res, next) => {
  const headers = req.headers["authorization"]
  const token = headers.split(" ")[1]
  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    })
  }
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Not authorized" })
    } else {
      if (decoded.user.role !== "admin") {
        return res.status(401).json({ message: "Not authorized" })
      } else {
        next()
      }
    }
  })
}

const userAuth = async (req, res, next) => {
  const headers = req.headers["authorization"]
  const token = headers.split(" ")[1]
  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    })
  }
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token",
      })
    }
    req.user = decoded.user
    next()
  })
}

const generateToken = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid }
    jwt.sign(
      payload,
      config.TOKEN_KEY,
      {
        expiresIn: config.TOKEN_DURATION,
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject("No se pudo generar el JWT.")
        } else {
          resolve(token)
        }
      }
    )
  })
}

export { adminAuth, userAuth, generateToken }
