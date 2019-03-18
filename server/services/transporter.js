const nodemailer = require('nodemailer');

const config = require('../config');

const { GMAIL_USER, GMAIL_PASS } = config;

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS
  }
};

const transporter = nodemailer.createTransport(transport);

// Verify connection configuration
transporter.verify(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('OK!');
  }
});

module.exports = transporter;
