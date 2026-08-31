import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import logoIcon from '../assets/images/logo-full.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = ['Web Development', 'Software Development', 'Mobile Apps', 'UI/UX Design']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="navbar__logo footer__logo">
            <img src={logoIcon} alt="Need Technosoft logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">Need Technosoft</span>
          </Link>
          <p>
            We build practical digital products, including websites, software and mobile apps,
            that help businesses work better.
          </p>
        </div>

        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Services</h3>
          <ul>
            {serviceLinks.map((label) => (
              <li key={label}>
                <Link to="/services">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>Pipal Chowk, Biratnagar, Nepal</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href="tel:+9779852078275">+977 9852078275</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:info@needtechnosoft.com.np">info@needtechnosoft.com.np</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} Need Technosoft Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
