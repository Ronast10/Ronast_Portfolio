const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all required fields' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; border: 1px solid #eee;">
          <h2 style="font-size: 1.4rem; margin-bottom: 24px;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #999; font-size: 0.85rem; width: 80px;">Name</td>
              <td style="padding: 10px 0; font-size: 0.95rem;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #999; font-size: 0.85rem;">Email</td>
              <td style="padding: 10px 0; font-size: 0.95rem;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #999; font-size: 0.85rem;">Subject</td>
              <td style="padding: 10px 0; font-size: 0.95rem;">${subject || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999; font-size: 0.85rem; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 0.95rem; line-height: 1.7;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    })
    res.json({ success: true, message: 'Message sent!' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/', (req, res) => res.json({ message: 'Portfolio API running 🚀' }))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})