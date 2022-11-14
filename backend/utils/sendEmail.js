import nodemailer from "nodemailer"
import config from "../config/config.js/"

//Transporter de nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: `${config.NODEMMAILER_USER}`,
    pass: `${config.NODEMAILER_PASS}`,
  },
})

const sendRegister = () => {
  const mailOptions = {
    from: "Eshop - Register",
    to: config.ADMIN_EMAIL,
    subject: "New User Registered",
    html: `
        <h1 style="color: blue;">Hay un nuevo usuario registrado en tu Eshop!
        </h1>`,
  }
  transporter
    .sendMail(mailOptions)
    .then((r) => console.log(r))
    .catch((e) => console.log(e))
}

const sendPurchase = () => {
  const mailOptions = {
    from: "Eshop - Register",
    to: config.ADMIN_EMAIL,
    subject: "New User Registered",
    html: `
        <h1 style="color: blue;">Tienes una nueva compra en tu Eshop!
        </h1>`,
  }

  transporter
    .sendMail(mailOptions)
    .then((r) => console.log(r))
    .catch((e) => console.log(e))
}

export { sendRegister, sendPurchase }
