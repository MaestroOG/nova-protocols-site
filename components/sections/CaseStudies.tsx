import SectionPre from '@/components/ui/SectionPre'

const cases = [
  {
    emoji: '🛒',
    tag: 'Shopify + SEO',
    title: "Fashion Brand 3x'd Organic Revenue",
    desc: 'UK boutique agency resold our Shopify + SEO stack to a mid-size fashion retailer. 8-month engagement delivering sustained organic growth.',
    stats: [
      { n: '312%', l: 'Organic Growth' },
      { n: '2.1x', l: 'Revenue Lift' },
      { n: '58%', l: 'CPA Drop' },
    ],
    topBg: 'bg-ink-3',
    delay: undefined,
  },
  {
    emoji: '🏥',
    tag: 'Local SEO + Web',
    title: 'Healthcare Group Dominates Local Search',
    desc: 'US healthcare marketing agency used our Local SEO + custom web dev to rank 12 clinic locations on page one.',
    stats: [
      { n: '94%', l: 'Rank #1 KWs' },
      { n: '4.2x', l: 'Lead Volume' },
      { n: '12', l: 'Locations' },
    ],
    topBg: 'bg-ink-4',
    delay: '1',
  },
  {
    emoji: '📊',
    tag: 'Meta Ads + Funnel',
    title: 'SaaS Startup Cuts CAC by 61%',
    desc: 'Australian digital agency white labeled our paid ads team to run full-funnel Meta campaigns for a B2B SaaS client.',
    stats: [
      { n: '61%', l: 'CAC Reduction' },
      { n: '8.4x', l: 'ROAS' },
      { n: '90d', l: 'Time to Results' },
    ],
    topBg: '',
    topStyle: { background: 'rgba(108,54,122,0.07)' },
    delay: '2',
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="py-[120px] bg-ink-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="flex justify-between items-end mb-14 flex-wrap gap-4">
          <div>
            <SectionPre text="Case Studies" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Results that speak.
            </h2>
          </div>
          <button className="fu text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all">
            View All Cases →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-1">
          {cases.map((c) => (
            <div
              key={c.title}
              className="cc bg-ink border border-rule rounded-[14px] overflow-hidden cursor-pointer hover:border-cyan-border hover:-translate-y-[5px] transition-all duration-[350ms] fu"
              data-d={c.delay}
            >
              {/* Image area */}
              <div
                className={`h-40 flex items-center justify-center text-[44px] relative ${c.topBg}`}
                style={c.topStyle}
              >
                {c.emoji}
                <div className="absolute top-[14px] left-[14px] font-mono text-[9px] tracking-[1px] uppercase bg-cyan-dim text-cyan border border-cyan-border px-[10px] py-[3px] rounded-[4px]">
                  {c.tag}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="font-head text-[17px] font-bold text-white mb-2 leading-[1.3]">{c.title}</div>
                <div className="text-[13px] text-np-text-muted leading-[1.65] mb-5">{c.desc}</div>
                <div className="flex border-t border-rule pt-4">
                  {c.stats.map((s, i) => (
                    <div key={s.l} className={`flex-1 text-center ${i > 0 ? 'border-l border-rule' : ''}`}>
                      <div className="font-head text-[22px] font-extrabold text-cyan tracking-[-1px]">{s.n}</div>
                      <div className="text-[10px] text-np-text-dim mt-[2px] font-mono tracking-[0.5px]">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
