'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import IncidentResponse from '@/components/sections/incident-response/IncidentResponse'

export default function IncidentResponsePage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[104px] max-sm:mt-[128px]">
        <Navbar />
        <main id="main-content">
          <IncidentResponse />
        </main>
        <Footer />
      </div>
    </>
  )
}
