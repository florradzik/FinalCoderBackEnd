import passport from "passport"
import jwt from "jsonwebtoken"

const login = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        res.status(400).json({
          message: "Something is not right",
        })
        return next(err)
      }
      req.login(user, { session: false }, async (err) => {
        if (err) {
          res.send(err)
        }
        const body = {
          _id: user._id,
          username: user.username,
          role: user.role,
        }
        const token = jwt.sign({ user: body }, "secret")
        return res.json({ user, token })
      })
    } catch (error) {
      console.log("error login", e)
    }
  })(req, res, next)
}

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

exports.login = login
exports.adminAuth = adminAuth
exports.userAuth = userAuth