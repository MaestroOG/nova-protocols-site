'use client'

import { useState } from 'react'
import SectionPre from '@/components/ui/SectionPre'

export default function BlogHero() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative pt-16 overflow-hidden border-b border-rule">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 70% at 90% 10%, rgba(108,54,122,0.09) 0%, transparent 55%)',
        }}
      />
      <div className="absolute top-0 bottom-0 left-[33%] w-px bg-rule pointer-events-none opacity-40" />

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-12 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span>›</span>
          <span className="text-cyan">Blog</span>
        </div>

        <div className="grid grid-cols-[1fr_400px] gap-16 items-start max-xl:grid-cols-1 max-xl:gap-10">
          <div>
            <SectionPre text="Agency Growth Blog" className="fu in" />
            <h1
              className="font-head font-black leading-[0.95] tracking-[-3px] text-white mb-6 fu in"
              style={{ fontSize: 'clamp(40px,5.5vw,70px)' }}
              data-d="1"
            >
              Scaling your agency
              <br />
              <em className="hero-outline">smarter,</em>{' '}
              <span className="text-cyan">not harder.</span>
            </h1>
            <p className="text-[16px] text-np-text-muted leading-[1.75] max-w-[480px] mb-8 fu in" data-d="2">
              Tactical guides, white label playbooks, and growth strategies for digital agencies — written by people who&apos;ve been in the trenches.
            </p>

            {/* Search bar */}
            <div className="relative max-w-[420px] fu in" data-d="3">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-np-text-dim text-[14px]">🔍</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-ink-2 border border-rule rounded-lg pl-10 pr-4 py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim"
              />
            </div>
          </div>

          {/* Featured post card */}
          <div className="fu in" data-d="2">
            <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-4">Featured</div>
            <div className="bg-ink-2 border border-cyan-border rounded-[14px] overflow-hidden group cursor-pointer hover:-translate-y-[3px] transition-all duration-300"
                 style={{ background: 'linear-gradient(135deg, rgba(108,54,122,0.08), var(--ink2))' }}>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
              <div className="h-[140px] flex items-center justify-center text-[52px] bg-ink-3 border-b border-rule">🔍</div>
              <div className="p-6">
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-3">White Label SEO</div>
                <div className="font-head text-[18px] font-bold text-white mb-3 leading-[1.3] group-hover:text-cyan transition-colors">
                  How to Sell SEO Without Doing the Work Yourself
                </div>
                <div className="text-[13px] text-np-text-muted leading-[1.65] mb-4">
                  A practical guide to packaging, pricing, and delivering white label SEO under your brand. Real numbers, real margins.
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 font-mono text-[11px] text-np-text-dim">
                    <span>8 min read</span>
                    <span>March 2025</span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan">Read →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
