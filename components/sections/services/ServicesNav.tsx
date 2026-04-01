'use client'

import { BarChart, Globe, Megaphone, ShoppingBag, Smartphone } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'web-dev', icon: <Globe />, label: 'Web Dev' },
  { id: 'shopify', icon: <ShoppingBag />, label: 'Shopify' },
  { id: 'seo', icon: <BarChart />, label: 'SEO' },
  { id: 'paid-ads', icon: <Megaphone />, label: 'Paid Ads' },
  { id: 'social', icon: <Smartphone />, label: 'Social' },
]

export default function ServicesNav() {
  const [active, setActive] = useState('web-dev')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-16 z-[900] bg-ink-2 border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-[11px] tracking-[1px] uppercase whitespace-nowrap border-b-2 transition-all duration-200 flex-shrink-0 ${active === item.id
                ? 'border-cyan text-cyan'
                : 'border-transparent text-np-text-dim hover:text-np-text-muted'
                }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
          <div className="ml-auto flex-shrink-0 pl-6">
            <a href="/contact" className="font-mono text-[10px] text-white bg-cyan px-4 py-[7px] rounded-[6px] tracking-[0.5px] uppercase font-bold hover:bg-[#9B4DAB] transition-colors whitespace-nowrap">
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
