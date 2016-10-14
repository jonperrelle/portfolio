'use strict';

const router = require('express').Router();
const nodemailer = require('nodemailer');
const credentials = require('../../env').nodemailer;
// const transporter = nodemailer.createTransport('smtps://'+credentials.from+':'+credentials.password);
// const transporter = nodemailer.createTransport({
//   service: credentials.service,
//   auth: {
//     user: credentials.from,
//     pass: credentials.password
//   }
// });

var smtpConfig = {
    service: 'Gmail',
    auth: {
        user: credentials.from,
        pass: credentials.password
    }
};

const transporter = nodemailer.createTransport(smtpConfig);

router.post('/', function (req, res, next) {
  let mailOptions = {
    from: credentials.from,
    to: 'jonperrelle@gmail.com',
    subject: 'You received a message from jonperrelle.com',
    html: '<p><strong>Name: </strong>' + req.body.name + '</p><p><strong>Email: </strong>' + req.body.email + '</p><p><strong>Subject: </strong>' + req.body.subject + '</p><p><strong>Message: </strong>' + req.body.message + '</p>'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error)
        res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;