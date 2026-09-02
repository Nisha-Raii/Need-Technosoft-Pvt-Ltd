function SectionHeading({ heading, description, align = 'left', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align}${className ? ` ${className}` : ''}`}>
      <h2>{heading}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
