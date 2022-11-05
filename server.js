import express from "express"
import session from "express-session"
import MongoStore from "connect-mongo"
import config from "./backend/config/config.js"
import cors from "cors"
import passport from "passport"
import cookieParser from "cookie-parser"
import CartRouter from "./backend/routes/cart.router.js"
import ProductRouter from "./backend/routes/product.router.js"
import UserRouter from "./backend/routes/user.router.js"
import MessageRouter from "./backend/routes/message.router.js"
import OrderRouter from "./backend/routes/order.router.js"

const routerCart = new CartRouter()
const routerProduct = new ProductRouter()
const routerUser = new UserRouter()
const routerMessage = new MessageRouter()
const routerOrder = new OrderRouter()
//handle web socket
import { createServer } from "http"
import { Server } from "socket.io"
const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
})

io.on("connection", (socket) => {
  logger.info(`${socket.id} User connected`)
  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      body: message,
      from: "otro",
    })
  })
})

const app = express()

if (config.NODE_ENV == "develop") app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//sessions

app.use(
  session({
    store: new MongoStore({
      mongoUrl: config.MONGO_URL,
    }),
    secret: config.SESSION_PASS,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 1000000,
      secure: false,
      httpOnly: true,
    },
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())

app.use("/cart", routerCart.start())
app.use("/order", routerOrder.start())
app.use("/message", routerMessage.start())
app.use("/product", routerProduct.start())
app.use("/", routerUser.start())

const server = app.listen(config.PORT, () => {
  console.log(
    `Server listen on ${config.PORT} (${config.NODE_ENV}) DB:${config.TYPE_DB}`
  )
})
server.on("error", (e) => console.log(e))
