function PageHero({ eyebrow, heading, description, className = '' }) {
  return (
    <section className={`page-hero${className ? ` ${className}` : ''}`}>
      <div className="container">
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1>{heading}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  )
}

export default PageHero
