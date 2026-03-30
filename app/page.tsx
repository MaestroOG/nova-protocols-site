'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import Metrics from '@/components/sections/Metrics'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import PartnerCTA from '@/components/sections/PartnerCTA'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      {/* Offset main content so it sits below the fixed nav + announcement bar */}
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Metrics />
          <About />
          <HowItWorks />
          <Pricing />
          <CaseStudies />
          <Testimonials />
          <PartnerCTA />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
