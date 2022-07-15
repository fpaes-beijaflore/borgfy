const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  const { name, email, service, comment } = req.body;

  if (!name || name === '') {
    return res
      .status(200)
      .json({ success: false, type: 'name', message: 'Please, enter your name.' });
  }

  if (!email || email === '') {
    return res
      .status(200)
      .json({ success: false, type: 'email', message: 'Please, enter your email.' });
  }

  if (!service || service === '') {
    return res
      .status(200)
      .json({ success: false, type: 'service', message: 'Please, select the service you want.' });
  }

  if (!comment || comment === '') {
    return res
      .status(200)
      .json({ success: false, type: 'comment', message: 'Please, enter your comment.' });
  }

  var smtpConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.SECURE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  };

  let transporter = nodemailer.createTransport(smtpConfig);

  let info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: service,
    text: comment,
    html: `<strong>Name: </strong> ${name}  <br />
    <strong>Email: </strong> ${email}  <br />
    <strong>Service: </strong> ${service}  <br />
    <strong>Message: </strong> ${comment}  <br />
    `,
  });

  res.status(200).json({ succes: true, info });
}
