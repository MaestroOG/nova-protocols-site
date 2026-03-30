'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerCTA from '@/components/sections/PartnerCTA'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesNav from '@/components/sections/services/ServicesNav'
import ServiceDetails from '@/components/sections/services/ServiceDetails'

export default function ServicesPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <ServicesHero />
          <ServicesNav />
          <ServiceDetails />
          <PartnerCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
