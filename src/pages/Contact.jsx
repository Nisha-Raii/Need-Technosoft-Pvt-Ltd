import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import ContactForm from '../components/ContactForm.jsx'

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Need Technosoft Pvt. Ltd.'
  }, [])

  return (
    <>
      <PageHero
        heading="Contact Us"
        description="Reach us through any of the channels below and our team will be happy to help you."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-grid__info">
            <ContactInfo />
          </div>
          <div className="contact-grid__form">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
