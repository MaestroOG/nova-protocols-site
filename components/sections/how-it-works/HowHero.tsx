import SectionPre from '@/components/ui/SectionPre'

const timelineSteps = [
  { n: '01', label: 'Apply', time: 'Day 0' },
  { n: '02', label: 'Onboard', time: 'Day 1–2' },
  { n: '03', label: 'Submit Brief', time: 'Day 3+' },
  { n: '04', label: 'Delivery', time: 'Day 5–21' },
  { n: '05', label: 'Report', time: 'Monthly' },
]

export default function HowHero() {
  return (
    <section className="relative pt-16 overflow-hidden border-b border-rule">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 80% 0%, rgba(108,54,122,0.10) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 5% 95%, rgba(108,54,122,0.05) 0%, transparent 60%)',
        }}
      />
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-rule pointer-events-none opacity-40" />

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-12 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span>›</span>
          <span className="text-cyan">How It Works</span>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-xl:grid-cols-1 max-xl:gap-12">
          <div>
            <SectionPre text="The Process" className="fu in" />
            <h1
              className="font-head font-black leading-[0.93] tracking-[-3px] text-white mb-6 fu in"
              style={{ fontSize: 'clamp(44px,6vw,76px)' }}
              data-d="1"
            >
              Live in 48 hours.
              <br />
              <em className="hero-outline">Delivering</em>
              <br />
              <span className="text-cyan">within a week.</span>
            </h1>
            <p className="text-[16px] text-np-text-muted leading-[1.78] max-w-[480px] mb-10 fu in" data-d="2">
              No lengthy discovery. No complicated setup. We've engineered every step of the partnership to get your agency delivering new services as fast as possible — without operational chaos.
            </p>
            <div className="flex gap-4 flex-wrap fu in" data-d="3">
              <a href="/contact" className="text-[14.5px] font-bold py-[14px] px-8 bg-cyan text-ink rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all">
                Start the Process →
              </a>
              <a href="/for-agencies" className="text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all">
                Why Agencies Choose Us
              </a>
            </div>
          </div>

          {/* Timeline visual */}
          <div className="fu in" data-d="2">
            <div className="bg-ink-2 border border-rule rounded-2xl overflow-hidden">
              <div className="flex items-center gap-[10px] px-5 py-3 border-b border-rule bg-ink-3">
                <div className="flex gap-[5px]">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">onboarding_timeline.live</span>
              </div>

              {/* Steps */}
              <div className="p-5">
                {timelineSteps.map((s, i) => (
                  <div key={s.n} className={`flex items-center gap-4 py-4 ${i < timelineSteps.length - 1 ? 'border-b border-rule' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-cyan flex items-center justify-center font-mono text-[10px] text-ink font-bold flex-shrink-0">
                      {s.n}
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-white">{s.label}</div>
                    </div>
                    <span className="font-mono text-[10px] text-np-text-dim border border-rule px-3 py-[4px] rounded-[4px] flex-shrink-0">
                      {s.time}
                    </span>
                    {i === 0 && (
                      <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[3px] rounded-[3px]">START</span>
                    )}
                    {i === timelineSteps.length - 1 && (
                      <span className="font-mono text-[9px] text-[#00c864] border border-[rgba(0,200,100,0.25)] bg-[rgba(0,200,100,0.07)] px-2 py-[3px] rounded-[3px]">ONGOING</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Promise strip */}
              <div className="border-t border-cyan-border px-5 py-4 flex items-center gap-3" style={{ background: 'rgba(108,54,122,0.07)' }}>
                <span className="text-cyan text-[16px]">⚡</span>
                <span className="text-[13px] font-medium text-white">From application to first delivery — under 7 days.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
