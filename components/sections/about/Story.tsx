import SectionPre from '@/components/ui/SectionPre'

const milestones = [
  {
    year: '2019',
    title: 'The Problem We Couldn\'t Ignore',
    body: 'Our founders were running a mid-size digital agency and kept hitting the same wall: growth meant hiring, hiring meant overhead, overhead killed margins. They started Nova Protocols to solve it — not just for themselves, but for every agency owner stuck in the same trap.',
    tag: 'Founded',
    accent: true,
  },
  {
    year: '2020',
    title: 'First 50 Partners',
    body: 'Word-of-mouth drove our first wave. Agency owners trusted us because we operated on NDA from day one and never appeared in client-facing materials. By end of 2020 we had 50 partner agencies across the UK and US.',
    tag: '50 Partners',
    accent: false,
  },
  {
    year: '2021',
    title: 'Expanding the Service Stack',
    body: 'We added Paid Advertising and Social Media Management to our core Web Dev + SEO offering — making us a true full-service white label partner. Retention hit 97% as agencies consolidated fulfillment under one roof.',
    tag: 'Full Stack',
    accent: false,
  },
  {
    year: '2022',
    title: 'The Branded Reporting System',
    body: 'We launched our proprietary branded dashboard and automated reporting layer. Partners could now send white label reports to their clients with one click. Net Promoter Score jumped from 61 to 84.',
    tag: 'Tech Launch',
    accent: false,
  },
  {
    year: '2023',
    title: '200+ Agencies, 18 Countries',
    body: 'We crossed the 200-partner milestone and expanded delivery to cover agencies in Australia, Canada, South Africa, and across Europe. 5,000+ projects delivered. Zero branding slip-ups. The invisible engine kept growing.',
    tag: 'Global',
    accent: false,
  },
  {
    year: '2025',
    title: 'The Next Chapter',
    body: 'With AI-assisted SEO pipelines, a new Shopify CRO service, and a self-serve partner portal launching this year — we\'re building the infrastructure to support 500+ agencies by 2026.',
    tag: 'Now',
    accent: false,
    current: true,
  },
]

export default function Story() {
  return (
    <section id="story" className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Section intro */}
        <div className="grid grid-cols-2 gap-12 items-end mb-20 max-xl:grid-cols-1">
          <div>
            <SectionPre text="Our Story" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Built from inside
              <br />
              the problem.
            </h2>
          </div>
          <p className="text-[15.5px] text-np-text-muted leading-[1.75] fu" data-d="2">
            Nova Protocols wasn&apos;t conceived in a boardroom. It was built by agency owners
            who were frustrated by the same ceiling every growing agency hits — and decided
            to tear it down.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-rule max-xl:left-[64px] max-sm:hidden" />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex gap-0 fu ${i < milestones.length - 1 ? '' : ''}`}
                data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : undefined}
              >
                {/* Year + dot */}
                <div className="w-[88px] flex-shrink-0 flex flex-col items-center pt-8 max-xl:w-[64px] max-sm:hidden">
                  <div className="font-mono text-[10px] text-np-text-dim tracking-[1px] mb-3 whitespace-nowrap">
                    {m.year}
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full border-2 flex-shrink-0 z-10 ${
                      m.accent || m.current
                        ? 'border-cyan bg-cyan'
                        : 'border-rule-h bg-ink'
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 ml-10 mb-4 border rounded-[14px] p-7 transition-all duration-300 hover:-translate-y-[2px] max-sm:ml-0 ${
                    m.accent
                      ? 'border-cyan-border bg-ink-2'
                      : m.current
                      ? 'border-rule-h bg-ink-2'
                      : 'border-rule bg-ink-2 hover:border-rule-h'
                  }`}
                  style={
                    m.accent
                      ? { background: 'linear-gradient(135deg,rgba(108,54,122,0.09),var(--ink2))' }
                      : m.current
                      ? { background: 'linear-gradient(135deg,rgba(108,54,122,0.05),var(--ink2))' }
                      : undefined
                  }
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      {/* Mobile year */}
                      <div className="font-mono text-[9px] text-np-text-dim tracking-[1px] mb-2 sm:hidden">
                        {m.year}
                      </div>
                      <div className="font-head text-[17px] font-bold text-white tracking-[-0.3px]">
                        {m.title}
                      </div>
                    </div>
                    <span
                      className={`font-mono text-[9px] tracking-[1px] uppercase px-[10px] py-[3px] rounded-[4px] border flex-shrink-0 ${
                        m.accent || m.current
                          ? 'bg-cyan-dim text-cyan border-cyan-border'
                          : 'bg-white/[0.03] text-np-text-dim border-rule'
                      }`}
                    >
                      {m.current && <span className="animate-liveblink">● </span>}
                      {m.tag}
                    </span>
                  </div>
                  <p className="text-[13.5px] text-np-text-muted leading-[1.7]">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
