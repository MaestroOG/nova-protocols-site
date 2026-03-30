import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - Partner Onboarding Process | Nova Protocols',
  description:
    'Discover how Nova Protocols works: apply, onboard in 48 hours, submit briefs, receive deliverables, and forward branded reports to clients. Live within a week.',
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
