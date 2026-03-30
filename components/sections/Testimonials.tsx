import SectionPre from '@/components/ui/SectionPre'

const testimonials = [
  {
    quote:
      'Nova Protocols completely changed how we run our agency. We scaled from 8 to 34 clients in under a year without adding a single full-time hire. The white labeling is completely seamless.',
    initials: 'AK',
    name: 'Alex Kim',
    role: 'Founder, Crescendo Digital',
    delay: undefined,
  },
  {
    quote:
      "We were skeptical about white label SEO — every provider we'd tried was underwhelming. Nova Protocols showed us what it should look like. Our clients see real, measurable results.",
    initials: 'SR',
    name: 'Sarah Reyes',
    role: 'MD, Apex Marketing Group',
    delay: '1',
  },
  {
    quote:
      "Our clients think we have a 20-person in-house team. We're actually a team of 4 with Nova Protocols behind us. The reporting is genuinely impressive — we forward it straight to clients.",
    initials: 'MJ',
    name: 'Michael James',
    role: 'CEO, Orbit Agency',
    delay: '2',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-[120px] bg-ink-2 border-t border-rule"
    >
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionPre text="Testimonials" className="fu" centered />
          <h2
            className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
            data-d="1"
          >
            What agencies say.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-1">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-ink-2 border border-rule rounded-[14px] p-7 hover:border-rule-h transition-colors fu"
              data-d={t.delay}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-5 right-6 font-head text-[72px] font-black leading-none"
                   style={{ color: 'rgba(108,54,122,0.08)' }}>
                &ldquo;
              </div>

              <div className="text-amber-400 text-[12px] tracking-[1.5px] mb-[14px]">★★★★★</div>
              <p className="text-[14px] text-np-text-muted leading-[1.75] italic mb-[22px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-lg bg-cyan-dim border border-cyan-border flex items-center justify-center font-mono text-[11px] text-cyan font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{t.name}</div>
                  <div className="text-[12px] text-np-text-dim">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
