import SectionPre from '@/components/ui/SectionPre'

const steps = [
  {
    n: '01',
    icon: '🤝',
    title: 'Apply to Partner',
    subtitle: 'Takes 5 minutes. We respond in under 24 hours.',
    desc: 'Fill out a short application about your agency — size, current services, and what you\'re looking to add. No lengthy questionnaires, no deck required. We review every application personally and come back within one business day.',
    what: [
      'Submit your agency profile via our application form',
      'We review fit and reach out to schedule a 30-min intro call',
      'Intro call covers your goals, client types, and how we\'d work together',
      'NDA is signed — everything from here is confidential',
    ],
    timing: 'Day 0 — 24 hours to response',
    badge: 'STEP 01',
    flip: false,
    accent: true,
    visual: {
      type: 'checklist',
      items: [
        { label: 'Application submitted', done: true },
        { label: 'Team reviews fit', done: true },
        { label: 'Intro call scheduled', done: true },
        { label: 'NDA signed', done: false, active: true },
      ],
    },
  },
  {
    n: '02',
    icon: '⚙️',
    title: 'Portal Setup & Onboarding',
    subtitle: 'Your branded workspace, live in 48 hours.',
    desc: 'Once you\'re confirmed as a partner, we configure your white label portal from scratch. We import your brand kit, set up your reporting templates, configure your brief intake, and assign your dedicated account manager — all within 48 hours.',
    what: [
      'Branded partner portal configured with your logo and colours',
      'Reporting templates set up in your brand style',
      'Brief intake forms customised to your workflow',
      'Dedicated account manager introduced via direct message',
    ],
    timing: 'Day 1–2 — portal live in 48 hours',
    badge: 'STEP 02',
    flip: true,
    accent: false,
    visual: {
      type: 'portal',
      items: [
        { label: 'portal_config', value: 'Complete' },
        { label: 'brand_kit', value: 'Imported' },
        { label: 'account_manager', value: 'Assigned' },
        { label: 'brief_intake', value: 'Ready' },
      ],
    },
  },
  {
    n: '03',
    icon: '📋',
    title: 'Submit Projects',
    subtitle: 'Drop a brief. We handle the rest.',
    desc: 'Once your portal is live, submitting work is simple. Fill in a brief through your intake form — service type, client background, goals, timeline. Your account manager picks it up, scopes the work, and confirms delivery timeline without you needing to chase anything.',
    what: [
      'Submit brief via your branded portal intake form',
      'Account manager reviews and acknowledges within 4 hours',
      'Any clarifying questions resolved in one round',
      'Delivery timeline confirmed and project kicked off',
    ],
    timing: 'Day 3+ — 4 hour acknowledgement SLA',
    badge: 'STEP 03',
    flip: false,
    accent: false,
    visual: {
      type: 'brief',
      items: [
        { label: 'service_type', value: 'White Label SEO' },
        { label: 'client_name', value: '[Your Client]' },
        { label: 'timeline', value: '30 days' },
        { label: 'status', value: 'In Progress' },
      ],
    },
  },
  {
    n: '04',
    icon: '🚀',
    title: 'Delivery & Branded Reporting',
    subtitle: 'Results delivered. Reports ready to forward.',
    desc: 'Our specialists execute the work to agreed timelines and quality standards. On completion, deliverables are packaged and sent to you ready for client delivery. Monthly reports arrive in your inbox under your branding — formatted, polished, and ready to forward without a single edit.',
    what: [
      'Work executed by specialists to agreed quality benchmarks',
      'Revision rounds included — we iterate until it\'s right',
      'Deliverables packaged under your brand name',
      'Monthly branded report lands in your inbox, client-ready',
    ],
    timing: 'Day 5–21 depending on scope',
    badge: 'STEP 04',
    flip: true,
    accent: true,
    visual: {
      type: 'report',
      items: [
        { label: 'deliverable', value: 'Sent ✓' },
        { label: 'revision_rounds', value: '2 / Unlimited' },
        { label: 'client_report', value: 'Branded PDF' },
        { label: 'next_cycle', value: 'Scheduled' },
      ],
    },
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="text-center mb-16">
          <SectionPre text="Step by Step" centered className="fu" />
          <h2
            className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
            data-d="1"
          >
            Every step, explained.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.n}
              className={`border rounded-[16px] overflow-hidden fu ${step.accent ? 'border-cyan-border' : 'border-rule'}`}
              style={step.accent ? { background: 'linear-gradient(135deg, rgba(108,54,122,0.08), var(--ink2))' } : { background: 'var(--ink2)' }}
              data-d={idx % 2 === 1 ? '1' : undefined}
            >
              {step.accent && <div className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />}

              <div className={`grid grid-cols-[1fr_400px] max-xl:grid-cols-1 ${step.flip ? 'max-xl:flex max-xl:flex-col' : ''}`}>
                {/* Text side */}
                <div className={`p-10 max-xl:p-7 ${step.flip ? 'order-2 max-xl:order-2' : ''}`}>
                  {/* Step badge + number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[3px] rounded-[3px] tracking-[1px]">{step.badge}</span>
                    <span className="text-[22px]">{step.icon}</span>
                  </div>

                  <h3 className="font-head text-[28px] font-black tracking-[-1px] text-white mb-1 max-xl:text-[22px]">
                    {step.title}
                  </h3>
                  <div className="font-mono text-[10px] text-cyan tracking-[1px] mb-5">{step.subtitle}</div>
                  <p className="text-[14.5px] text-np-text-muted leading-[1.78] mb-7">{step.desc}</p>

                  {/* What happens list */}
                  <div className="space-y-3 mb-6">
                    {step.what.map((w, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-cyan flex items-center justify-center font-mono text-[9px] text-ink font-bold flex-shrink-0 mt-[1px]">
                          {i + 1}
                        </div>
                        <span className="text-[13.5px] text-np-text-muted">{w}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timing pill */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-np-text-dim tracking-[1px] uppercase">Timing:</span>
                    <span className="font-mono text-[10px] text-cyan border border-cyan-border bg-cyan-dim px-3 py-[5px] rounded-[4px]">{step.timing}</span>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`border-l border-rule flex flex-col justify-center p-8 max-xl:border-l-0 max-xl:border-t max-xl:p-7 ${step.flip ? 'order-1 max-xl:order-1' : ''}`}>
                  <div className="bg-ink-3 border border-rule rounded-[12px] overflow-hidden">
                    <div className="flex items-center gap-[10px] px-4 py-3 border-b border-rule bg-ink-2">
                      <div className="flex gap-[5px]">
                        <div className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
                        <div className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
                        <div className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
                      </div>
                      <span className="font-mono text-[9px] text-np-text-dim tracking-[1px] uppercase">step_{step.n}.status</span>
                    </div>
                    <div className="p-4 space-y-[1px]">
                      {step.visual.items.map((item) => (
                        <div
                          key={item.label}
                          className={`flex items-center justify-between px-4 py-3 rounded-[6px] ${'active' in item && item.active ? 'bg-cyan-dim border border-cyan-border' : 'hover:bg-ink-2'} transition-colors`}
                        >
                          <span className={`font-mono text-[11px] ${'active' in item && item.active ? 'text-cyan' : 'text-np-text-muted'}`}>{item.label}</span>
                          {'done' in item ? (
                            <span className={`font-mono text-[10px] px-2 py-[2px] rounded-[3px] ${
                              item.done
                                ? 'text-[#00c864] border border-[rgba(0,200,100,0.25)] bg-[rgba(0,200,100,0.07)]'
                                : 'text-cyan border border-cyan-border bg-cyan-dim animate-liveblink'
                            }`}>
                              {item.done ? '✓ Done' : '● Pending'}
                            </span>
                          ) : (
                            <span className="font-head text-[14px] font-bold text-white">{item.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
