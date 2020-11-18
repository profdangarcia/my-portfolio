/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import nodemailer from 'nodemailer'

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD, EMAIL_TO } = process.env

const main = async ({ from, subject, text }) => {
  const mailService = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD
    }
  })

  // send mail with defined transport object
  const info = await mailService.sendMail({
    from,
    to: EMAIL_TO,
    subject,
    text
  })

  return info
}

export default main
