'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogHero from '@/components/sections/blog/BlogHero'
import BlogGrid from '@/components/sections/blog/BlogGrid'
import BlogNewsletter from '@/components/sections/blog/BlogNewsletter'
import PartnerCTA from '@/components/sections/PartnerCTA'

export default function BlogPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[38px]">
        <Navbar />
        <main>
          <BlogHero />
          <BlogNewsletter />
          <BlogGrid />
          <PartnerCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
