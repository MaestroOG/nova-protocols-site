import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Agencies - White Label Delivery Partner | Nova Protocols',
  description:
    'Nova Protocols is the white label delivery partner built exclusively for digital agencies. Scale without hiring, deliver more services, keep 40–60% margins — all under your brand.',
}

export default function ForAgenciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
