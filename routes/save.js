const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { USER_EMAIL, USER_PASSWORD } = require("../config/credentials.js");
const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";
const SENDER_EMAIL = USER_EMAIL;
// const {RECEIVER_EMAIL,CC,BCC,EMAIL_SUBJECT,EMAIL_BODY_HTML} = require("../routes/save");
const RECEIVER_EMAIL = "mayureshgawas99@gmail.com";
const CC = [];
const BCC = [];

const EMAIL_SUBJECT = "Happy Birthday";
const EMAIL_BODY_HTML = "Happy Birthday";

router.post("/", async (req, res) => {
  try {
    const { receiver, cc, bcc, subject, message } = req.body;
    const RECEIVER_EMAIL = receiver;
    const CC = [cc];
    const BCC = [bcc];
    const EMAIL_SUBJECT = subject;
    const EMAIL_BODY_HTML = message;
    const options = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      cc: CC,
      bb: BCC,
      subject: EMAIL_SUBJECT,
      html: EMAIL_BODY_HTML
    };

    const transporter = nodemailer.createTransport({
      host: HOST_SERVICE,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD,
      }
    });

    transporter.sendMail(options, (err, info) => {
      if (info == null) {
        return res.status(403).send("Something went Wrong !");
      }
      console.log("Email Info :", info);
      return res.status(200).send("Sent Succesfully")
    });




  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

module.exports = { router, RECEIVER_EMAIL, CC, BCC, EMAIL_SUBJECT, EMAIL_BODY_HTML };