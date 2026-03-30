'use client'

import { useState } from 'react'

const allPosts = [
  {
    id: 1, emoji: '🔍', category: 'seo', cat: 'White Label SEO',
    title: 'How to Sell SEO Without Doing the Work Yourself',
    desc: 'A practical guide to packaging, pricing, and delivering white label SEO under your brand. Real numbers, real margins.',
    read: '8 min read', date: 'March 2025', featured: true,
  },
  {
    id: 2, emoji: '📈', category: 'growth', cat: 'Agency Growth',
    title: 'From 10 to 50 Clients: A White Label Playbook',
    desc: 'The exact process three agency owners used to 5x their client count without the headcount.',
    read: '12 min', date: 'Feb 2025', featured: false,
  },
  {
    id: 3, emoji: '🎯', category: 'paid-ads', cat: 'Paid Ads Strategies',
    title: 'Why Your Agency Should Be Offering Meta Ads in 2025',
    desc: "The paid social opportunity is bigger than ever — and agencies that don't offer it are leaving money behind.",
    read: '6 min', date: 'Jan 2025', featured: false,
  },
  {
    id: 4, emoji: '🛍️', category: 'ecommerce', cat: 'Ecommerce Growth',
    title: 'The Complete Guide to White Label Shopify Development',
    desc: 'Everything an agency needs to know about reselling Shopify development services — pricing, project management, and positioning.',
    read: '10 min', date: 'Dec 2024', featured: false,
  },
  {
    id: 5, emoji: '📊', category: 'seo', cat: 'White Label SEO',
    title: 'How to Present SEO Reports Your Clients Actually Understand',
    desc: 'A framework for turning complex SEO data into client-ready narratives. Includes our white label report template walkthrough.',
    read: '7 min', date: 'Nov 2024', featured: false,
  },
  {
    id: 6, emoji: '🤝', category: 'growth', cat: 'Agency Growth',
    title: 'The NDA Question: What Agencies Need in a White Label Contract',
    desc: 'Legal and operational essentials for protecting your agency and your clients when working with white label partners.',
    read: '5 min', date: 'Oct 2024', featured: false,
  },
  {
    id: 7, emoji: '📱', category: 'social', cat: 'Social Media',
    title: 'White Labelling Social Media: What Your Clients Will and Won\'t Notice',
    desc: 'How to manage expectations, brand voice, and deliverables when outsourcing social media — without losing creative control.',
    read: '8 min', date: 'Sep 2024', featured: false,
  },
  {
    id: 8, emoji: '⚡', category: 'ecommerce', cat: 'Ecommerce Growth',
    title: 'Page Speed as a Revenue Driver: What Shopify Agencies Should Know',
    desc: 'A breakdown of how Core Web Vitals improvements directly affect conversion rates — and how to resell speed optimisation.',
    read: '9 min', date: 'Aug 2024', featured: false,
  },
  {
    id: 9, emoji: '🔒', category: 'growth', cat: 'Client Fulfilment',
    title: 'How to Onboard a White Label Partner Without Your Clients Finding Out',
    desc: 'A step-by-step operational guide to keeping your white label partnerships completely invisible to your clients.',
    read: '6 min', date: 'Jul 2024', featured: false,
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'seo', label: 'SEO' },
  { key: 'growth', label: 'Agency Growth' },
  { key: 'paid-ads', label: 'Paid Ads' },
  { key: 'ecommerce', label: 'Ecommerce' },
  { key: 'social', label: 'Social Media' },
]

export default function BlogGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? allPosts : allPosts.filter((p) => p.category === active)
  const [main, ...rest] = filtered

  return (
    <section className="py-[100px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-14 flex-wrap fu">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono text-[10px] tracking-[1px] uppercase px-4 py-[7px] rounded-[6px] border transition-all ${
                active === f.key
                  ? 'bg-cyan text-ink border-cyan font-bold'
                  : 'text-np-text-dim border-rule hover:border-rule-h hover:text-np-text-muted'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto font-mono text-[10px] text-np-text-dim">{filtered.length} articles</span>
        </div>

        {/* Main featured post */}
        {main && (
          <div className="mb-8 fu">
            <div className="bg-ink-2 border border-rule rounded-[14px] overflow-hidden cursor-pointer hover:border-cyan-border hover:-translate-y-[3px] transition-all duration-300 group">
              <div className="grid grid-cols-[1fr_2fr] max-xl:grid-cols-1">
                <div className="h-full min-h-[200px] flex items-center justify-center text-[64px] bg-ink-3 border-r border-rule max-xl:border-r-0 max-xl:border-b max-xl:h-[180px]">
                  {main.emoji}
                </div>
                <div className="p-8">
                  <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-3">{main.cat}</div>
                  <div className="font-head text-[24px] font-bold text-white mb-3 leading-[1.25] group-hover:text-cyan transition-colors">{main.title}</div>
                  <div className="text-[14px] text-np-text-muted leading-[1.65] mb-5">{main.desc}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 font-mono text-[11px] text-np-text-dim">
                      <span>{main.read}</span>
                      <span>{main.date}</span>
                    </div>
                    <span className="font-mono text-[11px] text-cyan border border-cyan-border bg-cyan-dim px-3 py-[4px] rounded-[4px]">Read Article →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining posts grid */}
        <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {rest.map((post, i) => (
            <div
              key={post.id}
              className="bg-ink-2 border border-rule rounded-[14px] overflow-hidden cursor-pointer hover:border-cyan-border hover:-translate-y-[3px] transition-all duration-300 flex flex-col group fu"
              data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : undefined}
            >
              <div className="h-[110px] flex items-center justify-center text-[36px] bg-ink-3 border-b border-rule">
                {post.emoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-3">{post.cat}</div>
                <div className="font-head text-[17px] font-bold text-white mb-3 leading-[1.3] flex-1 group-hover:text-cyan transition-colors">{post.title}</div>
                <div className="text-[13px] text-np-text-muted leading-[1.65] mb-4">{post.desc}</div>
                <div className="flex gap-4 font-mono text-[11px] text-np-text-dim border-t border-rule pt-4">
                  <span>{post.read}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="flex justify-center mt-14 fu">
          <button className="text-[14px] font-medium py-[14px] px-10 border border-rule-h text-np-text-muted rounded-lg hover:border-cyan-border hover:text-np-text transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}
