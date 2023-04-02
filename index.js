const express  = require("express");
const app = express();
const scheduler = require("node-cron");
// const {transporter,options} = require("./services/email");
const homeRoutes = require("./routes/home");
// const mailto = require("./routes/mailto");
const {router} = require("./routes/save");



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/save",router)
// app.use("/emailto",mailto);
app.use("/",homeRoutes);

const PORT = 1338;

// scheduler.schedule("* 1 * * * ",() => {
//   console.log("sending email");
//   transporter.sendMail(options, (err,info) => {
//     if (err){
//       console.error(err);
//     }
//     console.log("Email Info :", info);
//   });
// });

app.listen(PORT, () =>{
  console.log("Server is Running!");
});