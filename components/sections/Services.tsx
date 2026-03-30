import SectionPre from '@/components/ui/SectionPre'
import { scrollTo } from '@/utils/scrollTo'

const bentoCards = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Custom sites, WordPress, Webflow, and high-converting landing pages built with performance-first code.',
    chips: [
      { label: 'Custom Dev', accent: true },
      { label: 'WordPress', accent: false },
      { label: 'Webflow', accent: false },
      { label: 'Landing Pages', accent: false },
    ],
    num: '01',
    colSpan: 'col-span-5 max-xl:col-span-1',
    accent: true,
    delay: undefined,
  },
  {
    icon: '🛍️',
    title: 'Shopify Development',
    desc: 'End-to-end Shopify: store builds, custom themes, speed optimization, and CRO.',
    chips: [
      { label: 'Store Setup', accent: false },
      { label: 'Custom Dev', accent: true },
      { label: 'Speed Opt', accent: false },
      { label: 'CRO', accent: false },
    ],
    num: '02',
    colSpan: 'col-span-4 max-xl:col-span-1',
    accent: false,
    delay: '1',
  },
  {
    icon: '📈',
    title: 'White Label SEO',
    desc: 'Full-spectrum search engine optimization — delivered under your name, tracked in branded dashboards.',
    chips: [
      { label: 'Technical', accent: true },
      { label: 'On-Page', accent: false },
      { label: 'Link Building', accent: true },
      { label: 'Local', accent: false },
      { label: 'Ecommerce', accent: false },
      { label: 'Audits', accent: false },
    ],
    num: '03',
    colSpan: 'col-span-3 row-span-2 max-xl:col-span-1 max-xl:row-span-1',
    accent: false,
    delay: '2',
    gradientStyle: 'linear-gradient(160deg,rgba(108,54,122,0.07),var(--ink2))',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Content creation, scheduling, and community management for Instagram and Facebook — fully white labeled.',
    chips: [
      { label: 'Management', accent: true },
      { label: 'Content Creation', accent: false },
      { label: 'Instagram', accent: false },
      { label: 'Facebook', accent: false },
    ],
    num: '04',
    colSpan: 'col-span-5 max-xl:col-span-1',
    accent: false,
    delay: '3',
  },
  {
    icon: '📢',
    title: 'Paid Advertising',
    desc: 'Meta, Google Search, Display, YouTube — full funnel with conversion tracking.',
    chips: [
      { label: 'Meta Ads', accent: true },
      { label: 'Google Ads', accent: false },
      { label: 'YouTube', accent: false },
      { label: 'Funnel Strategy', accent: false },
    ],
    num: '05',
    colSpan: 'col-span-4 max-xl:col-span-1',
    accent: false,
    delay: '4',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Intro header */}
        <div className="grid grid-cols-2 gap-12 items-end mb-14 max-xl:grid-cols-1">
          <div>
            <SectionPre text="Services" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-[14px] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Five pillars.
              <br />
              Infinite scale.
            </h2>
          </div>
          <div className="pt-10">
            <p className="text-[15.5px] text-np-text-muted leading-[1.75] max-w-[560px] fu" data-d="2">
              Every service delivered under your brand — from discovery and production to reporting and revision rounds. Your clients never know we exist.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {bentoCards.map((card) => (
            <div
              key={card.title}
              className={`${card.colSpan} bg-ink-2 border rounded-[14px] p-7 relative overflow-hidden hover:border-rule-h hover:-translate-y-[2px] transition-all duration-300 fu ${card.accent ? 'border-cyan-border' : 'border-rule'
                }`}
              style={
                card.accent
                  ? { background: 'linear-gradient(135deg,rgba(108,54,122,0.09),var(--ink2))' }
                  : card.gradientStyle
                    ? { background: card.gradientStyle }
                    : undefined
              }
              data-d={card.delay}
            >
              <span className="text-[26px] mb-4 block">{card.icon}</span>
              <div className="font-head text-[17px] font-bold text-white mb-2 tracking-[-0.3px]">{card.title}</div>
              <div className="text-[13.5px] text-np-text-muted leading-[1.65] mb-4">{card.desc}</div>
              <div className="flex flex-wrap gap-[5px]">
                {card.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`font-mono text-[10px] border px-[9px] py-[3px] rounded-[3px] tracking-[0.3px] ${chip.accent
                        ? 'border-cyan-border text-cyan'
                        : 'border-rule text-np-text-dim'
                      }`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
              <div className="bc-num">{card.num}</div>
            </div>
          ))}

          {/* Wide CTA card */}
          <div
            className="col-span-9 max-xl:col-span-2 max-sm:col-span-1 bg-ink-2 border border-rule rounded-[14px] p-7 relative overflow-hidden hover:border-rule-h hover:-translate-y-[2px] transition-all duration-300 cursor-pointer fu"
            style={{ background: 'linear-gradient(135deg,rgba(108,54,122,0.07),var(--ink2))' }}
            data-d="5"
            onClick={() => scrollTo('contact')}
          >
            <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
              <div>
                <div className="flex items-center gap-3 mb-[10px]">
                  <span className="w-6 h-[1.5px] bg-cyan" />
                  <span className="font-mono text-[10px] text-cyan tracking-[2.5px] uppercase">Need a custom stack?</span>
                </div>
                <div className="font-head text-[17px] font-bold text-white mb-2 tracking-[-0.3px]">Build your own service bundle</div>
                <div className="text-[13.5px] text-np-text-muted leading-[1.65]">
                  Mix and match services to match your agency&apos;s exact offering. We&apos;ll build the fulfillment pipeline.
                </div>
              </div>
              <div className="p-4 bg-ink-3 rounded-lg">
                <div className="text-[13px] font-semibold text-white mb-[6px]">100% White Labeled</div>
                <div className="text-[12px] text-np-text-dim leading-[1.5]">No Nova Protocols branding anywhere. Your clients only see you.</div>
              </div>
              <div className="flex items-center">
                <button className="text-[13.5px] font-bold py-3 px-6 bg-cyan text-white rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all">
                  Talk to us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
