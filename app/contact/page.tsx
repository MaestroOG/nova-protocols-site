'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactBody from '@/components/sections/contact/ContactBody'

export default function ContactPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <ContactHero />
          <ContactBody />
        </main>
        <Footer />
      </div>
    </>
  )
}
