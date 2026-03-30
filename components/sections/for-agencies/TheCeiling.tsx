import SectionPre from '@/components/ui/SectionPre'

const ceilings = [
  {
    icon: '🧱',
    title: 'The Hiring Trap',
    before: 'You win a new client. Great. So you hire a specialist. Salary, onboarding, benefits — £40–60K committed before the client pays invoice two.',
    after: 'With Nova Protocols, you submit a brief. No hire, no overhead. You keep 40–60% margins on every project and scale delivery the same week.',
    cost: '£40–60K / hire',
    fix: 'Zero. Per-project.',
  },
  {
    icon: '⏱️',
    title: 'The Founder Bottleneck',
    before: 'You\'re the account manager, the strategist, the QA reviewer, and the delivery lead. Growth stalls because you can\'t clone yourself.',
    after: 'Your dedicated Nova Protocols account manager handles brief intake, delivery coordination, and revision rounds. You sell, they fulfil.',
    cost: '100% of your time',
    fix: 'You sell. We fulfil.',
  },
  {
    icon: '🚫',
    title: 'The "We Don\'t Do That" Problem',
    before: 'A client asks about SEO, paid ads, or Shopify — services you don\'t offer. You refer them out or lose the account to a full-service competitor.',
    after: 'With five white-label service lines ready to activate, you say yes to every client request — and deliver under your own brand.',
    cost: 'Lost clients, lost revenue',
    fix: 'Say yes to everything.',
  },
  {
    icon: '📅',
    title: 'The Deadline Death March',
    before: 'One sick employee or one unexpectedly complex project ripples across your entire client roster. Deadlines slip. Clients notice.',
    after: 'Nova Protocols operates as a resilient team, not a single point of failure. Built-in redundancy means your deadlines hold, always.',
    cost: 'Client churn',
    fix: '97% on-time rate.',
  },
]

export default function TheCeiling() {
  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule border-b">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="grid grid-cols-2 gap-12 items-end mb-16 max-xl:grid-cols-1">
          <div>
            <SectionPre text="The Agency Ceiling" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Every agency hits it.
              <br />
              Most never break through.
            </h2>
          </div>
          <p className="text-[15.5px] text-np-text-muted leading-[1.78] fu" data-d="2">
            There's a predictable ceiling in every agency's growth journey. It's the point where taking on more work requires taking on more risk — and most owners just stop growing rather than face it.
          </p>
        </div>

        {/* Ceiling cards grid */}
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
          {ceilings.map((c, i) => (
            <div
              key={c.title}
              className="border border-rule rounded-[14px] overflow-hidden bg-ink hover:border-rule-h transition-all duration-300 fu"
              data-d={i % 2 === 1 ? '1' : undefined}
            >
              {/* Header row */}
              <div className="flex items-center gap-3 px-7 py-5 border-b border-rule bg-ink-2">
                <span className="text-[22px]">{c.icon}</span>
                <span className="font-head text-[16px] font-bold text-white tracking-[-0.3px]">{c.title}</span>
              </div>

              <div className="grid grid-cols-2 divide-x divide-rule">
                {/* Before */}
                <div className="p-6">
                  <div className="font-mono text-[9px] text-[#ff5f57] tracking-[2px] uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    Without WL Partner
                  </div>
                  <p className="text-[13px] text-np-text-muted leading-[1.7] mb-4">{c.before}</p>
                  <span className="font-mono text-[10px] text-[#ff5f57] border border-[rgba(255,95,87,0.25)] bg-[rgba(255,95,87,0.07)] px-3 py-[5px] rounded-[4px]">
                    Cost: {c.cost}
                  </span>
                </div>

                {/* After */}
                <div className="p-6" style={{ background: 'rgba(108,54,122,0.05)' }}>
                  <div className="font-mono text-[9px] text-[#00c864] tracking-[2px] uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00c864]" />
                    With Nova Protocols
                  </div>
                  <p className="text-[13px] text-np-text-muted leading-[1.7] mb-4">{c.after}</p>
                  <span className="font-mono text-[10px] text-cyan border border-cyan-border bg-cyan-dim px-3 py-[5px] rounded-[4px]">
                    {c.fix}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
