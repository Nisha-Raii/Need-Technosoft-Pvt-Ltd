import { Code2, Terminal, Smartphone, Figma, ShoppingCart, LayoutGrid, LifeBuoy } from 'lucide-react'

const iconMap = {
  Code2,
  Terminal,
  Smartphone,
  Figma,
  ShoppingCart,
  LayoutGrid,
  LifeBuoy,
}

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Code2

  return (
    <article className="service-card">
      <div className="service-card__top">
        <div className="service-card__icon">
          <Icon size={24} aria-hidden="true" />
        </div>
        <span className="service-card__number">{service.number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
    </article>
  )
}

export default ServiceCard