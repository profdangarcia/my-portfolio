import { NextApiRequest, NextApiResponse } from 'next'
import mailService from '../../services/mailService'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const payload = req.body
  const { MAIL_USER } = process.env
  if (!payload || req.method !== 'POST') {
    return res.status(400).json({
      message: 'Bad request!'
    })
  }

  const message = `Contato: "${payload.name}" <${payload.email}>\n\n${payload.message}`

  const mailOptions = {
    from: `"Novo Contato via Portfólio" < ${MAIL_USER} >`,
    subject: 'Contato via Dan Garcia - Portfólio',
    text: message
  }

  await mailService(mailOptions)

  return res.status(200).json({ message: 'Email sent!' })
}
