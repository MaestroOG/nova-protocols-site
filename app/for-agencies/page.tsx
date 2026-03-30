'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerCTA from '@/components/sections/PartnerCTA'

import AgenciesHero       from '@/components/sections/for-agencies/AgenciesHero'
import TheCeiling         from '@/components/sections/for-agencies/TheCeiling'
import AgencyBenefits     from '@/components/sections/for-agencies/AgencyBenefits'
import WhoWeWorkWith      from '@/components/sections/for-agencies/WhoWeWorkWith'
import MarginCalc         from '@/components/sections/for-agencies/MarginCalc'
import AgencyTestimonials from '@/components/sections/for-agencies/AgencyTestimonials'
import AgencyFAQ          from '@/components/sections/for-agencies/AgencyFAQ'

export default function ForAgenciesPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <AgenciesHero />
          <TheCeiling />
          <AgencyBenefits />
          <WhoWeWorkWith />
          <MarginCalc />
          <AgencyTestimonials />
          <AgencyFAQ />
          <PartnerCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
