// Minimal refined technology category icons.
// Thin-line outline marks with a single consistent stroke weight and color,
// used as small accents on the Technologies page — never as large cartoony
// glyphs.

const outlineIconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CodeIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps} {...props}>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13 4-2 16" />
    </svg>
  )
}

export function ServerIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps} {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  )
}

export function DatabaseIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps} {...props}>
      <ellipse cx="12" cy="5.5" rx="8" ry="2.8" />
      <path d="M4 5.5V18.5c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8V5.5" />
      <path d="M4 12c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8" />
    </svg>
  )
}

export function MobileIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps} {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2.2" />
      <line x1="10.5" y1="5.6" x2="13.5" y2="5.6" />
      <line x1="10.8" y1="18.4" x2="13.2" y2="18.4" />
    </svg>
  )
}

export function CloudIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps} {...props}>
      <path d="M17.5 19H8.5a5.5 5.5 0 1 1 5.2-7.4A4.25 4.25 0 0 1 17.5 19Z" />
      <path d="m9.6 13-1.6 1.6 1.6 1.6" />
      <path d="m14.4 13 1.6 1.6-1.6 1.6" />
    </svg>
  )
}

export function DesignIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" {...outlineIconProps} {...props}>
      <path d="m14.5 4.5 5 5" />
      <path d="M4 20 20 4" />
      <path d="m4 20 4.5-1.5L19 8a2.3 2.3 0 1 0-3-3L5.5 15.5Z" />
    </svg>
  )
}
