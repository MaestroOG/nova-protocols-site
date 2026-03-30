'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerCTA from '@/components/sections/PartnerCTA'
import Testimonials from '@/components/sections/Testimonials'
import CasesHero from '@/components/sections/cases/CasesHero'
import CasesGrid from '@/components/sections/cases/CasesGrid'

export default function CasesPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <CasesHero />
          <CasesGrid />
          <Testimonials />
          <PartnerCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
