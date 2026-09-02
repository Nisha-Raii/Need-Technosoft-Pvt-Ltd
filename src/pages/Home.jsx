import { useEffect } from 'react'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatItem from '../components/StatItem.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import stats from '../data/stats.js'
import { homeServices } from '../data/services.js'
import projects from '../data/projects.js'
import heroImage from '../assets/images/company-hero.jpg'
import {
  CodeIcon,
  ServerIcon,
  MobileIcon,
  DatabaseIcon,
  CloudIcon,
  DesignIcon,
} from '../components/TechIcon.jsx'

const homeCategories = [
  { title: 'Frontend', Icon: CodeIcon, items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Backend', Icon: ServerIcon, items: ['Node.js', 'Laravel', 'PHP', 'Python', 'Java'] },
  { title: 'Mobile', Icon: MobileIcon, items: ['Flutter'] },
  { title: 'Database', Icon: DatabaseIcon, items: ['MySQL', 'MongoDB'] },
  { title: 'Cloud & DevOps', Icon: CloudIcon, items: ['AWS', 'Git', 'GitHub'] },
  { title: 'Design & Collaboration', Icon: DesignIcon, items: ['Figma'] },
]

function Home() {
  useEffect(() => {
    document.title = "Need Technosoft Pvt. Ltd. | Digital Solutions & Software Development"
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1>Digital solutions built around your business.</h1>
            <p className="hero__desc">
              Need Technosoft helps businesses turn ideas into practical digital
              products. From websites and custom software to mobile applications,
              we design and develop reliable solutions that make everyday work
              simpler and more efficient.
            </p>
            <div className="hero__actions">
              <Button to="/contact" variant="primary" fullWidthMobile>
                Contact Us
              </Button>
              <Button to="/projects" variant="outline" icon fullWidthMobile>
                View Our Work
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

      {/* COMPANY INTRODUCTION */}
      <section className="section intro">
        <div className="container">
          <div className="intro__content">
            <h2>Technology that solves real business problems.</h2>
            <p>
              We build practical digital products designed to fit the way our clients
              actually work. Rather than adding technology for its own sake, we focus
              on the outcome it delivers.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            heading="What we do"
            description="A focused set of services for building and maintaining a business's digital presence."
          />
          <div className="service-grid">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="section__cta">
            <Button to="/services" variant="secondary" icon>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="section">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            heading="Selected work"
            description="A few examples of the projects we've delivered."
          />
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card__visual" aria-hidden="true">
                  <div className="project-art">
                    <span className="project-art__bar" />
                    <span className="project-art__panel" />
                  </div>
                </div>
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
            <Button to="/projects" variant="secondary" icon>
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            heading="Technologies we work with"
            description="A focused set of languages, frameworks and tools we use to build reliable digital solutions."
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
        </div>
      </section>

      {/* WHY NEED TECHNOSOFT */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading heading="Why Need Technosoft" align="left" />
          <div className="why-list">
            <div className="why-list__item">
              <span>01</span>
              <div>
                <h3>Practical solutions</h3>
                <p>We build for the problem at hand, avoiding unnecessary features and complexity.</p>
              </div>
            </div>
            <div className="why-list__item">
              <span>02</span>
              <div>
                <h3>Quality development</h3>
                <p>Stable, well-supported tools and clean code that keeps working long after launch.</p>
              </div>
            </div>
            <div className="why-list__item">
              <span>03</span>
              <div>
                <h3>Client-focused approach</h3>
                <p>We work closely with your team throughout the project, not just at the start and end.</p>
              </div>
            </div>
            <div className="why-list__item">
              <span>04</span>
              <div>
                <h3>Reliable support</h3>
                <p>Our involvement continues after launch, keeping systems current and running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
