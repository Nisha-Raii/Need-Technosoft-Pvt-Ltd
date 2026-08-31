function PageHero({ eyebrow, heading, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1>{heading}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  )
}

export default PageHero
