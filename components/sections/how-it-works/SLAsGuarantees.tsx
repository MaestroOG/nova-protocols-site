import SectionPre from '@/components/ui/SectionPre'

const slas = [
  {
    category: 'Response & Communication',
    rows: [
      { commitment: 'Brief acknowledgement', sla: '< 4 business hours', track: '99.1%', status: 'green' },
      { commitment: 'Account manager response', sla: '< 2 business hours', track: '98.6%', status: 'green' },
      { commitment: 'Scope & timeline confirmed', sla: '< 1 business day', track: '97.3%', status: 'green' },
    ],
  },
  {
    category: 'Delivery',
    rows: [
      { commitment: 'On-time project delivery', sla: '97% target', track: '97.2%', status: 'green' },
      { commitment: 'Revision turnaround', sla: '< 48 hours', track: '96.8%', status: 'green' },
      { commitment: 'Final delivery packaging', sla: 'Same day as approval', track: '99.4%', status: 'green' },
    ],
  },
  {
    category: 'Reporting',
    rows: [
      { commitment: 'Monthly report delivery', sla: '1st–5th of each month', track: '100%', status: 'green' },
      { commitment: 'Report accuracy guarantee', sla: 'Full data audit on request', track: '100%', status: 'green' },
      { commitment: 'White label formatting', sla: 'Your brand, every time', track: '100%', status: 'green' },
    ],
  },
  {
    category: 'Confidentiality',
    rows: [
      { commitment: 'NDA execution', sla: 'Before any work begins', track: '100%', status: 'green' },
      { commitment: 'Client data separation', sla: 'Architectural — not policy', track: '100%', status: 'green' },
      { commitment: 'Brand footprint on deliverables', sla: 'Zero. Guaranteed.', track: '0 breaches', status: 'green' },
    ],
  },
]

export default function SLAsGuarantees() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-2 gap-12 items-end mb-14 max-xl:grid-cols-1">
          <div>
            <SectionPre text="SLAs & Guarantees" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Commitments we hold
              <br />
              ourselves to, publicly.
            </h2>
          </div>
          <p className="text-[15.5px] text-np-text-muted leading-[1.78] fu" data-d="2">
            We don&apos;t just say &ldquo;we&apos;re reliable.&rdquo; Here are the specific service level agreements every partner receives — and our actual track record against each one.
          </p>
        </div>

        <div className="space-y-4">
          {slas.map((group, gi) => (
            <div key={group.category} className="border border-rule rounded-[14px] overflow-hidden fu" data-d={gi % 2 === 1 ? '1' : undefined}>
              {/* Category header */}
              <div className="px-6 py-4 bg-ink-2 border-b border-rule flex items-center gap-3">
                <span className="font-mono text-[9px] text-cyan tracking-[2px] uppercase">{group.category}</span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-rule">
                {group.rows.map((row) => (
                  <div key={row.commitment} className="grid grid-cols-[1fr_200px_160px_80px] items-center px-6 py-4 hover:bg-ink-2 transition-colors max-xl:grid-cols-[1fr_auto] max-xl:gap-3">
                    <div className="text-[14px] text-np-text-muted font-medium">{row.commitment}</div>
                    <div className="font-mono text-[11px] text-np-text-dim max-xl:hidden">{row.sla}</div>
                    <div className="font-mono text-[11px] text-[#00c864] max-xl:hidden">{row.track}</div>
                    <div className="flex items-center justify-end">
                      <span className="w-2 h-2 rounded-full bg-[#00c864]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-center gap-4 p-5 bg-ink-2 border border-rule rounded-[12px] fu">
          <span className="text-[20px]">📊</span>
          <div className="text-[13px] text-np-text-muted">
            Track record data is calculated across all active partner accounts, rolling 12-month period. Updated quarterly. Available in full on request.
          </div>
        </div>
      </div>
    </section>
  )
}
