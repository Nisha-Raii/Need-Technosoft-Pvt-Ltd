import { useEffect } from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatItem from '../components/StatItem.jsx'

const outlineIconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function MissionIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M13.5 10.5 20 4" />
      <path d="M15.5 4.2 20 4l-.2 4.5" />
    </svg>
  )
}

function VisionIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps}>
      <path d="M9 17a7 7 0 1 1 6 0" />
      <path d="M9 17v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1" />
      <path d="M12 17v2" />
    </svg>
  )
}

const processSteps = [
  { label: 'Discover', description: 'Understanding your business, users and goals' },
  { label: 'Plan', description: 'Defining scope, architecture and timeline' },
  { label: 'Design', description: 'Creating interfaces that are clear and intuitive' },
  { label: 'Develop', description: 'Building iteratively with regular check-ins' },
  { label: 'Test', description: 'Validating quality at every stage' },
  { label: 'Deliver', description: 'Launching and supporting your product' },
]

const values = [
  { number: '01', title: 'Quality', text: 'We write clean, maintainable code and design interfaces that are clear and consistent, because the details determine whether a product truly works well.' },
  { number: '02', title: 'Innovation', text: 'We stay current with technology and apply the right tools to solve each problem, choosing what genuinely improves outcomes.' },
  { number: '03', title: 'Collaboration', text: 'We work as an extension of your team, with regular communication and shared ownership of the outcome.' },
  { number: '04', title: 'Integrity', text: 'We give honest assessments, stick to agreed timelines, and stand behind what we build.' },
]

const aboutStats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Satisfied Clients' },
  { value: '99%', label: 'Client Retention' },
  { value: '24/7', label: 'Support Available' },
]

function About() {
  useEffect(() => {
    document.title = 'About Us | Need Technosoft Pvt. Ltd.'
  }, [])

  return (
    <>
      <PageHero
        heading="About Need Technosoft"
        description="A software development company that builds practical digital products for businesses that want technology to solve problems."
      />

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container about-who">
          <div className="about-who__text">
            <SectionHeading heading="Who we are" />
            <p>
              Need Technosoft Pvt. Ltd. is a software development company based in
              Biratnagar, Nepal. We work with businesses on web development, software
              development, mobile applications and UI/UX design.
            </p>
            <p>
              Our approach stays close to the problem being solved. Before writing any
              code, we take the time to understand the business behind the request, so
              what we deliver is genuinely useful rather than just technically complete.
            </p>
          </div>
          <div className="about-who__visual" aria-hidden="true">
            <div className="about-art">
              <div className="about-art__header">
                <span className="about-art__dot" />
                <span className="about-art__dot" />
                <span className="about-art__dot" />
              </div>
              <div className="about-art__body">
                <span className="about-art__title" />
                <span className="about-art__line" />
                <span className="about-art__line about-art__line--short" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading heading="Our approach" description="A clear, structured process that keeps projects predictable and gives you visibility at every step." />
          <div className="about-timeline">
            {processSteps.map((step) => (
              <div key={step.label} className="about-timeline__step">
                <span className="about-timeline__dot" />
                <h4>{step.label}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section">
        <div className="container">
          <div className="about-mv">
            <div className="about-mv__block">
              <div className="about-mv__icon" aria-hidden="true">
                <MissionIcon />
              </div>
              <h3>Mission</h3>
              <p>To help businesses grow and operate more efficiently through practical, well-built digital solutions.</p>
            </div>
            <div className="about-mv__block">
              <div className="about-mv__icon" aria-hidden="true">
                <VisionIcon />
              </div>
              <h3>Vision</h3>
              <p>To be a dependable technology partner for businesses across Nepal, known for thoughtful, lasting work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading heading="Our values" align="left" />
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.number} className="value-card">
                <span className="value-card__number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="section">
        <div className="container">
          <div className="stats__grid">
            {aboutStats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
