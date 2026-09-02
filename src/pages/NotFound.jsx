import { useEffect } from 'react'
import Button from '../components/Button.jsx'

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Need Technosoft Pvt. Ltd.'
  }, [])

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code">404</p>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
