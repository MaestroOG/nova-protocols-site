import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Incident Response Guidance - Nova Protocols',
  description:
    'Facing a cyber incident? Find practical first steps, response guidance, and a direct way to contact the Nova Protocols team.',
}

export default function IncidentResponseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
