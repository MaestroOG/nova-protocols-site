import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Nova Protocols',
  description:
    'Real results from real agency partnerships. Explore how Nova Protocols has helped agencies deliver 312% organic growth, 8.4x ROAS, and more — all under their brand.',
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
