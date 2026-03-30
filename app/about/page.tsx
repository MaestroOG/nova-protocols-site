'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import AboutHero from '@/components/sections/about/AboutHero'
import Mission from '@/components/sections/about/Mission'
import Story from '@/components/sections/about/Story'
import Values from '@/components/sections/about/Values'
import Team from '@/components/sections/about/Team'
import Difference from '@/components/sections/about/Difference'
import Certifications from '@/components/sections/about/Certifications'
import AboutMetrics from '@/components/sections/about/AboutMetrics'
import PartnerCTA from '@/components/sections/PartnerCTA'

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <AboutHero />
          <Mission />
          <AboutMetrics />
          <Story />
          <Values />
          <Team />
          <Difference />
          <Certifications />
          <PartnerCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
