import passport from "passport"
import LocalStrategy from "passport-local"
import UserApi from "../api/user.api.js"

passport.use(
  "local-login",
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserApi.getUserByUsername(username)
      if (!user) {
        return done(null, false, { message: "Incorrect username" })
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Incorrect password" })
      } else {
        return done(null, user, { message: "Logged in successfully" })
      }
    } catch (e) {
      console.log("Could not login", e)
    }
  })
)

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  UserApi.getUser(id)
  done(err, user)
})

export default passport
