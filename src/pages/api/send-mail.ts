import { NextApiRequest, NextApiResponse } from 'next'
import mailService from '../../services/mailService'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const payload = req.body

  if (!payload || req.method !== 'POST') {
    return res.status(400).json({ message: 'Bad request!' })
  }

  const message = `Contato: "${payload.name}" <${payload.email}>\n\n${payload.message}`

  const mailOptions = {
    from: `"${payload.name}" < ${payload.email} >`,
    to: 'daniel.of@gmail.com',
    subject: 'Contato via Dan Garcia - Portfólio',
    text: message
  }

  const responseMail = await mailService(mailOptions)

  return res.status(200).json({ message: `Email sent: ${responseMail}` })
}
