import passport from "passport"
import jwt from "jsonwebtoken"
import config from "../config/config.js"

const userAuth = async (req, res, next) => {
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
    req.user = decoded.uid
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

export { userAuth, generateToken }
