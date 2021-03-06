// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json([
//     {id:1,username:"someone"},
//     {id:2,username:"someone else"}
//   ])
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/:email/:name", (req, res) => {
  // nodemailer.createTestAccount((err,account)=>{
  //     const html = `<h3>Contact Details</h3> <br> <p>${req.body.name}</p>`
  // })
  var email = req.params.email;
  var name = req.params.name;
  // res.json({ success: name});
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "txrcs100@gmail.com",
      pass: "Success19",
    },
  });
  const mailOptions = {
    from: "txrcs100@gmail.com", // sender address
    to: email,
    subject: `Hello ${name}, from eCare Residential`, // Subject line
    html: `<p>Something here for ${name}</p>`, // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.json({ success: true });
    } else res.json({ success: false });
  });
});

router.get("/", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
