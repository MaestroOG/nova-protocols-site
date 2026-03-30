import SectionPre from '@/components/ui/SectionPre'

const painPoints = [
  { icon: '😤', text: 'Turning away clients because team is at capacity' },
  { icon: '💸', text: 'Hiring kills margins before revenue catches up' },
  { icon: '🔥', text: 'Founder still doing delivery instead of selling' },
  { icon: '📉', text: 'Can\'t take on new services without new specialists' },
  { icon: '⏰', text: 'Missing deadlines because one person is overloaded' },
]

export default function AgenciesHero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-16 border-b border-rule">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 100% 10%, rgba(108,54,122,0.10) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 0% 90%, rgba(108,54,122,0.07) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[40%] w-px bg-rule opacity-50" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-rule" />
      </div>

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-12 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span>›</span>
          <span className="text-cyan">For Agencies</span>
        </div>

        <div className="grid grid-cols-[1fr_420px] gap-0 items-center max-xl:grid-cols-1 max-xl:gap-14">
          {/* Left */}
          <div className="pr-16 border-r border-rule max-xl:pr-0 max-xl:border-r-0 max-xl:border-b max-xl:pb-12">
            <SectionPre text="Built for Digital Agencies" className="fu in" />
            <h1
              className="font-head font-black leading-[0.93] tracking-[-3px] text-white mb-7 fu in"
              style={{ fontSize: 'clamp(44px,6vw,78px)' }}
              data-d="1"
            >
              Your agency,
              <br />
              <em className="hero-outline">unlimited</em>
              <br />
              <span className="text-cyan">capacity.</span>
            </h1>
            <p className="text-[16px] text-np-text-muted leading-[1.78] max-w-[460px] mb-10 fu in" data-d="2">
              Every growing agency hits the same ceiling — clients want more, but hiring kills margins and operations overwhelm founders. Nova Protocols is the escape hatch.
            </p>

            <div className="flex gap-4 flex-wrap fu in" data-d="3">
              <a href="/contact" className="text-[14.5px] font-bold py-[14px] px-8 bg-cyan text-ink rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all">
                Get a Free Agency Audit →
              </a>
              <a href="/cases" className="text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all">
                See Case Studies
              </a>
            </div>

            {/* Social proof bar */}
            <div className="flex items-center gap-5 mt-12 pt-8 border-t border-rule fu in max-sm:flex-wrap" data-d="4">
              {[
                { n: '200+', l: 'Partner Agencies' },
                { n: '98%', l: 'Retention Rate' },
                { n: '40–60%', l: 'Avg Margins Kept' },
              ].map((s, i) => (
                <div key={s.l} className={`${i > 0 ? 'pl-5 border-l border-rule-h' : ''}`}>
                  <div className="font-head text-[24px] font-extrabold text-white tracking-[-1px]">
                    {s.n}
                  </div>
                  <div className="text-[12px] text-np-text-dim mt-[1px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: live agency feed panel */}
          <div className="pl-16 max-xl:pl-0 max-xl:pt-4 fu in" data-d="2">
            <div className="bg-ink-2 border border-rule rounded-2xl overflow-hidden">
              {/* Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-rule bg-ink-3">
                <div className="flex gap-[5px]">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">agency_growth_feed.live</span>
              </div>

              {/* Pain-point checklist */}
              <div className="p-5">
                <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase mb-4">Without a white label partner</div>
                {painPoints.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 py-[10px] border-b border-rule last:border-0">
                    <span className="text-[15px] flex-shrink-0">{p.icon}</span>
                    <span className="text-[13px] text-np-text-muted line-through decoration-[rgba(220,232,255,0.2)]">{p.text}</span>
                    <span className="ml-auto flex-shrink-0 font-mono text-[9px] text-[#ff5f57] border border-[rgba(255,95,87,0.2)] bg-[rgba(255,95,87,0.06)] px-2 py-[2px] rounded-[3px]">PAIN</span>
                  </div>
                ))}
              </div>

              {/* With Nova Protocols strip */}
              <div className="border-t border-cyan-border px-5 py-4 flex items-center gap-3" style={{ background: 'rgba(108,54,122,0.07)' }}>
                <span className="text-cyan text-[16px]">✓</span>
                <span className="text-[13px] font-semibold text-white">With Nova Protocols — all of the above, solved.</span>
                <span className="ml-auto font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[2px] rounded-[3px] animate-liveblink">● FIXED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
