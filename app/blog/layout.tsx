import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Agency Growth & White Label Strategies | Nova Protocols',
  description:
    'Tactical guides, white label playbooks, and growth strategies for digital agencies. SEO, Paid Ads, Shopify, and agency scaling advice from Nova Protocols.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
