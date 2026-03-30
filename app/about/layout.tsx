import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Nova Protocols - The Invisible Delivery Engine for Agencies',
  description:
    'Learn about Nova Protocols - founded in 2019, built by agency owners, trusted by 200+ agencies in 18 countries. Discover our story, values, and the team behind the scenes.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}