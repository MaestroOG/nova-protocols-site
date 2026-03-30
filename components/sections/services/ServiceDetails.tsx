import SectionPre from '@/components/ui/SectionPre'

const services = [
  {
    id: 'web-dev',
    icon: '🌐',
    num: '01',
    label: 'Development',
    title: 'Web Development',
    headline: 'Custom-built websites your clients will brag about.',
    desc: 'From bespoke coded sites to WordPress and Webflow builds, we handle the full lifecycle — discovery, design system, development, QA, and handoff. Every project ships under your agency name.',
    chips: ['Custom Dev', 'WordPress', 'Webflow', 'Landing Pages', 'Speed Optimisation', 'Accessibility'],
    deliverables: [
      'Pixel-perfect responsive builds',
      'Performance scores 90+ on all Core Web Vitals',
      'Full CMS setup and content migration',
      'Device & browser QA report',
      'Branded handover documentation',
    ],
    turnaround: '5–14 days typical',
    accent: true,
    flip: false,
    visual: [
      { label: 'stack', value: 'Next.js / WP / Webflow' },
      { label: 'avg_score', value: '96 / 100' },
      { label: 'revisions', value: 'Unlimited' },
      { label: 'handoff', value: '< 24h' },
    ],
  },
  {
    id: 'shopify',
    icon: '🛍️',
    num: '02',
    label: 'Ecommerce',
    title: 'Shopify Development',
    headline: 'Stores that convert. At scale. Under your brand.',
    desc: 'We build, optimise, and grow Shopify stores end-to-end. Whether it\'s a greenfield build, a theme migration, or a conversion-rate push, our Shopify team handles it without your client ever knowing we exist.',
    chips: ['Store Builds', 'Theme Dev', 'Speed Opt', 'CRO', 'App Integration', 'Migration'],
    deliverables: [
      'Custom Shopify theme or section development',
      'App stack configuration and integration',
      'Page-speed and Core Web Vitals tuning',
      'Checkout flow CRO and A/B test setup',
      'White label progress reports',
    ],
    turnaround: '7–21 days typical',
    accent: false,
    flip: true,
    visual: [
      { label: 'platform', value: 'Shopify / Plus' },
      { label: 'avg_cvr_lift', value: '+28%' },
      { label: 'stores_built', value: '180+' },
      { label: 'nda', value: 'Always on' },
    ],
  },
  {
    id: 'seo',
    icon: '📈',
    num: '03',
    label: 'SEO',
    title: 'White Label SEO',
    headline: 'Real rankings. Branded dashboards. Zero footprint.',
    desc: 'Full-spectrum SEO delivered under your agency name — technical audits, on-page optimisation, link building, local SEO, and monthly branded reporting your clients can act on.',
    chips: ['Technical SEO', 'On-Page', 'Link Building', 'Local SEO', 'Ecommerce SEO', 'Content Strategy'],
    deliverables: [
      'Full site technical audit and fix plan',
      'On-page optimisation across priority pages',
      'Manual outreach link building',
      'Local citation building and GMB management',
      'Monthly white label ranking and traffic reports',
    ],
    turnaround: 'Ongoing monthly retainer',
    accent: true,
    flip: false,
    visual: [
      { label: 'avg_ranking_time', value: '90 days' },
      { label: 'links_built/mo', value: '8–20' },
      { label: 'reporting', value: 'Branded PDF' },
      { label: 'dashboards', value: 'White label' },
    ],
  },
  {
    id: 'paid-ads',
    icon: '📢',
    num: '04',
    label: 'Paid Media',
    title: 'Paid Advertising',
    headline: 'Full-funnel paid media your clients will see the ROI of.',
    desc: 'We run Meta, Google Search, Display, Shopping, and YouTube campaigns — complete with conversion tracking, creative, and branded reporting. Your clients get results; they think you built it.',
    chips: ['Meta Ads', 'Google Ads', 'YouTube', 'Display', 'Shopping', 'Funnel Strategy'],
    deliverables: [
      'Account audit and strategy document',
      'Ad creative (static, carousel, video brief)',
      'Conversion tracking and pixel setup',
      'Weekly performance pull and optimisation',
      'Monthly white label ad performance report',
    ],
    turnaround: 'Live within 5 business days',
    accent: false,
    flip: true,
    visual: [
      { label: 'avg_roas', value: '6.8x' },
      { label: 'platforms', value: 'Meta + Google' },
      { label: 'reporting', value: 'Weekly + Monthly' },
      { label: 'cac_avg_drop', value: '−34%' },
    ],
  },
  {
    id: 'social',
    icon: '📱',
    num: '05',
    label: 'Social Media',
    title: 'Social Media Marketing',
    headline: 'Content, community, growth — all under your name.',
    desc: 'We create, schedule, and manage social media entirely on your behalf. Instagram, Facebook, and LinkedIn — strategy, captions, graphics, and community management, done invisibly.',
    chips: ['Content Creation', 'Scheduling', 'Community Mgmt', 'Instagram', 'Facebook', 'LinkedIn'],
    deliverables: [
      'Monthly content calendar and strategy',
      '12–20 branded post designs per month',
      'Captions, hashtag research, and scheduling',
      'DM and comment management',
      'Monthly branded social analytics report',
    ],
    turnaround: 'Onboarded in 5 business days',
    accent: false,
    flip: false,
    visual: [
      { label: 'posts/month', value: '12–20' },
      { label: 'platforms', value: 'IG / FB / LI' },
      { label: 'response_sla', value: '< 2 hours' },
      { label: 'branding', value: 'Zero footprint' },
    ],
  },
]

export default function ServiceDetails() {
  return (
    <div>
      {services.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-[100px] border-b border-rule ${idx % 2 === 1 ? 'bg-ink-2' : 'bg-ink'}`}
        >
          <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
            <div className={`grid grid-cols-2 gap-20 items-center max-xl:grid-cols-1 max-xl:gap-12 ${svc.flip ? 'max-xl:flex max-xl:flex-col' : ''}`}>

              {/* Text block — conditionally reversed */}
              <div className={svc.flip ? 'order-2 max-xl:order-1' : ''}>
                <div className="flex items-center gap-3 mb-5 fu">
                  <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[3px] rounded-[3px] tracking-[1px] uppercase">{svc.num}</span>
                  <span className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase">{svc.label}</span>
                </div>

                <h2
                  className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-3 fu"
                  style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}
                  data-d="1"
                >
                  {svc.title}
                </h2>
                <p className="font-head text-[17px] font-semibold text-cyan mb-5 tracking-[-0.3px] fu" data-d="1">
                  {svc.headline}
                </p>
                <p className="text-[15px] text-np-text-muted leading-[1.78] mb-8 fu" data-d="2">
                  {svc.desc}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-[6px] mb-8 fu" data-d="2">
                  {svc.chips.map((c) => (
                    <span key={c} className="font-mono text-[10px] border border-rule text-np-text-dim px-[9px] py-[3px] rounded-[3px] tracking-[0.3px]">{c}</span>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="border border-rule rounded-[12px] overflow-hidden fu" data-d="3">
                  <div className="px-5 py-3 border-b border-rule bg-ink-3 flex items-center gap-2">
                    <span className="text-[16px]">{svc.icon}</span>
                    <span className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase">What we deliver</span>
                  </div>
                  {svc.deliverables.map((d, i) => (
                    <div key={i} className={`flex items-start gap-3 px-5 py-[11px] ${i < svc.deliverables.length - 1 ? 'border-b border-rule' : ''} hover:bg-ink-3 transition-colors`}>
                      <span className="text-cyan text-[11px] mt-[2px] flex-shrink-0">✓</span>
                      <span className="text-[13.5px] text-np-text-muted">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-6 fu" data-d="4">
                  <span className="font-mono text-[9px] text-np-text-dim tracking-[1px] uppercase">Turnaround:</span>
                  <span className="font-mono text-[10px] text-cyan border border-cyan-border bg-cyan-dim px-3 py-[4px] rounded-[4px]">{svc.turnaround}</span>
                </div>
              </div>

              {/* Visual block */}
              <div className={`fu ${svc.flip ? 'order-1 max-xl:order-2' : ''}`} data-d="2">
                {/* Stats card */}
                <div className={`rounded-2xl border overflow-hidden ${svc.accent ? 'border-cyan-border' : 'border-rule'}`}
                  style={svc.accent ? { background: 'linear-gradient(135deg, rgba(108,54,122,0.09), var(--ink2))' } : { background: 'var(--ink2)' }}
                >
                  {svc.accent && <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />}
                  {/* Panel bar */}
                  <div className="flex items-center gap-[10px] px-5 py-3 border-b border-rule bg-ink-3">
                    <div className="flex gap-[5px]">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                      <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">{svc.id}_metrics.live</span>
                  </div>
                  {/* Metric rows */}
                  <div className="divide-y divide-rule">
                    {svc.visual.map((v) => (
                      <div key={v.label} className="flex items-center justify-between px-6 py-4 hover:bg-ink-3 transition-colors">
                        <span className="font-mono text-[11px] text-np-text-muted">{v.label}</span>
                        <span className="font-head text-[20px] font-extrabold text-white tracking-[-0.5px]">{v.value}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTA strip */}
                  <div className="px-6 py-5 border-t border-rule flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-[13px] text-np-text-muted">Ready to add {svc.title}?</span>
                    <a href="/contact" className="font-mono text-[10px] text-ink bg-cyan px-4 py-2 rounded-[6px] tracking-[0.5px] uppercase font-bold hover:bg-[#9B4DAB] transition-colors">
                      Get a Quote →
                    </a>
                  </div>
                </div>

                {/* Icon watermark */}
                <div className="mt-4 flex items-center gap-3 px-1 fu" data-d="3">
                  <span className="text-[32px] opacity-60">{svc.icon}</span>
                  <div>
                    <div className="text-[12px] font-semibold text-np-text-muted">{svc.title}</div>
                    <div className="font-mono text-[9px] text-np-text-dim tracking-[1px]">100% white label — zero footprint</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
