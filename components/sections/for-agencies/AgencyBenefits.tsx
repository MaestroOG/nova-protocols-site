import SectionPre from '@/components/ui/SectionPre'

const benefits = [
  {
    icon: '🫥',
    title: '100% Invisible to Your Clients',
    desc: 'Not a single file, email, or invoice leaves our team with Nova Protocols branding. Branded portals, reports, and communications — all carrying your name.',
    tags: ['NDA on day one', 'Zero footprint', 'Branded reports'],
    wide: false,
    accent: true,
    col: 'col-span-5 max-xl:col-span-1',
    num: '01',
  },
  {
    icon: '📊',
    title: 'White Label Reporting, Ready to Forward',
    desc: 'Branded dashboards and monthly performance reports arrive in your inbox — formatted under your logo, ready to send directly to your clients without a single edit.',
    tags: ['Branded PDF', 'Live dashboards', 'Monthly cadence'],
    wide: false,
    accent: false,
    col: 'col-span-4 max-xl:col-span-1',
    num: '02',
  },
  {
    icon: '⚡',
    title: '48-Hour Onboarding',
    desc: 'Portal setup, brand kit import, account manager assignment, and your first brief intake — all completed within 48 hours of signing. No lengthy discovery phase, no bloated kickoff decks.',
    tags: ['Portal live in 48h', 'Brand kit imported', 'Brief ready to submit'],
    wide: false,
    accent: false,
    col: 'col-span-3 row-span-2 max-xl:col-span-1 max-xl:row-span-1',
    num: '03',
    gradient: 'linear-gradient(160deg, rgba(108,54,122,0.08), var(--ink2))',
  },
  {
    icon: '💬',
    title: 'One Dedicated Account Manager',
    desc: 'Not a helpdesk. Not a ticket queue. A real person who knows your agency, your clients, your tone, and your standards — available directly, every working day.',
    tags: ['Direct contact', 'Knows your clients', 'Daily availability'],
    wide: false,
    accent: false,
    col: 'col-span-4 max-xl:col-span-1',
    num: '04',
  },
  {
    icon: '📈',
    title: 'Scale Without the Headcount Risk',
    desc: 'Go from 8 to 40 clients without a single new hire. We flex with your demand — increase volume in growth months, pull back in quiet periods. No redundancy packages.',
    tags: ['No long-term contracts', 'Monthly flex', 'No HR overhead'],
    wide: false,
    accent: false,
    col: 'col-span-5 max-xl:col-span-1',
    num: '05',
  },
  {
    icon: '🛡️',
    title: 'Confidentiality Guaranteed — By Architecture',
    desc: 'We\'ve built our systems, processes, and team structure around total discretion. Your client list, briefs, and strategy are never shared, stored carelessly, or at risk of exposure.',
    wide: true,
    accent: false,
    col: 'col-span-12 max-xl:col-span-2 max-sm:col-span-1',
    num: '06',
    tags: ['Data segregation', 'NDA enforced', 'Secure portals'],
  },
]

export default function AgencyBenefits() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="grid grid-cols-2 gap-12 items-end mb-14 max-xl:grid-cols-1">
          <div>
            <SectionPre text="What You Get" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Built around how
              <br />
              agencies actually work.
            </h2>
          </div>
          <p className="text-[15.5px] text-np-text-muted leading-[1.78] fu" data-d="2">
            Every benefit below was designed by people who've run agencies. We know what actually matters — and what just looks good on a sales page.
          </p>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-12 gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`${b.col} relative bg-ink-2 border rounded-[14px] p-7 overflow-hidden hover:border-rule-h hover:-translate-y-[2px] transition-all duration-300 fu ${b.accent ? 'border-cyan-border' : 'border-rule'} ${b.wide ? 'flex items-center gap-16 max-xl:flex-col max-xl:items-start max-xl:gap-6' : ''}`}
              style={
                b.accent
                  ? { background: 'linear-gradient(135deg, rgba(108,54,122,0.10), var(--ink2))' }
                  : b.gradient
                  ? { background: b.gradient }
                  : undefined
              }
              data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : undefined}
            >
              {b.accent && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />}
              <span className="text-[26px] mb-4 block flex-shrink-0">{b.icon}</span>
              <div className={b.wide ? 'flex-1' : ''}>
                <div className="font-head text-[17px] font-bold text-white mb-2 tracking-[-0.3px]">{b.title}</div>
                <div className="text-[13.5px] text-np-text-muted leading-[1.65] mb-4">{b.desc}</div>
                <div className="flex flex-wrap gap-[5px]">
                  {b.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] border border-cyan-border text-cyan bg-cyan-dim px-[9px] py-[3px] rounded-[3px] tracking-[0.3px]">✓ {t}</span>
                  ))}
                </div>
              </div>
              <div className="bc-num">{b.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
