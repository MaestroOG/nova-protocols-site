import SectionPre from '@/components/ui/SectionPre'

const values = [
  {
    icon: '🫥',
    title: 'Radical Invisibility',
    desc: 'We take pride in never being seen. If your client ever discovers us, we consider that a failure. Every process, every report, every communication is engineered to look like it came from you.',
    colSpan: 'col-span-5 max-xl:col-span-1',
    accent: true,
    num: '01',
  },
  {
    icon: '🎯',
    title: 'Precision Over Volume',
    desc: 'We don\'t chase project count. We obsess over quality benchmarks, revision turnarounds, and client satisfaction scores. Every deliverable leaves our team reviewed, tested, and polished.',
    colSpan: 'col-span-4 max-xl:col-span-1',
    accent: false,
    num: '02',
  },
  {
    icon: '🤝',
    title: 'Partnership First',
    desc: 'Our success is entirely tied to yours. We don\'t win unless your agency grows. That alignment shapes every decision — from pricing to process to how we handle a missed deadline.',
    colSpan: 'col-span-3 row-span-2 max-xl:col-span-1 max-xl:row-span-1',
    accent: false,
    num: '03',
    gradient: 'linear-gradient(160deg,rgba(108,54,122,0.07),var(--ink2))',
  },
  {
    icon: '⚡',
    title: 'Speed as a Standard',
    desc: 'Agencies live and die by deadlines. We\'ve built our intake, execution, and delivery pipelines so that speed isn\'t a premium — it\'s the baseline. 48-hour onboarding. 3-day avg project turnaround.',
    colSpan: 'col-span-4 max-xl:col-span-1',
    accent: false,
    num: '04',
  },
  {
    icon: '🔒',
    title: 'Confidentiality by Design',
    desc: 'NDAs are signed before a single word is exchanged. Our systems, comms, and team are structured around total discretion.',
    colSpan: 'col-span-5 max-xl:col-span-1',
    accent: false,
    num: '05',
  },
  {
    icon: '📊',
    title: 'Transparent by Default',
    desc: 'With your agency, we operate with complete openness. Real-time project status, honest timelines, plain-language reporting. No smoke, no spin — just facts.',
    colSpan: 'col-span-12 max-xl:col-span-2 max-sm:col-span-1',
    accent: false,
    wide: true,
    num: '06',
  },
]

export default function Values() {
  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule border-b">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="grid grid-cols-2 gap-12 items-end mb-14 max-xl:grid-cols-1">
          <div>
            <SectionPre text="Core Values" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              The principles we
              <br />
              never compromise on.
            </h2>
          </div>
          <p className="text-[15.5px] text-np-text-muted leading-[1.75] fu" data-d="2">
            These aren&apos;t values we put on a wall. They&apos;re the operational rules
            embedded into how we hire, deliver, and measure ourselves every single day.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`${v.colSpan} relative bg-ink border rounded-[14px] p-7 overflow-hidden hover:border-rule-h hover:-translate-y-[2px] transition-all duration-300 fu ${
                v.accent ? 'border-cyan-border' : 'border-rule'
              } ${v.wide ? 'flex items-center gap-12 max-xl:flex-col max-xl:items-start max-xl:gap-6' : ''}`}
              style={
                v.accent
                  ? { background: 'linear-gradient(135deg,rgba(108,54,122,0.10),var(--ink2))' }
                  : v.gradient
                  ? { background: v.gradient }
                  : undefined
              }
              data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : undefined}
            >
              {/* Cyan top line for accent card */}
              {v.accent && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
              )}

              <span className="text-[26px] mb-4 block flex-shrink-0">{v.icon}</span>

              <div className={v.wide ? 'flex-1' : ''}>
                <div className="font-head text-[17px] font-bold text-white mb-2 tracking-[-0.3px]">
                  {v.title}
                </div>
                <div className="text-[13.5px] text-np-text-muted leading-[1.65]">{v.desc}</div>
              </div>

              {/* Ghost number */}
              <div className="bc-num">{v.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
