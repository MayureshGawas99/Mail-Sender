// const express = require("express");
// const router = express.Router();
// const {transporter,options} = require("../services/email");

// router.post("/", async (req,res) => {
//   try{
//     transporter.sendMail(options, (err,info) => {
//       if (err){
//         console.error(err);
//       }
//       console.log("Email Info :", info);
//     });

//     return res.status(200).json({
//       status:"ok",
//       message: "Received Succesfully",
//     })
    
    
//   }catch(e){
//     console.error(e);
//     return res.status(500).send(e);
//   }
// });

// module.exports = router