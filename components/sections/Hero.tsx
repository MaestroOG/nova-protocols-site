import { scrollTo } from '@/utils/scrollTo'
import { Fragment } from 'react/jsx-runtime'

const proofStats = [
  { value: '350', suffix: '+', label: 'Agency Partners' },
  { value: '99', suffix: '%', label: 'Retention Rate' },
  { value: '10K', suffix: '+', label: 'Projects Delivered' },
  { value: '10', suffix: 'm', label: 'Onboarding' },
]

const tickerItems = [
  { label: 'Web Dev', active: true },
  { label: 'Shopify', active: false },
  { label: 'SEO', active: true },
  { label: 'Meta Ads', active: false },
  { label: 'Webflow', active: true },
  { label: 'Link Build', active: false },
  { label: 'Google Ads', active: true },
  { label: 'Social', active: false },
]

const panelServices = [
  { label: 'web-dev', active: true },
  { label: 'shopify', active: true },
  { label: 'seo', active: false },
  { label: 'paid-ads', active: true },
  { label: 'social', active: false },
  { label: 'webflow', active: true },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-16 grid grid-rows-[1fr_auto] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 100% 20%,rgba(108,54,122,0.10) 0%,transparent 60%), radial-gradient(ellipse 50% 40% at 0% 80%,rgba(108,54,122,0.07) 0%,transparent 60%)',
        }}
      />
      {/* Decorative lines */}
      <div className="hero-lines" />

      <div className="max-w-[1240px] mx-auto px-14 w-full max-xl:px-7">
        <div className="grid grid-cols-[1fr_440px] gap-0 items-end min-h-[calc(100vh-64px)] max-xl:grid-cols-1 max-xl:min-h-auto">
          {/* Left */}
          <div className="pr-14 border-r border-rule flex flex-col justify-center py-20 max-xl:pr-0 max-xl:border-r-0 max-xl:border-b max-xl:border-rule max-xl:py-20">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 fu in">
              <span className="w-8 h-px bg-cyan" />
              <span className="font-mono text-[11px] text-cyan tracking-[2px] uppercase">
                White Label IT Partner
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-head font-black leading-[0.97] tracking-[-3px] text-white mb-8 fu in"
              style={{ fontSize: 'clamp(44px,6vw,76px)' }}
              data-d="1"
            >
              Scale your
              <br />
              agency{' '}
              <em className="hero-outline">without</em>
              <br />
              the <span className="text-cyan">overhead.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base text-np-text-muted leading-[1.75] max-w-[440px] mb-11 fu in" data-d="2">
              Nova Protocols is the invisible delivery engine behind 200+ agencies worldwide. White label web development, SEO, paid ads, and social media — all under your brand.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-[14px] items-center mb-14 fu in max-sm:flex-col max-sm:items-start" data-d="3">
              <button
                onClick={() => scrollTo('partner')}
                className="text-[14.5px] font-bold tracking-[0.2px] py-[14px] px-8 bg-cyan text-white rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all duration-[250ms]"
              >
                Become a Partner →
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all"
              >
                Explore Services
              </button>
            </div>

            {/* Proof stats */}
            <div className="flex items-center gap-5 pt-10 border-t border-rule fu in max-sm:flex-wrap max-sm:gap-[14px]" data-d="4">
              {proofStats.map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && <div key={`div-${i}`} className="w-px h-9 bg-rule-h" />}
                  <div key={stat.label}>
                    <div className="font-head text-[28px] font-extrabold text-white tracking-[-1px]">
                      {stat.value}<span className="text-cyan">{stat.suffix}</span>
                    </div>
                    <div className="text-[12px] text-np-text-dim mt-[1px]">{stat.label}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* Right: Dashboard panel */}
          <div className="pl-14 flex flex-col justify-center py-20 fu in max-xl:pl-0 max-xl:pt-12 max-xl:pb-20" data-d="2">
            <div className="bg-ink-2 border border-rule rounded-2xl overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-rule">
                <div className="flex gap-[6px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
                  <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px]">partner_dashboard.live</span>
              </div>

              {/* Panel metrics */}
              <div className="p-5">
                {[
                  { label: 'active_projects', val: '34', unit: 'active', badge: 'live', badgeText: '● LIVE' },
                  { label: 'avg_turnaround', val: '3.2', unit: 'days', badge: 'up', badgeText: '↑ 12%' },
                  { label: 'client_satisfaction', val: '4.9', unit: '/ 5', badge: 'up', badgeText: '↑ 0.2' },
                  { label: 'white_label_coverage', val: '100', unit: '%', badge: null, badgeText: '' },
                ].map((m, i) => (
                  <div
                    key={m.label}
                    className={`flex items-center justify-between py-3 ${i < 3 ? 'border-b border-rule' : ''}`}
                  >
                    <span className="font-mono text-[11px] text-np-text-muted">{m.label}</span>
                    <div className="flex items-center gap-[10px]">
                      <span className="font-head text-[18px] font-extrabold text-white tracking-[-0.5px]">
                        {m.val} <span className="text-cyan text-[13px]">{m.unit}</span>
                      </span>
                      {m.badge === 'live' && (
                        <span className="font-mono text-[9px] px-2 py-[3px] rounded-[4px] tracking-[0.5px] bg-cyan-dim text-cyan border border-cyan-border animate-liveblink">
                          {m.badgeText}
                        </span>
                      )}
                      {m.badge === 'up' && (
                        <span className="font-mono text-[9px] px-2 py-[3px] rounded-[4px] tracking-[0.5px] bg-[rgba(0,200,100,0.1)] text-[#00c864] border border-[rgba(0,200,100,0.2)]">
                          {m.badgeText}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Service tags */}
                <div className="mt-5 flex flex-wrap gap-[6px]">
                  {panelServices.map((s) => (
                    <span
                      key={s.label}
                      className={`font-mono text-[10px] px-[10px] py-1 rounded-[4px] border tracking-[0.5px] ${s.active
                        ? 'border-cyan-border text-cyan bg-cyan-dim'
                        : 'border-rule text-np-text-dim'
                        }`}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ticker */}
              <div className="border-t border-rule flex items-center overflow-hidden">
                <div className="flex-shrink-0 px-5 py-3 font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase border-r border-rule">
                  Delivering
                </div>
                <div className="flex-1 overflow-hidden px-4 py-3">
                  <div className="flex gap-8 animate-ht-move w-max">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                      <span
                        key={i}
                        className={`font-mono text-[10px] tracking-[1px] whitespace-nowrap ${item.active ? 'text-cyan' : 'text-np-text-dim'
                          }`}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
