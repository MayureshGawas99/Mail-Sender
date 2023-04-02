// const nodemailer = require("nodemailer");
// const {USER_EMAIL,USER_PASSWORD} = require("../config/credentials.js");
// const {RECEIVER_EMAIL,CC,BCC,EMAIL_SUBJECT,EMAIL_BODY_HTML} = require("../routes/save");
// console.log(USER_EMAIL,USER_PASSWORD);

// const SMTP_PORT = 587;
// const HOST_SERVICE = "smtp-relay.sendinblue.com";
// const SENDER_EMAIL = USER_EMAIL;
// // const RECEIVER_EMAIL = "mayureshgawas99@gmail.com";
// // const CC = [];
// // const BCC = [];

// // const EMAIL_SUBJECT = "Happy Birthday";
// // const EMAIL_BODY_HTML = "Happy Birthday";

// const options = {
//   from: SENDER_EMAIL,
//   to: RECEIVER_EMAIL,
//   cc:CC,
//   bb: BCC,
//   subject:EMAIL_SUBJECT,
//   html: EMAIL_BODY_HTML
// };

// const transporter = nodemailer.createTransport({
//   host:HOST_SERVICE,
//   port: SMTP_PORT,
//   secure: false,
//   auth: {
//     user: USER_EMAIL,
//     pass: USER_PASSWORD,
//   }
// });

// module.exports = {transporter,options};
