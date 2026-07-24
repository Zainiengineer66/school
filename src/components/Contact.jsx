import { useState } from 'react'
import { Reveal } from './useReveal.jsx'
import { sendContactEmail } from '../services/emailService.js'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await sendContactEmail(form)
      setStatus({ type: 'success', message: 'Your message has been sent successfully.' })
      setForm(initialForm)
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong while sending your message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <div className="kicker">Get in touch</div>
          <h2>We would love to hear from you.</h2>
        </div>

        <div className="contact-layout">
          <Reveal>
            <div className="contact-card">
              <div className="contact-list">
                <div className="contact-item">
                  <i>⌖</i>
                  <div>
                    <b>Visit Zainab Campus</b>
                    <span>Chak No. 67 J.B, Sadhar, Faisalabad</span>
                  </div>
                </div>
                <div className="contact-item">
                  <i>☎</i>
                  <div>
                    <b>Call us</b>
                    <span>0302-4216767</span>
                  </div>
                </div>
                <div className="contact-item">
                  <i>✉</i>
                  <div>
                    <b>Email us</b>
                    <span>zainabnoreen666@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  title="Map placeholder"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Faisalabad%2C%20Pakistan&z=12&output=embed"
                />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
                </label>
                <label>
                  Phone
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone" />
                </label>
                <label>
                  Message
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" required />
                </label>

                {status.message ? (
                  <p className={`form-feedback ${status.type}`}>{status.message}</p>
                ) : null}

                <button className="contact-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

