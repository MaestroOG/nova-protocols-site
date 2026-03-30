import SectionPre from '@/components/ui/SectionPre'

const foundingStats = [
  { value: '2019', label: 'Year Founded' },
  { value: 'Remote', label: 'Headquarters' },
  { value: '60+', label: 'Team Members' },
  { value: '18', label: 'Countries Served' },
]

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 60% 10%, rgba(108,54,122,0.09) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(108,54,122,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Vertical rule lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[33%] w-px bg-rule" />
        <div className="absolute top-0 bottom-0 left-[66%] w-px bg-rule opacity-50" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-rule" />
      </div>

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-12 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span className="text-np-text-dim">›</span>
          <span className="text-cyan">About</span>
        </div>

        <div className="grid grid-cols-[1fr_380px] gap-0 items-end max-xl:grid-cols-1 max-xl:gap-16">
          {/* Left: headline */}
          <div className="border-r border-rule pr-16 pb-20 max-xl:border-r-0 max-xl:pr-0 max-xl:border-b max-xl:pb-12">
            <SectionPre text="About Nova Protocols" className="fu in" />

            <h1
              className="font-head font-black leading-[0.95] tracking-[-3px] text-white mb-8 fu in"
              style={{ fontSize: 'clamp(48px,6.5vw,82px)' }}
              data-d="1"
            >
              The invisible
              <br />
              engine <em className="hero-outline">behind</em>
              <br />
              your <span className="text-cyan">success.</span>
            </h1>

            <p
              className="text-[16px] text-np-text-muted leading-[1.75] max-w-[520px] mb-12 fu in"
              data-d="2"
            >
              We didn&apos;t set out to build another agency. We built the system that
              makes agencies unstoppable — an invisible, white-label delivery
              engine that works entirely under your brand.
            </p>

            {/* Founding stat strip */}
            <div className="flex items-center gap-0 border border-rule rounded-[12px] overflow-hidden fu in" data-d="3">
              {foundingStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex-1 px-6 py-5 text-center ${i < foundingStats.length - 1 ? 'border-r border-rule' : ''}`}
                >
                  <div className="font-head text-[22px] font-extrabold text-white tracking-[-1px]">
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: origin snapshot panel */}
          <div className="pl-16 pb-20 max-xl:pl-0 max-xl:pb-0 fu in" data-d="2">
            <div className="bg-ink-2 border border-rule rounded-[16px] overflow-hidden">
              {/* Panel bar */}
              <div className="flex items-center gap-[10px] px-5 py-3 border-b border-rule bg-ink-3">
                <div className="flex gap-[5px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#febc2e]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">
                  company_snapshot.json
                </span>
              </div>

              {/* JSON-style content */}
              <div className="p-5 font-mono text-[12px] leading-[2]">
                <div className="text-np-text-dim">{'{'}</div>
                <div className="pl-5">
                  <span className="text-cyan">&quot;mission&quot;</span>
                  <span className="text-np-text-dim">: </span>
                  <span className="text-np-text-muted">&quot;Invisible delivery, visible results&quot;</span>
                  <span className="text-np-text-dim">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-cyan">&quot;founded&quot;</span>
                  <span className="text-np-text-dim">: </span>
                  <span className="text-[#f0a500]">2019</span>
                  <span className="text-np-text-dim">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-cyan">&quot;model&quot;</span>
                  <span className="text-np-text-dim">: </span>
                  <span className="text-np-text-muted">&quot;100% White Label&quot;</span>
                  <span className="text-np-text-dim">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-cyan">&quot;partners&quot;</span>
                  <span className="text-np-text-dim">: </span>
                  <span className="text-[#00c864]">200</span>
                  <span className="text-np-text-dim">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-cyan">&quot;nda_signed&quot;</span>
                  <span className="text-np-text-dim">: </span>
                  <span className="text-[#00c864]">true</span>
                  <span className="text-np-text-dim">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-cyan">&quot;branding_visible&quot;</span>
                  <span className="text-np-text-dim">: </span>
                  <span className="text-[#ff5f57]">false</span>
                </div>
                <div className="text-np-text-dim">{'}'}</div>
              </div>

              {/* Status bar */}
              <div className="border-t border-rule px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1px]">STATUS</span>
                <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[2px] rounded-[3px] animate-liveblink">
                  ● OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
