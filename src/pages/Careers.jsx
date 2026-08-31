import { useEffect, useState } from 'react'
import { CheckCircle2, FileText, ClipboardCheck, Users, Award } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const reasons = [
  'Learn and grow',
  'Work on real projects',
  'Collaborative environment',
  'Practical experience',
]

const hireSteps = [
  { label: 'Application', description: 'Send us your profile and resume.', icon: FileText },
  { label: 'Review', description: 'We review your details and experience.', icon: ClipboardCheck },
  { label: 'Interview', description: 'A conversation to get to know you.', icon: Users },
  { label: 'Selection', description: 'We make an offer if there is a fit.', icon: Award },
]

const initialValues = { name: '', email: '', phone: '', position: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please tell us a little about yourself.'
  return errors
}

function Careers() {
  const [values, setValues] = useState(initialValues)
  const [resumeName, setResumeName] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Careers | Need Technosoft Pvt. Ltd.'
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleFile = (event) => {
    const file = event.target.files?.[0]
    setResumeName(file ? file.name : '')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialValues)
      setResumeName('')
    }
  }

  return (
    <>
      <PageHero
        heading="Build your career with us"
        description="We're a growing software team in Biratnagar where curiosity, ownership, and continuous growth are part of how we work."
      />

      {/* WHY WORK WITH US */}
      <section className="section">
        <div className="container">
          <SectionHeading heading="Why work with us" align="left" />
          <ul className="reasons-list">
            {reasons.map((reason) => (
              <li key={reason} className="reasons-list__item">
                <span className="reasons-list__check">
                  <CheckCircle2 size={18} aria-hidden="true" />
                </span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            heading="Open positions"
            description="We're always interested in meeting talented people. Send us your profile and we'll keep you in mind for future opportunities."
            align="left"
          />
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="section">
        <div className="container">
          <SectionHeading heading="How we hire" align="center" />
          <div className="hire-steps">
            {hireSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="hire-steps__item">
                  <div className="hire-steps__icon">
                    <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="hire-steps__title">{step.label}</h3>
                  <p className="hire-steps__desc">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading heading="Join our team" description="Fill out the form below and attach your resume." align="center" />
          <div className="careers-apply">
            {submitted ? (
              <div className="contact-form__success" role="status">
                <CheckCircle2 size={32} aria-hidden="true" />
                <h3>Application received</h3>
                <p>Thank you for your application. We&apos;ll review your details and contact you if your qualifications match the role.</p>
                <button type="button" className="btn btn--outline btn--sm" onClick={() => setSubmitted(false)}>
                  Submit another application
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="c-name">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input id="c-name" name="name" type="text" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
                    {errors.name && <span className="form-field__error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input id="c-email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
                    {errors.email && <span className="form-field__error">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-phone">Phone</label>
                    <input id="c-phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-position">Position</label>
                    <input id="c-position" name="position" type="text" placeholder="e.g. Frontend Developer" value={values.position} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="c-message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea id="c-message" name="message" rows={5} value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
                  {errors.message && <span className="form-field__error">{errors.message}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="c-resume">Resume Upload</label>
                  <input id="c-resume" name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
                  {resumeName && <span className="form-field__filename">Selected: {resumeName}</span>}
                </div>

                <button type="submit" className="btn btn--primary careers-apply__submit">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
