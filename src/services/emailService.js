import emailjs from '@emailjs/browser'

const SERVICE_ID = 'gmail_service'
const TEMPLATE_ID = 'template_l77isrl'
const PUBLIC_KEY = 'kRsU•••••••••••••••••'

export async function sendContactEmail(formData) {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    message: formData.message,
    reply_to: formData.email,
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}
