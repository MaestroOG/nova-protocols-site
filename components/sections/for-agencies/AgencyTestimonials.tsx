import SectionPre from '@/components/ui/SectionPre'

const testimonials = [
  {
    initials: 'AK',
    name: 'Alex Kim',
    role: 'Founder',
    agency: 'Crescendo Digital',
    size: '4-person boutique',
    quote: 'Nova Protocols completely changed how we run our agency. We scaled from 8 to 34 clients in under a year without adding a single full-time hire. The white labeling is completely seamless — our clients have never once questioned it.',
    result: '34 clients, 0 new hires',
    service: 'SEO + Web Dev',
    delay: undefined,
  },
  {
    initials: 'SR',
    name: 'Sarah Reyes',
    role: 'Managing Director',
    agency: 'Apex Marketing Group',
    size: '12-person growth agency',
    quote: "We were skeptical about white label SEO — every provider we'd tried was underwhelming. Nova Protocols showed us what it should actually look like. Our clients see real, measurable results — and they think it's all us.",
    result: 'SEO retainers 3x\'d',
    service: 'White Label SEO',
    delay: '1',
  },
  {
    initials: 'MJ',
    name: 'Michael James',
    role: 'CEO',
    agency: 'Orbit Agency',
    size: '6-person full-service',
    quote: "Our clients think we have a 20-person in-house team. We're actually a team of 6 with Nova Protocols behind us. The reporting is genuinely impressive — we forward it straight to clients without touching a thing.",
    result: 'Revenue doubled in 9mo',
    service: 'Full Stack',
    delay: '2',
  },
  {
    initials: 'LP',
    name: 'Laura Patel',
    role: 'Co-Founder',
    agency: 'Signal Creative',
    size: '8-person creative agency',
    quote: "We were a creative studio — branding, design, copy. Clients kept asking for web dev and SEO. With Nova Protocols we said yes for the first time. It felt risky; it turned out to be the best revenue decision we made.",
    result: 'Added £180K new ARR',
    service: 'Web Dev + SEO',
    delay: '3',
  },
]

export default function AgencyTestimonials() {
  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionPre text="Agency Partners" centered className="fu" />
          <h2
            className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
            data-d="1"
          >
            From agencies that
            <br />
            made the same decision.
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="mb-4 fu">
          <div className="relative bg-ink border border-cyan-border rounded-[16px] p-10 overflow-hidden max-xl:p-7">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent absolute top-0 left-0 right-0" />
            <div className="absolute top-6 right-8 font-head text-[100px] font-black leading-none" style={{ color: 'rgba(108,54,122,0.07)' }}>&ldquo;</div>
            <div className="grid grid-cols-[1fr_240px] gap-10 items-center max-xl:grid-cols-1 max-xl:gap-8">
              <div>
                <div className="text-amber-400 text-[12px] tracking-[2px] mb-5">★★★★★</div>
                <p className="text-[18px] text-np-text-muted leading-[1.78] italic mb-8 max-xl:text-[16px]">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[8px] bg-cyan-dim border border-cyan-border flex items-center justify-center font-mono text-[13px] text-cyan font-bold flex-shrink-0">
                    {testimonials[0].initials}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">{testimonials[0].name}</div>
                    <div className="text-[12px] text-np-text-dim">{testimonials[0].role}, {testimonials[0].agency} · {testimonials[0].size}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-ink-2 border border-rule rounded-[12px] p-5 text-center">
                  <div className="font-head text-[28px] font-extrabold text-cyan tracking-[-1px]">34</div>
                  <div className="font-mono text-[9px] text-np-text-dim tracking-[1px] mt-1 uppercase">Clients</div>
                </div>
                <div className="bg-ink-2 border border-rule rounded-[12px] p-5 text-center">
                  <div className="font-head text-[28px] font-extrabold text-white tracking-[-1px]">0</div>
                  <div className="font-mono text-[9px] text-np-text-dim tracking-[1px] mt-1 uppercase">New Hires</div>
                </div>
                <div className="bg-ink-2 border border-cyan-border rounded-[12px] p-5 text-center" style={{ background: 'rgba(108,54,122,0.07)' }}>
                  <div className="font-mono text-[10px] text-cyan tracking-[1px] uppercase">Using</div>
                  <div className="text-[13px] font-semibold text-white mt-1">{testimonials[0].service}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of testimonials */}
        <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-1">
          {testimonials.slice(1).map((t) => (
            <div
              key={t.name}
              className="relative bg-ink border border-rule rounded-[14px] p-7 hover:border-rule-h transition-colors fu"
              data-d={t.delay}
            >
              <div className="absolute top-5 right-6 font-head text-[64px] font-black leading-none" style={{ color: 'rgba(108,54,122,0.08)' }}>&ldquo;</div>
              <div className="text-amber-400 text-[11px] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[13.5px] text-np-text-muted leading-[1.75] italic mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-[7px] bg-cyan-dim border border-cyan-border flex items-center justify-center font-mono text-[11px] text-cyan font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-white">{t.name}</div>
                  <div className="text-[11px] text-np-text-dim">{t.role}, {t.agency}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-rule">
                <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[3px] rounded-[3px] tracking-[0.5px] uppercase">{t.service}</span>
                <span className="font-mono text-[9px] text-[#00c864] border border-[rgba(0,200,100,0.25)] bg-[rgba(0,200,100,0.07)] px-2 py-[3px] rounded-[3px]">↑ {t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
