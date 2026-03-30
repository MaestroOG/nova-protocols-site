import SectionPre from '@/components/ui/SectionPre'
import { scrollTo } from '@/utils/scrollTo'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-[120px] bg-ink-2 border-t border-rule"
    >
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-2 gap-14 items-start max-xl:grid-cols-1">
          {/* Left text */}
          <div>
            <SectionPre text="Pricing" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-[14px] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Flexible pricing.
              <br />
              Built for your margins.
            </h2>
            <p className="text-[15.5px] text-np-text-muted leading-[1.75] max-w-[560px] fu" data-d="2">
              We don&apos;t use rigid tiers. Every agency gets a custom quote based on service mix, volume,
              and delivery cadence — designed so you keep 40–60% margins on everything you resell.
            </p>
            <div className="mt-8 fu" data-d="3">
              <button
                onClick={() => scrollTo('contact')}
                className="text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all"
              >
                View Pricing Options →
              </button>
            </div>
          </div>

          {/* Right: Pricing cards */}
          <div className="fu" data-d="2">
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              {/* Featured card */}
              <div className="relative bg-ink-2 border border-cyan-border rounded-[14px] p-8 overflow-hidden pc-star-line"
                   style={{ background: 'linear-gradient(160deg,rgba(108,54,122,0.10),var(--ink2))' }}>
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />

                <div className="inline-flex items-center gap-[6px] font-mono text-[9px] tracking-[1px] px-[10px] py-1 rounded-[4px] mb-5 uppercase bg-cyan-dim text-cyan border border-cyan-border">
                  ● Most Popular
                </div>
                <div className="font-head text-[20px] font-extrabold text-white mb-2">
                  Custom Agency Package
                </div>
                <div className="text-[13.5px] text-np-text-muted leading-[1.65] mb-6">
                  Built around your exact volume, service mix, and delivery needs. Get a quote in 24 hours.
                </div>
                <div className="bg-ink-3 border border-rule rounded-[10px] p-5 text-center mb-6">
                  <div className="text-[13px] text-np-text-muted mb-[14px]">
                    Quote within 24 hours — free audit included
                  </div>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full text-[13.5px] font-bold py-3 px-5 bg-cyan text-ink rounded-lg flex items-center justify-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all"
                  >
                    Request Pricing →
                  </button>
                </div>
                <div className="flex flex-col gap-[10px]">
                  {[
                    'White labeled from day one',
                    'Dedicated account manager',
                    'No lock-in contracts',
                    'Monthly billing, cancel anytime',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-[10px] text-[13.5px] text-np-text-muted">
                      <span className="text-cyan flex-shrink-0 text-[12px]">✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard card */}
              <div className="bg-ink-2 border border-rule rounded-[14px] p-8">
                <div className="inline-flex items-center gap-[6px] font-mono text-[9px] tracking-[1px] px-[10px] py-1 rounded-[4px] mb-5 uppercase bg-white/[0.04] text-np-text-dim border border-rule">
                  À La Carte
                </div>
                <div className="font-head text-[20px] font-extrabold text-white mb-2">
                  Project-by-Project
                </div>
                <div className="text-[13.5px] text-np-text-muted leading-[1.65] mb-6">
                  Not ready for a retainer? Start with individual projects and build trust over time.
                </div>
                <div className="bg-ink-3 border border-rule rounded-[10px] p-5 text-center mb-6">
                  <div className="text-[13px] text-np-text-muted mb-[14px]">
                    Great for trying us out first
                  </div>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full text-[13.5px] font-medium py-3 px-5 border border-rule-h text-np-text-muted rounded-lg flex items-center justify-center gap-2 hover:border-cyan-border hover:text-np-text transition-all"
                  >
                    Get a Quote
                  </button>
                </div>
                <div className="flex flex-col gap-[10px]">
                  {[
                    'No ongoing commitment',
                    'Per-project pricing',
                    'Scale up anytime',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-[10px] text-[13.5px] text-np-text-muted">
                      <span className="text-cyan flex-shrink-0 text-[12px]">✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
