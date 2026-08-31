import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Reusable button/link component.
 * variant: 'primary' | 'secondary' | 'outline'
 * If `to` is provided, renders a router Link. If `href`, an anchor.
 * Otherwise renders a <button>.
 */
function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon = false,
  fullWidthMobile = false,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant}${fullWidthMobile ? ' btn--full-mobile' : ''}${className ? ` ${className}` : ''}`

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={18} aria-hidden="true" className="btn__icon" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}

export default Button
