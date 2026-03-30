import SectionPre from '@/components/ui/SectionPre'

const agencyTypes = [
  {
    icon: '🌱',
    type: 'Boutique Agencies',
    size: '1–10 people',
    tagline: 'Punch above your weight.',
    desc: 'You win clients that should belong to agencies three times your size — and then you deliver like them too. Nova Protocols gives small teams enterprise-grade delivery capacity without a single hire.',
    useCases: [
      'Add services you don\'t currently offer',
      'Deliver bigger retainers without adding headcount',
      'Keep founder time focused on relationships and sales',
      'Compete against full-service agencies on any pitch',
    ],
    highlight: false,
    delay: undefined,
  },
  {
    icon: '🚀',
    type: 'Growth-Stage Agencies',
    size: '10–40 people',
    tagline: 'Scale without the chaos.',
    desc: 'You\'ve found product-market fit. Clients are coming. The question is how to grow without operations becoming a mess. Nova Protocols is the structured delivery backend that grows with you.',
    useCases: [
      'Handle volume spikes without emergency hires',
      'Expand into new service categories quickly',
      'Standardise quality across a growing client base',
      'Free your best people from execution, into strategy',
    ],
    highlight: true,
    delay: '1',
  },
  {
    icon: '🏛️',
    type: 'Established Agencies',
    size: '40+ people',
    tagline: 'Extend capacity, protect margins.',
    desc: 'You have the brand and client base. The challenge is margin pressure and staying nimble as the market evolves. We handle overflow, specialist services, and new verticals — invisibly.',
    useCases: [
      'White label specialist services you\'d otherwise outsource expensively',
      'Handle new client verticals without new practice leads',
      'Reduce bench costs on slow months without losing capacity',
      'Maintain quality on overflow work without freelancer risk',
    ],
    highlight: false,
    delay: '2',
  },
]

export default function WhoWeWorkWith() {
  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule border-b">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="text-center mb-16">
          <SectionPre text="Who We Work With" centered className="fu" />
          <h2
            className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
            data-d="1"
          >
            Built for every stage
            <br />
            of the agency journey.
          </h2>
          <p className="text-[15.5px] text-np-text-muted leading-[1.78] max-w-[560px] mx-auto mt-4 fu" data-d="2">
            Whether you're a 3-person shop winning your first big retainer, or a 50-person agency protecting margins on specialist work — we have a model for you.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-1">
          {agencyTypes.map((a) => (
            <div
              key={a.type}
              className={`relative rounded-[14px] border overflow-hidden flex flex-col fu hover:-translate-y-[3px] transition-all duration-300 ${a.highlight ? 'border-cyan-border' : 'border-rule'}`}
              style={a.highlight ? { background: 'linear-gradient(160deg, rgba(108,54,122,0.10), var(--ink2))' } : { background: 'var(--ink)' }}
              data-d={a.delay}
            >
              {a.highlight && <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />}

              {/* Header */}
              <div className="px-7 pt-7 pb-5">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[36px]">{a.icon}</span>
                  {a.highlight && (
                    <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[3px] rounded-[3px] tracking-[0.5px] uppercase">Most Common</span>
                  )}
                </div>
                <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase mb-2">{a.size}</div>
                <div className="font-head text-[20px] font-bold text-white mb-1 tracking-[-0.3px]">{a.type}</div>
                <div className={`font-head text-[15px] font-semibold mb-4 ${a.highlight ? 'text-cyan' : 'text-np-text-muted'}`}>{a.tagline}</div>
                <p className="text-[13.5px] text-np-text-muted leading-[1.7]">{a.desc}</p>
              </div>

              {/* Use cases */}
              <div className="mt-auto border-t border-rule px-7 py-6 flex flex-col gap-3">
                <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase mb-1">How agencies like yours use us</div>
                {a.useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-3">
                    <span className="text-cyan text-[11px] mt-[3px] flex-shrink-0">✓</span>
                    <span className="text-[13px] text-np-text-muted leading-[1.55]">{uc}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-7 pb-7 pt-4 border-t border-rule">
                <a
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 text-[13.5px] font-bold py-[11px] rounded-lg transition-all ${a.highlight
                      ? 'bg-cyan text-white hover:bg-[#9B4DAB] hover:shadow-[0_0_24px_rgba(108,54,122,0.40)]'
                      : 'border border-rule-h text-np-text-muted hover:border-cyan-border hover:text-np-text'
                    }`}
                >
                  Start a Conversation →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
