// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


  // const sendMail = function () {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'Ali_alnajjar@live.com', // Change to your recipient
    from: 'ali.ib.alnajjar@icloud.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.status(200).json({ res: 'Email has been sent' })

    })
    .catch((error) => {
      console.error(error)
      res.status(404).json({ res: error, key: process.env.SENDGRID_API_KEY })

    })



  // }
}
