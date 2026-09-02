export const services = [
  {
    id: 'web-development',
    number: '01',
    icon: 'Code2',
    title: 'Web Development',
    short: 'Responsive, scalable and user-focused websites built around your business goals.',
    description:
      'We design and build websites that load quickly, work across devices and are straightforward to maintain. From marketing sites to internal tools, every build starts with how people will actually use it.',
    capabilities: [
      'Custom website design and development',
      'Content-managed and static sites',
      'Performance and SEO fundamentals',
      'Ongoing updates and support',
    ],
  },
  {
    id: 'software-development',
    number: '02',
    icon: 'Terminal',
    title: 'Software Development',
    short: 'Custom software that fits how your business already operates, not the other way around.',
    description:
      'When off-the-shelf tools fall short, we build software tailored to your workflow, from internal dashboards to customer-facing systems, planned and built with your team.',
    capabilities: [
      'Custom business applications',
      'System integrations and APIs',
      'Legacy system modernization',
      'Cloud-based deployment',
    ],
  },
  {
    id: 'mobile-development',
    number: '03',
    icon: 'Smartphone',
    title: 'Mobile Application Development',
    short: 'Native-feeling apps for iOS and Android that stay simple to use and easy to maintain.',
    description:
      'We build mobile apps that focus on the core tasks people need to complete, with clean interfaces and reliable performance across devices.',
    capabilities: [
      'Cross-platform app development',
      'UI built for touch and mobile flows',
      'API and backend integration',
      'App store submission support',
    ],
  },
  {
    id: 'ui-ux-design',
    number: '04',
    icon: 'Figma',
    title: 'UI/UX Design',
    short: 'Interfaces designed around real user behaviour, not just visual trends.',
    description:
      'Good design reduces friction. We research how people will use a product, then design interfaces that are clear, consistent and easy to navigate.',
    capabilities: [
      'User research and wireframing',
      'Interface and interaction design',
      'Design systems and component libraries',
      'Usability testing',
    ],
  },
  {
    id: 'ecommerce-solutions',
    number: '05',
    icon: 'ShoppingCart',
    title: 'E-commerce Solutions',
    short: 'Online stores built to handle real transactions, inventory and growth.',
    description:
      'We build e-commerce platforms that make it easy for customers to browse and buy, and just as easy for your team to manage products, orders and payments.',
    capabilities: [
      'Storefront design and development',
      'Payment gateway integration',
      'Inventory and order management',
      'Store performance optimisation',
    ],
  },
  {
    id: 'digital-solutions',
    number: '06',
    icon: 'LayoutGrid',
    title: 'Digital Solutions',
    short: 'Practical, connected systems that solve a specific operational problem.',
    description:
      'Sometimes the need is broader than one product, calling for a combination of tools, automation and integrations working together. We scope and build these as a connected system.',
    capabilities: [
      'Process automation',
      'Workflow and reporting tools',
      'Third-party service integration',
      'Digital transformation planning',
    ],
  },
  {
    id: 'maintenance-support',
    number: '07',
    icon: 'LifeBuoy',
    title: 'Maintenance & Support',
    short: 'Ongoing care so your software keeps working as your business grows.',
    description:
      'Launch is the start, not the finish. We provide ongoing monitoring, updates and support so your systems stay secure, current and dependable.',
    capabilities: [
      'Bug fixes and updates',
      'Security patching',
      'Performance monitoring',
      'Feature enhancements over time',
    ],
  },
]

// Shorter list used on the homepage preview (first six services)
export const homeServices = services.slice(0, 6)

export default services
