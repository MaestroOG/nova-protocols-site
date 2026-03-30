'use client'

import { useState } from 'react'

const allCases = [
  {
    id: 1, emoji: '🛒', tag: 'Shopify + SEO', category: 'shopify',
    title: "Fashion Brand 3x'd Organic Revenue",
    agency: 'UK Boutique Agency',
    duration: '8-month engagement',
    desc: 'A UK boutique agency resold our Shopify + SEO stack to a mid-size fashion retailer. We handled technical SEO, link building, and site performance — the agency took credit for everything.',
    challenge: 'The client had low organic visibility, a slow Shopify store, and a thin backlink profile. The agency needed a scalable fulfilment partner with ecommerce SEO depth.',
    solution: 'We rebuilt site architecture for crawlability, migrated to a new Shopify theme with 95+ PageSpeed, and ran a targeted link-building campaign across fashion and lifestyle publications.',
    stats: [{ n: '312%', l: 'Organic Growth' }, { n: '2.1x', l: 'Revenue Lift' }, { n: '58%', l: 'CPA Drop' }],
    chips: ['Shopify Dev', 'Technical SEO', 'Link Building', 'CRO'],
    topStyle: undefined,
  },
  {
    id: 2, emoji: '🏥', tag: 'Local SEO + Web', category: 'seo',
    title: 'Healthcare Group Dominates Local Search',
    agency: 'US Healthcare Marketing Agency',
    duration: '12-month retainer',
    desc: 'A US healthcare agency used our Local SEO and custom web development to rank 12 clinic locations in the top 3 of Google Maps and page one organic, tripling inbound lead volume.',
    challenge: 'The agency\'s healthcare client had 12 locations with inconsistent NAP data, low GMB optimisation, and competing internal pages cannibalising each other.',
    solution: 'We ran a full local SEO programme: citation cleanup, GMB optimisation, location page redesigns, and geo-targeted content. Each location tracked independently with a branded dashboard.',
    stats: [{ n: '94%', l: 'Rank #1 KWs' }, { n: '4.2x', l: 'Lead Volume' }, { n: '12', l: 'Locations' }],
    chips: ['Local SEO', 'GMB Optimisation', 'Web Dev', 'Reporting'],
    topStyle: { background: 'var(--ink4)' },
  },
  {
    id: 3, emoji: '📊', tag: 'Meta Ads + Funnel', category: 'paid-ads',
    title: 'SaaS Startup Cuts CAC by 61%',
    agency: 'Australian Digital Agency',
    duration: '90-day sprint',
    desc: 'An Australian agency white-labeled our paid ads team to run full-funnel Meta campaigns for a B2B SaaS client — taking them from £98 CAC to £38 in 90 days.',
    challenge: 'The agency had a SaaS client burning budget on broad Meta campaigns with no funnel structure. ROAS was 1.4x and the agency needed a specialist to fix it without losing the client.',
    solution: 'We built a three-stage funnel: top-of-funnel video for awareness, retargeting for demo signups, and a winback sequence for churned trials. Replaced broad targeting with lookalike and interest stacks.',
    stats: [{ n: '61%', l: 'CAC Reduction' }, { n: '8.4x', l: 'ROAS' }, { n: '90d', l: 'Time to Results' }],
    chips: ['Meta Ads', 'Funnel Strategy', 'Creative Brief', 'Tracking'],
    topStyle: { background: 'rgba(108,54,122,0.07)' },
  },
  {
    id: 4, emoji: '🏪', tag: 'Web Dev + Paid Ads', category: 'web',
    title: 'Restaurant Chain Drives 3.8x Booking Growth',
    agency: 'London Creative Agency',
    duration: '6-month project',
    desc: 'A London creative agency hired us to rebuild a 14-location restaurant chain\'s web presence and run paid acquisition — all white labelled under their studio name.',
    challenge: 'An outdated multi-site setup with no booking system integration, fragmented Google Ads, and near-zero mobile conversion rate.',
    solution: 'We rebuilt on Webflow with a centralised CMS, OpenTable integration, and geo-aware landing pages per location. Google Ads was restructured by location cluster with dynamic ad copy.',
    stats: [{ n: '3.8x', l: 'Booking Growth' }, { n: '67%', l: 'Mobile CVR Up' }, { n: '14', l: 'Locations' }],
    chips: ['Webflow', 'Google Ads', 'CMS Build', 'Geo Targeting'],
    topStyle: undefined,
  },
  {
    id: 5, emoji: '🎓', tag: 'SEO + Content', category: 'seo',
    title: 'EdTech Platform Reaches 200K Monthly Visitors',
    agency: 'North American Growth Agency',
    duration: '18-month retainer',
    desc: 'We built and executed a content-led SEO programme for an EdTech platform, growing them from 12K to 200K monthly visitors under a North American agency\'s brand.',
    challenge: 'Low domain authority, thin course-page content, and zero blog presence meant the platform was invisible in search despite a strong product.',
    solution: 'Topical authority strategy across 8 subject clusters, 120+ pieces of long-form content, structured data implementation for course schema, and 300+ editorial links over 18 months.',
    stats: [{ n: '200K', l: 'Monthly Visitors' }, { n: '16x', l: 'Organic Growth' }, { n: '300+', l: 'Links Built' }],
    chips: ['Content SEO', 'Link Building', 'Schema Markup', 'Authority Building'],
    topStyle: { background: 'rgba(240,165,0,0.04)' },
  },
  {
    id: 6, emoji: '🏋️', tag: 'Social + Paid Ads', category: 'social',
    title: 'Fitness Brand Grows to 80K Instagram Followers',
    agency: 'Dubai Social-First Agency',
    duration: '10-month retainer',
    desc: 'A Dubai-based social agency used our Social Media Management and Meta Ads teams to grow a regional fitness brand\'s audience and online sales — 100% under agency branding.',
    challenge: 'The fitness brand had strong offline presence but near-zero social engagement, inconsistent content, and a failing Meta Ads account that had burned through budget.',
    solution: 'Full social takeover: content strategy, 16 designed posts per month, reel production briefs, community management, and a rebuilt Meta Ads structure with creator-style UGC creative.',
    stats: [{ n: '80K', l: 'IG Followers' }, { n: '4.1x', l: 'ROAS' }, { n: '+340%', l: 'Engagement' }],
    chips: ['Social Media', 'Meta Ads', 'Content Creation', 'Community Mgmt'],
    topStyle: { background: 'rgba(108,54,122,0.05)' },
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'seo', label: 'SEO' },
  { key: 'web', label: 'Web Dev' },
  { key: 'shopify', label: 'Shopify' },
  { key: 'paid-ads', label: 'Paid Ads' },
  { key: 'social', label: 'Social' },
]

export default function CasesGrid() {
  const [active, setActive] = useState('all')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = active === 'all' ? allCases : allCases.filter((c) => c.category === active)

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
          <span className="ml-auto font-mono text-[10px] text-np-text-dim tracking-[1px]">
            {filtered.length} case{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {filtered.map((c, i) => (
            <div key={c.id} className="flex flex-col fu" data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : undefined}>
              {/* Card */}
              <div
                className="cc bg-ink border border-rule rounded-[14px] overflow-hidden cursor-pointer hover:border-cyan-border hover:-translate-y-[4px] transition-all duration-[350ms] flex flex-col flex-1"
                onClick={() => setExpanded(expanded === c.id ? null : c.id)}
              >
                {/* Image */}
                <div className="h-44 flex items-center justify-center text-[48px] bg-ink-3 border-b border-rule relative" style={c.topStyle}>
                  {c.emoji}
                  <div className="absolute top-[14px] left-[14px] font-mono text-[9px] tracking-[1px] uppercase bg-cyan-dim text-cyan border border-cyan-border px-[10px] py-[3px] rounded-[4px]">
                    {c.tag}
                  </div>
                  <div className="absolute top-[14px] right-[14px] font-mono text-[9px] text-np-text-dim border border-rule px-[8px] py-[3px] rounded-[4px] bg-ink/60">
                    {c.agency}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-head text-[17px] font-bold text-white mb-2 leading-[1.3]">{c.title}</div>
                  <div className="text-[13px] text-np-text-muted leading-[1.65] mb-5 flex-1">{c.desc}</div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-[5px] mb-5">
                    {c.chips.map((ch) => (
                      <span key={ch} className="font-mono text-[9px] border border-rule text-np-text-dim px-[8px] py-[3px] rounded-[3px] tracking-[0.3px]">{ch}</span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex border-t border-rule pt-4">
                    {c.stats.map((s, si) => (
                      <div key={s.l} className={`flex-1 text-center ${si > 0 ? 'border-l border-rule' : ''}`}>
                        <div className="font-head text-[22px] font-extrabold text-cyan tracking-[-1px]">{s.n}</div>
                        <div className="text-[10px] text-np-text-dim mt-[2px] font-mono tracking-[0.5px]">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button className="mt-4 flex items-center gap-2 font-mono text-[10px] text-np-text-dim hover:text-cyan transition-colors">
                    <span className={`transition-transform duration-200 ${expanded === c.id ? 'rotate-180' : ''}`}>▾</span>
                    {expanded === c.id ? 'Hide details' : 'View full case study'}
                  </button>
                </div>
              </div>

              {/* Expanded detail panel */}
              {expanded === c.id && (
                <div className="mt-2 border border-cyan-border rounded-[14px] overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(108,54,122,0.07), var(--ink2))' }}>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-3">The Challenge</div>
                        <p className="text-[13.5px] text-np-text-muted leading-[1.7]">{c.challenge}</p>
                      </div>
                      <div className="border-t border-rule pt-5">
                        <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-3">Our Solution</div>
                        <p className="text-[13.5px] text-np-text-muted leading-[1.7]">{c.solution}</p>
                      </div>
                      <div className="border-t border-rule pt-5 flex items-center justify-between flex-wrap gap-3">
                        <div className="font-mono text-[10px] text-np-text-dim">{c.duration}</div>
                        <a href="/contact" className="font-mono text-[10px] text-ink bg-cyan px-4 py-2 rounded-[6px] font-bold hover:bg-[#9B4DAB] transition-colors">
                          Discuss a similar project →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
