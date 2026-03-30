import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Free Agency Audit — Nova Protocols',
  description:
    'Get a free agency audit, request pricing, or book a 30-minute discovery call with Nova Protocols. We respond within 24 hours and never hard-sell.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
