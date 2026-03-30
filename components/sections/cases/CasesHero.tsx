import SectionPre from '@/components/ui/SectionPre'

export default function CasesHero() {
  return (
    <section className="relative pt-16 overflow-hidden border-b border-rule">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(108,54,122,0.09) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(108,54,122,0.05) 0%, transparent 60%)',
        }}
      />
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-rule pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10 py-20">
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-12 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span>›</span>
          <span className="text-cyan">Case Studies</span>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-16 items-end max-xl:grid-cols-1 max-xl:gap-10">
          <div>
            <SectionPre text="Case Studies" className="fu in" />
            <h1
              className="font-head font-black leading-[0.95] tracking-[-3px] text-white mb-7 fu in"
              style={{ fontSize: 'clamp(44px,6vw,76px)' }}
              data-d="1"
            >
              Results
              <br />
              <em className="hero-outline">agencies</em>
              <br />
              <span className="text-cyan">are proud of.</span>
            </h1>
            <p className="text-[16px] text-np-text-muted leading-[1.75] max-w-[460px] fu in" data-d="2">
              Every case study here belongs to an agency partner. Nova Protocols delivered the work — they presented it as their own. That&apos;s exactly how it should be.
            </p>
          </div>

          {/* Aggregate results panel */}
          <div className="fu in" data-d="2">
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: '5K+', l: 'Projects delivered', sub: 'Across all service lines' },
                { n: '98%', l: 'On-time rate', sub: 'Client-facing deadlines' },
                { n: '4.9', l: 'Avg client score', sub: 'From agency feedback' },
                { n: '312%', l: 'Best organic growth', sub: 'Single client, 8 months' },
              ].map((s) => (
                <div key={s.l} className="bg-ink-2 border border-rule rounded-[12px] p-5 hover:border-rule-h transition-colors">
                  <div className="font-head text-[28px] font-black text-white tracking-[-1.5px] mb-[2px]">{s.n}</div>
                  <div className="text-[12.5px] font-medium text-np-text-muted">{s.l}</div>
                  <div className="font-mono text-[9px] text-np-text-dim tracking-[0.5px] mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
