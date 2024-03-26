// npm install nodemailer

// Import nodemailer module
const nodemailer = require("nodemailer");

const myEmailAdress = "myEmail@gmail.com";
const myPassword = "XXX";

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${myEmailAdress}`,
    pass: `${myPassword}`,
  },
});

// Email content
let mailOptions = {
  from: `${myEmailAdress}`,
  to: "lukasholmwolf@gmail.com",
  subject: "Test Email",
  text: "This is a test email sent from Node.js using nodemailer.",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

// node sendEmail.js

// Push notifications insteed of email notifacations.
// sockets From serverside check when online.
