import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nova Protocols',
  description:
    'Learn how Nova Protocols collects, uses, and protects personal data on our website and in client engagements.',
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
