import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import StatItem from '../components/StatItem.jsx'
import heroImage from '../assets/images/company-hero.jpg'
import stats from '../data/stats.js'
import services from '../data/services.js'
import projects from '../data/projects.js'
import {
  CodeIcon,
  ServerIcon,
  MobileIcon,
  DatabaseIcon,
} from '../components/TechIcon.jsx'

const featuredServiceIds = [
  'web-development',
  'software-development',
  'mobile-development',
]

const reasons = [
  {
    title: 'Practical solutions',
    text: 'We build for the problem at hand, avoiding unnecessary features and complexity.',
  },
  {
    title: 'Quality development',
    text: 'Stable, well-supported tools and clean code that keeps working long after launch.',
  },
  {
    title: 'Client-focused approach',
    text: 'We work closely with your team throughout the project, not just at the start and end.',
  },
  {
    title: 'Reliable support',
    text: 'Our involvement continues after launch, keeping systems current and running smoothly.',
  },
]

const homeCategories = [
  { title: 'Frontend', Icon: CodeIcon, items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Backend', Icon: ServerIcon, items: ['Node.js', 'Laravel', 'PHP', 'Python', 'Java'] },
  { title: 'Mobile', Icon: MobileIcon, items: ['Flutter'] },
  { title: 'Database', Icon: DatabaseIcon, items: ['MySQL', 'MongoDB'] },
]

function Home() {
  useEffect(() => {
    document.title = "Need Technosoft Pvt. Ltd. | Digital Solutions & Software Development"
  }, [])

  const featuredServices = services.filter((s) => featuredServiceIds.includes(s.id))

  return (
    <>
      {/* HER0 */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1>We build software that solves real business problems</h1>
            <p className="hero__desc">
              Need Technosoft is a software company in Biratnagar that designs and builds websites, custom software, and mobile applications that help businesses work smarter and grow.
            </p>
            <div className="hero__actions">
              <Button to="/contact" variant="primary" fullWidthMobile>
                Contact Us
              </Button>
              <Button to="/services" variant="outline" fullWidthMobile>
                Explore Services
              </Button>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero-photo">
              <img
                className="hero-photo__img"
                src={heroImage}
                alt="Hands typing on a laptop in a modern office workspace"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats-band">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            heading="What We Do"
            description="Practical digital solutions designed around real business needs."
          />
          <div className="service-grid">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="section__cta">
<Button to="/services" variant="secondary">
                Explore Services
              </Button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section--tint section--work">
        <div className="container">
          <SectionHeading
            heading="Selected Work"
            description="A few examples of the digital products and systems we've delivered."
          />
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card__body">
                  <span className="project-card__category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="project-card__tags">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="section__cta">
<Button to="/projects" variant="secondary">
                View All Projects
              </Button>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            heading="Technologies We Work With"
            description="We use modern and reliable technologies to build scalable digital solutions."
          />
          <div className="home-tech">
            {homeCategories.map((category, i) => {
              const Icon = category.Icon
              return (
                <div key={category.title} className="home-tech__row">
                  <div className="home-tech__cat">
                    <span className="home-tech__number">0{i + 1}</span>
                    {Icon && <Icon className="home-tech__icon" />}
                    <h3>{category.title}</h3>
                  </div>
                  <p className="home-tech__items">{category.items.join(' · ')}</p>
                </div>
              )
            })}
          </div>
          <div className="section__cta">
<Button to="/technologies" variant="secondary">
                Explore Technologies
              </Button>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="section section--tint" style={{ paddingBlock: '48px 36px' }}>
        <div className="container">
          <div className="intro__content intro__content--left intro__content--careers">
            <h2>Build Your Career With Us</h2>
            <p>
              Join a team where you can learn, grow and work on real-world technology
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NEED TECHNOSOFT */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '48px' }}>
        <div className="container">
          <div className="section-heading section-heading--left" style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.01em', margin: 0 }}>
              Why Need Technosoft
            </h3>
          </div>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-box">
                <div className="reason-box__head">
                  <span className="reasons-list__check">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </span>
                  <h3>{reason.title}</h3>
                </div>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="home-cta" style={{ justifyContent: 'flex-start' }}>
            <Button to="/careers" variant="secondary">
              View Careers
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT / FINAL CTA */}
      <section className="section" style={{ paddingTop: '12px' }}>
        <div className="container">
          <div className="intro__content intro__content--lead intro__content--left">
            <h2>Let's Build Something That Matters</h2>
            <p>
              Have a project or business requirement in mind? Tell us what you're trying
              to achieve and we'll work with you on a practical solution.
            </p>
            <div className="home-cta">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
