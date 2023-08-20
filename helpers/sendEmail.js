const { META_HOST, META_PASS } = process.env;

const nodemailer = require('nodemailer');

const config = {
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: META_HOST,
    pass: META_PASS,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async data => {
  const email = { ...data, from: META_HOST };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEmail;