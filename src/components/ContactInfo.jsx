import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    label: 'Address',
    content: <span>Pipal Chowk, Biratnagar, Nepal</span>,
  },
  {
    icon: Phone,
    label: 'Phone',
    content: <a href="tel:+9779852078275">+977 9852078275</a>,
  },
  {
    icon: Mail,
    label: 'Email',
    content: (
      <>
        <a href="mailto:info@needtechnosoft.com.np">info@needtechnosoft.com.np</a>
        <a href="mailto:needtechnosoft@gmail.com">needtechnosoft@gmail.com</a>
      </>
    ),
  },
  {
    icon: Clock,
    label: 'Business Hours',
    content: (
      <>
        <span>Sun to Fri: 10:00 AM to 5:00 PM</span>
        <span>Saturday: Closed</span>
      </>
    ),
  },
]

function ContactInfo() {
  return (
    <ul className="contact-info">
      {items.map(({ icon: Icon, label, content }) => (
        <li key={label} className="contact-info__item">
          <span className="contact-info__icon">
            <Icon size={20} aria-hidden="true" />
          </span>
          <span className="contact-info__text">
            <span className="contact-info__label">{label}</span>
            {content}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default ContactInfo
