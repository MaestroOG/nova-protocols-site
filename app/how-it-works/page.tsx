'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerCTA from '@/components/sections/PartnerCTA'

import HowHero       from '@/components/sections/how-it-works/HowHero'
import ProcessSteps  from '@/components/sections/how-it-works/ProcessSteps'
import ThePortal     from '@/components/sections/how-it-works/ThePortal'
import SLAsGuarantees from '@/components/sections/how-it-works/SLAsGuarantees'
import HowFAQ        from '@/components/sections/how-it-works/HowFAQ'

export default function HowItWorksPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <HowHero />
          <ProcessSteps />
          <ThePortal />
          <SLAsGuarantees />
          <HowFAQ />
          <PartnerCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
