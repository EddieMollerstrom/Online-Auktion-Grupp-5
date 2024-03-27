// npm install nodemailer

const nodemailer = require("nodemailer");

const myEmail = "lukasholmwolf@gmail.com";
const myPassCode = "vfxdpgigyiqjbadq";

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: `${myEmail}`,
    pass: `${myPassCode}`,
  },
});

// Define email options
let mailOptions = {
  from: `${myEmail}`,
  to: `${myEmail}`,
  subject: "Hello from VS Code",
  text: "This is an email sent from VS Code using Node.js and nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

// node sendEmail.js

// Push notifications insteed of email notifacations.
// sockets From serverside check when online.
