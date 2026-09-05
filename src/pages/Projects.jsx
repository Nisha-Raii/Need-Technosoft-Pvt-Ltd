import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import projects from '../data/projects.js'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

function Projects() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    document.title = 'Projects | Need Technosoft Pvt. Ltd.'
  }, [])

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        heading="Selected projects"
        description="A sample of the kind of work we do. Each project is built around a specific business need."
      />

      <section className="section section--projects">
        <div className="container">
          <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`filter-bar__item${active === cat ? ' filter-bar__item--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filtered.map((project) => (
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
                  <button type="button" className="project-card__link">
                    View Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
