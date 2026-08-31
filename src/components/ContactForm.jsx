import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // No backend is configured yet, so this only simulates a submission.
      // Wire this up to a real API or form service before going live.
      setSubmitted(true)
      setValues(initialValues)
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <CheckCircle2 size={32} aria-hidden="true" />
        <h3>Message sent</h3>
        <p>Thanks for reaching out. Our team will get back to you shortly.</p>
        <button type="button" className="btn btn--outline btn--sm" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="form-field__error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className="form-field__error">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
      </div>

      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" value={values.subject} onChange={handleChange} />
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" className="form-field__error">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn--primary btn--full-mobile">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
