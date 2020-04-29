// Send Emails with form data
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

admin.initializeApp()

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

exports.sendEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const form = req.body

    const mailOptions = {
      subject: 'New contact from website',
      from: '"Imperial Mateiral" <no-reply@i-material.com.au>',
      to: ['tariq@i-material.com.au', 'sal@i-material.com.au'],
      html: `
  <h1>You have a new message!</h1>
  <p><b>Name: </b>${form.name}</p>
  <p><b>Email: </b>${form.email}</p>
  <p><b>Phone: </b>${form.phone}</p>
  <p><b>Message: </b>${form.message}</p>
  `
    }

    // returning result
    return transporter.sendMail(mailOptions, (err, info) => {
      return err
        ? res.send(err.toString())
        : res
            .status(200)
            .send('Thank you for your message, We will contact you shortly.')
            .end()
    })
  })
})
