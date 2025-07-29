// Create a new API route: app/api/webhooks/hotdoc.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyWebhookSignature } from '@hotdoc/webhooks'

const secret = process.env.HOTDOC_WEBHOOK_SECRET!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Verify webhook signature
    const isValid = verifyWebhookSignature(
      req.body,
      req.headers['x-hotdoc-signature'],
      secret
    )

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid signature' })
    }

    const event = req.body.event
    const appointmentData = req.body.data

    // Handle different event types
    switch (event) {
      case 'appointment.booked':
        await handleNewAppointment(appointmentData)
        break
      case 'appointment.cancelled':
        await handleCancelledAppointment(appointmentData)
        break
      // Add other cases as needed
    }

    res.status(200).json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: 'Error processing webhook' })
  }
}

async function handleNewAppointment(data: any) {
  // Store in your database
  const appointment = {
    id: data.id,
    patientId: data.patient.id,
    patientName: data.patient.name,
    doctorId: data.doctor.id,
    doctorName: data.doctor.name,
    date: new Date(data.start_time),
    status: 'booked',
    createdAt: new Date()
  }

  // Example using Prisma ORM
  await prisma.appointment.create({ data: appointment })
  
  // Optional: Send confirmation email
  await sendConfirmationEmail(appointment)
}
