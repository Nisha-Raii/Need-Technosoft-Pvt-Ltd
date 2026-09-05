import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import services from '../data/services.js'

function Services() {
  useEffect(() => {
    document.title = 'Services | Need Technosoft Pvt. Ltd.'
  }, [])

  return (
    <>
      <PageHero
        className="page-hero--compact"
        heading="Services"
        description="Practical technology solutions designed around your business goals, built to support your business and help you grow."
      />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
