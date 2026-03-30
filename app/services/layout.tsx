import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'White Label Services — Nova Protocols',
  description:
    'Full-stack white label services for agencies: Web Development, Shopify, SEO, Paid Advertising, and Social Media Marketing — all delivered 100% under your brand.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
