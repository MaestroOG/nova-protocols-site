'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const devDropLinks = [
  { icon: '🌐', label: 'Web Development', href: '/services#web-dev' },
  { icon: '🛍️', label: 'Shopify Development', href: '/services#shopify' },
  { icon: '⚡', label: 'Webflow Development', href: '/services#web-dev' },
  { icon: '🎯', label: 'Landing Pages', href: '/services#web-dev' },
  { icon: '🔧', label: 'Technical SEO', href: '/services#seo' },
  { icon: '📝', label: 'On-Page SEO', href: '/services#seo' },
  { icon: '🔗', label: 'Link Building', href: '/services#seo' },
  { icon: '📍', label: 'Local SEO', href: '/services#seo' },
]

const mktDropLinks = [
  { icon: '📢', label: 'Meta Ads', href: '/services#paid-ads' },
  { icon: '🔍', label: 'Google Ads', href: '/services#paid-ads' },
  { icon: '📱', label: 'Social Media', href: '/services#social' },
  { icon: '📊', label: 'Paid Ads Strategy', href: '/services#paid-ads' },
  { icon: '📂', label: 'Case Studies', href: '/cases' },
  { icon: '📰', label: 'Blog', href: '/blog' },
  { icon: '💰', label: 'Pricing', href: '/pricing' },
]

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/for-agencies', label: 'For Agencies' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/cases', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
]

const mobileServiceLinks = [
  { href: '/services#web-dev', label: 'Web Development' },
  { href: '/services#shopify', label: 'Shopify' },
  { href: '/services#seo', label: 'SEO' },
  { href: '/services#paid-ads', label: 'Paid Ads' },
  { href: '/services#social', label: 'Social Media' },
]

const mobileCompanyLinks = [
  { href: '/cases', label: 'Case Studies' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMob = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMob = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  /** Smooth-scroll when already on the right page; otherwise navigate */
  const navigate = (href: string) => {
    closeMob()
    const [path, hash] = href.split('#')
    if ((path === '' || path === '/') && pathname === '/' && hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  const isActive = (href: string) => {
    const path = href.split('#')[0]
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const linkCls = (href: string) =>
    `text-[13px] font-medium px-[14px] py-[7px] rounded-md transition-colors ${isActive(href)
      ? 'text-cyan bg-[rgba(108,54,122,0.14)]'
      : 'text-np-text-muted hover:text-np-text hover:bg-white/[0.04]'
    }`

  return (
    <>
      {/* ─── Desktop nav ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-14 h-16 border-b bg-[rgba(6,8,15,0.9)] backdrop-blur-[24px] saturate-150 transition-[border-color] duration-300 max-xl:px-7 ${scrolled ? 'border-rule-h' : 'border-rule'}`}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-[10px] font-head font-extrabold text-[17px] text-white tracking-[-0.5px] flex-shrink-0">
          <div className="w-7 h-7 border-[1.5px] border-cyan rounded-[6px] flex items-center justify-center">
            <span className="font-mono text-[8px] font-medium text-cyan tracking-[0.5px]">NP</span>
          </div>
          Nova Protocols
        </a>

        {/* Center links */}
        <div className="hidden xl:flex items-center gap-[2px]">
          <a href="/" className={linkCls('/')}>Home</a>
          <a href="/about" className={linkCls('/about')}>About</a>

          {/* Services dropdown */}
          <div className="drop-parent relative">
            <a href="/services" className={`flex items-center gap-1 ${linkCls('/services')}`}>
              Services
              <span className="arr text-[9px] transition-transform duration-200">▾</span>
            </a>
            <div
              className="drop absolute top-[calc(100%+10px)] left-0 bg-ink-2 border border-rule-h rounded-[12px] p-[6px] min-w-[480px] grid grid-cols-2 opacity-0 invisible translate-y-[-8px] shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
              style={{ transition: 'opacity 0.2s, visibility 0.2s, transform 0.2s cubic-bezier(0.22,1,0.36,1)' }}
            >
              <div className="p-[6px]">
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase px-[10px] py-[6px]">Development</div>
                {devDropLinks.slice(0, 4).map((l) => (
                  <a key={l.label} href={l.href} className="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[7px] text-[13px] text-np-text-muted hover:text-np-text hover:bg-[rgba(108,54,122,0.09)] transition-all">
                    <span className="w-4 text-[13px]">{l.icon}</span>{l.label}
                  </a>
                ))}
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase px-[10px] py-[6px] mt-2">SEO</div>
                {devDropLinks.slice(4).map((l) => (
                  <a key={l.label} href={l.href} className="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[7px] text-[13px] text-np-text-muted hover:text-np-text hover:bg-[rgba(108,54,122,0.09)] transition-all">
                    <span className="w-4 text-[13px]">{l.icon}</span>{l.label}
                  </a>
                ))}
              </div>
              <div className="p-[6px] border-l border-rule">
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase px-[10px] py-[6px]">Marketing</div>
                {mktDropLinks.slice(0, 4).map((l) => (
                  <a key={l.label} href={l.href} className="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[7px] text-[13px] text-np-text-muted hover:text-np-text hover:bg-[rgba(108,54,122,0.09)] transition-all">
                    <span className="w-4 text-[13px]">{l.icon}</span>{l.label}
                  </a>
                ))}
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase px-[10px] py-[6px] mt-2">Resources</div>
                {mktDropLinks.slice(4).map((l) => (
                  <a key={l.label} href={l.href} className="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[7px] text-[13px] text-np-text-muted hover:text-np-text hover:bg-[rgba(108,54,122,0.09)] transition-all">
                    <span className="w-4 text-[13px]">{l.icon}</span>{l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/for-agencies" className={linkCls('/for-agencies')}>For Agencies</a>
          <a href="/how-it-works" className={linkCls('/how-it-works')}>How It Works</a>
          <a href="/cases" className={linkCls('/cases')}>Case Studies</a>
          <a href="/contact" className={linkCls('/contact')}>Contact</a>
        </div>

        {/* Right CTAs */}
        <div className="hidden xl:flex items-center gap-[10px]">
          {/* <a
            href="/contact"
            className={`text-[13px] font-medium px-[18px] py-2 rounded-md border transition-all ${pathname === '/contact'
              ? 'border-cyan text-cyan bg-cyan-dim'
              : 'border-rule-h text-np-text-muted hover:border-cyan-border hover:text-cyan hover:bg-cyan-dim'
              }`}
          >
            Free Audit
          </a> */}
          <a
            href="https://partner.novaprotocols.com" target='_blank'
            rel='noopener noreferrer'
            className="text-[13px] font-bold text-ink px-5 py-2 bg-cyan rounded-md tracking-[0.2px] hover:bg-[#9B4DAB] hover:shadow-[0_0_24px_rgba(108,54,122,0.50)] hover:-translate-y-[1px] transition-all"
          >
            Become a Partner
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="xl:hidden flex flex-col gap-[5px] p-2 cursor-pointer" onClick={toggleMob} aria-label="Toggle navigation">
          <span className="w-5 h-[1.5px] bg-np-text rounded block transition-all duration-300" style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
          <span className="w-5 h-[1.5px] bg-np-text rounded block transition-all duration-300" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="w-5 h-[1.5px] bg-np-text rounded block transition-all duration-300" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
        </button>
      </nav>

      {/* ─── Mobile overlay ─── */}
      <div
        className={`xl:hidden fixed inset-0 bg-ink z-[999] px-8 pt-20 pb-8 overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)' }}
      >
        {/* Primary */}
        {[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/for-agencies', label: 'For Agencies' },
          { href: '/how-it-works', label: 'How It Works' },
        ].map((l) => (
          <button
            key={l.href}
            onClick={() => navigate(l.href)}
            className={`w-full text-left py-4 text-[18px] font-medium border-b border-rule transition-colors ${isActive(l.href) ? 'text-cyan' : 'text-np-text-muted hover:text-cyan'}`}
          >
            {l.label}
          </button>
        ))}

        <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase py-4">Services</div>
        {mobileServiceLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMob}
            className="block py-4 text-[18px] font-medium text-np-text-muted border-b border-rule hover:text-cyan transition-colors">
            {l.label}
          </a>
        ))}

        <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase py-4">Company</div>
        {mobileCompanyLinks.map((l) => (
          <button
            key={l.href}
            onClick={() => navigate(l.href)}
            className={`w-full text-left py-4 text-[18px] font-medium border-b border-rule transition-colors ${isActive(l.href) ? 'text-cyan' : 'text-np-text-muted hover:text-cyan'}`}
          >
            {l.label}
          </button>
        ))}

        <div className="flex flex-col gap-3 mt-8">
          {/* {pathname === '/' && (
            <a href="#contact" onClick={closeMob}
              className="w-full text-[14.5px] font-bold py-[14px] px-8 bg-cyan text-ink rounded-lg flex items-center justify-center gap-2 hover:bg-[#9B4DAB] transition-all">
              Free Audit →
            </a>
          )} */}
          <a href="https://partner.novaprotocols.com/" target='_blank' rel='noopener noreferrer' onClick={closeMob}
            className="w-full text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg flex items-center justify-center gap-2 hover:border-cyan-border hover:text-np-text transition-all">
            Become a Partner
          </a>
        </div>
      </div>
    </>
  )
}
