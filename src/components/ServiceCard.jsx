import { Code2, Terminal, Smartphone, Figma, ShoppingCart, LayoutGrid, LifeBuoy, Check } from 'lucide-react'

const iconMap = {
  Code2,
  Terminal,
  Smartphone,
  Figma,
  ShoppingCart,
  LayoutGrid,
  LifeBuoy,
}

function ServiceCard({ service, showNumber = false, showCapabilities = false }) {
  const Icon = iconMap[service.icon] || Code2

  return (
    <article className={`service-card${showCapabilities ? ' service-card--detailed' : ''}`}>
      <div className="service-card__top">
        <div className="service-card__icon">
          <Icon size={24} aria-hidden="true" />
        </div>
        {showNumber && <span className="service-card__number">{service.number}</span>}
      </div>
      <h3>{service.title}</h3>
      <p>{showCapabilities ? service.description : service.short}</p>
      {showCapabilities && service.capabilities && (
        <div className="service-card__caps">
          <h4>Key capabilities</h4>
          <ul>
            {service.capabilities.map((cap) => (
              <li key={cap}>
                <Check size={14} aria-hidden="true" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default ServiceCard
