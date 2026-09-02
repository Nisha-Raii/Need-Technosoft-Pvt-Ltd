import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import {
  CodeIcon,
  ServerIcon,
  MobileIcon,
  DatabaseIcon,
  CloudIcon,
  DesignIcon,
} from '../components/TechIcon.jsx'
import technologies from '../data/technologies.js'

const categoryMeta = {
  Frontend: { Icon: CodeIcon },
  Backend: { Icon: ServerIcon },
  Mobile: { Icon: MobileIcon },
  Database: { Icon: DatabaseIcon },
  'Cloud & DevOps': { Icon: CloudIcon },
  'Design & Collaboration': { Icon: DesignIcon },
}

const workflow = [
  'Frontend',
  'Backend / APIs',
  'Database',
  'Cloud & Deployment',
]

function Technologies() {
  useEffect(() => {
    document.title = 'Technologies | Need Technosoft Pvt. Ltd.'
  }, [])

  return (
    <>
      <PageHero
        heading="Technologies We Work With"
        description="A focused set of languages, frameworks and tools we rely on to build reliable software."
      />

      {/* TECHNOLOGY CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="home-tech">
            {technologies.map((group, i) => {
              const meta = categoryMeta[group.category] || { Icon: null }
              const Icon = meta.Icon
              return (
                <div key={group.category} className="home-tech__row">
                  <div className="home-tech__cat">
                    <span className="home-tech__number">0{i + 1}</span>
                    {Icon && <Icon className="home-tech__icon" />}
                    <h3>{group.category}</h3>
                  </div>
                  <p className="home-tech__items">{group.items.join(' · ')}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* HOW TECHNOLOGIES WORK TOGETHER */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            heading="How technologies work together"
            description="Each layer of our stack connects cleanly to the next, from interface to infrastructure."
          />
          <div className="workflow">
            {workflow.map((step, i) => (
              <div key={step} className="workflow__step">
                <span className="workflow__node">{step}</span>
                {i < workflow.length - 1 && (
                  <span className="workflow__arrow" aria-hidden="true">
                    <ArrowRight size={20} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Technologies
