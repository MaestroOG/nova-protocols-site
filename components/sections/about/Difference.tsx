import SectionPre from '@/components/ui/SectionPre'
import { Building, UserRound, Zap } from 'lucide-react'

const comparisons = [
  {
    label: 'Freelancer',
    icon: <UserRound />,
    traits: [
      { text: 'One skill set', ok: false },
      { text: 'Unreliable availability', ok: false },
      { text: 'No NDA or brand protection', ok: false },
      { text: 'No reporting layer', ok: false },
      { text: 'You manage them', ok: false },
      { text: 'No account manager', ok: false },
    ],
  },
  {
    label: 'Nova Protocols',
    icon: <Zap />,
    highlight: true,
    traits: [
      { text: 'Full-stack service suite', ok: true },
      { text: 'Dedicated delivery team', ok: true },
      { text: 'NDA + 100% white label', ok: true },
      { text: 'Branded reporting included', ok: true },
      { text: 'Fully self-managing', ok: true },
      { text: 'Dedicated account manager', ok: true },
    ],
  },
  {
    label: 'In-House Hire',
    icon: <Building />,
    traits: [
      { text: 'One skill set', ok: false },
      { text: 'Fixed capacity', ok: false },
      { text: 'High overhead costs', ok: false },
      { text: 'Onboarding time: weeks', ok: false },
      { text: 'Sick days, turnover risk', ok: false },
      { text: 'No scale flexibility', ok: false },
    ],
  },
]

const differentiators = [
  {
    num: '01',
    title: 'We only serve agencies.',
    desc: 'We don\'t have direct clients. Your competitors are not our clients. We exist entirely in the white-label layer — which means our incentives perfectly align with yours.',
  },
  {
    num: '02',
    title: 'Zero-footprint delivery.',
    desc: 'Not a single file, email, or invoice leaves our team with Nova Protocols branding. We operate behind a complete identity blackout — your brand, your name, your story.',
  },
  {
    num: '03',
    title: 'One contact, full accountability.',
    desc: 'You get a dedicated partner manager who knows your clients, your standards, and your tone. No ticket queues. No support bots. A real person who answers.',
  },
]

export default function Difference() {
  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionPre text="Why Nova Protocols" className="fu" centered />
          <h2
            className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
            data-d="1"
          >
            Not all white-label
            <br />
            partners are equal.
          </h2>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-3 gap-4 mb-20 max-xl:grid-cols-1 fu" data-d="2">
          {comparisons.map((col) => (
            <div
              key={col.label}
              className={`rounded-[14px] border overflow-hidden ${col.highlight
                ? 'border-cyan-border'
                : 'border-rule'
                }`}
              style={
                col.highlight
                  ? { background: 'linear-gradient(160deg, rgba(108,54,122,0.10), var(--ink2))' }
                  : { background: 'var(--ink)' }
              }
            >
              {/* Cyan top gradient line on highlight */}
              {col.highlight && (
                <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
              )}

              {/* Column header */}
              <div
                className={`px-7 py-5 border-b ${col.highlight ? 'border-cyan-border' : 'border-rule'} flex items-center gap-3`}
              >
                <span className="text-[22px]">{col.icon}</span>
                <span
                  className={`font-head text-[16px] font-bold tracking-[-0.2px] ${col.highlight ? 'text-cyan' : 'text-np-text-muted'}`}
                >
                  {col.label}
                </span>
                {col.highlight && (
                  <span className="ml-auto font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[2px] rounded-[3px] tracking-[0.5px] uppercase">
                    Recommended
                  </span>
                )}
              </div>

              {/* Trait rows */}
              <div className="px-7 py-5 flex flex-col gap-[14px]">
                {col.traits.map((trait) => (
                  <div key={trait.text} className="flex items-center gap-3">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${trait.ok
                        ? 'bg-[rgba(0,200,100,0.12)] text-[#00c864] border border-[rgba(0,200,100,0.25)]'
                        : 'bg-[rgba(255,95,87,0.08)] text-[#ff5f57] border border-[rgba(255,95,87,0.2)]'
                        }`}
                    >
                      {trait.ok ? '✓' : '✕'}
                    </span>
                    <span
                      className={`text-[13.5px] ${trait.ok ? 'text-np-text-muted' : 'text-np-text-dim line-through decoration-np-text-dim/40'
                        }`}
                    >
                      {trait.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator deep-dives */}
        <div className="border border-rule rounded-[14px] overflow-hidden">
          <div className="px-8 py-5 border-b border-rule bg-ink-3 flex items-center gap-3">
            <span className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase">
              What makes us different
            </span>
          </div>
          <div className="grid grid-cols-3 max-xl:grid-cols-1">
            {differentiators.map((d, i) => (
              <div
                key={d.num}
                className={`p-8 fu ${i < differentiators.length - 1
                  ? 'border-r border-rule max-xl:border-r-0 max-xl:border-b'
                  : ''
                  }`}
                data-d={i > 0 ? String(i) : undefined}
              >
                <div className="font-mono text-[10px] text-cyan bg-cyan-dim border border-cyan-border px-2 py-1 rounded-[4px] inline-block mb-5 tracking-[0.5px]">
                  {d.num}
                </div>
                <div className="font-head text-[16px] font-bold text-white mb-3 tracking-[-0.2px]">
                  {d.title}
                </div>
                <p className="text-[13.5px] text-np-text-muted leading-[1.7]">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
