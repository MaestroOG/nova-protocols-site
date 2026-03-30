'use client'

import { useState } from 'react'
import SectionPre from '@/components/ui/SectionPre'

const faqs = [
  {
    q: 'Will my clients ever find out about Nova Protocols?',
    a: 'No — and we\'ve engineered it that way from the ground up. Every deliverable, report, email, and client-facing portal carries your branding only. We sign NDAs before any engagement begins, and our internal systems are built to ensure zero cross-contamination between partners.',
  },
  {
    q: 'How do I brief you on a client project?',
    a: 'You submit briefs through your branded partner portal — a simple intake form we configure to match your workflow. Your account manager reviews it within one business day, comes back with any clarifying questions, and then scopes and schedules delivery without you needing to chase anything.',
  },
  {
    q: 'What if the quality isn\'t right for my client?',
    a: 'Every delivery includes revision rounds built into the scope. If something misses the mark, you flag it to your account manager and we iterate until it\'s right — at no extra charge. Our 97% on-time, on-quality track record is built on this commitment.',
  },
  {
    q: 'Do you work with agencies that compete with each other?',
    a: 'Yes, but we operate strict data segregation. No information about your clients, briefs, or strategy is ever visible to another partner. Your client list is confidential, and we never discuss one partner\'s business with another. This is enforced by architecture, not just policy.',
  },
  {
    q: 'What\'s the minimum commitment?',
    a: 'None. We operate month-to-month on retainer services and per-project for one-off work. You can scale up in busy months and pull back in quiet periods. There are no penalties for changing volume and no exit fees.',
  },
  {
    q: 'How does pricing work? Can I see rates upfront?',
    a: 'Pricing is volume-based — the more you resell, the better your rates. We share a full pricing guide in your first discovery call, with no waiting, no vague "get in touch" runarounds. You\'ll have the numbers you need to model margins before you commit to anything.',
  },
  {
    q: 'Can I add or remove services as my agency evolves?',
    a: 'Yes. You\'re not locked into a fixed service set. If you want to start with SEO and add Paid Ads six months later, you simply activate it through your portal. If you need to wind down a service line, there\'s no penalty.',
  },
  {
    q: 'What does onboarding actually involve?',
    a: 'It takes 48 hours. We set up your branded partner portal, import your brand kit (logo, colours, fonts), configure your reporting templates, assign your account manager, and schedule a kickoff call. After that, you\'re ready to submit your first brief.',
  },
]

export default function AgencyFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-[120px] border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-[1fr_600px] gap-16 max-xl:grid-cols-1 max-xl:gap-12">

          {/* Left */}
          <div>
            <SectionPre text="Common Questions" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-5 fu"
              style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}
              data-d="1"
            >
              Everything agencies
              <br />
              ask before signing.
            </h2>
            <p className="text-[15px] text-np-text-muted leading-[1.78] mb-10 fu" data-d="2">
              We've answered thousands of agency questions. These are the ones that come up every single time — answered honestly, without the sales spin.
            </p>
            <div className="p-6 bg-ink-2 border border-rule rounded-[14px] fu" data-d="3">
              <div className="flex items-start gap-4">
                <div className="text-[28px]">💬</div>
                <div>
                  <div className="text-[14px] font-bold text-white mb-1">Still have a question?</div>
                  <div className="text-[13px] text-np-text-muted leading-[1.65] mb-4">
                    Book a 30-minute call with our team. No pitch, no pressure — just honest answers.
                  </div>
                  <a href="/contact" className="font-mono text-[10px] text-cyan border border-cyan-border bg-cyan-dim px-4 py-2 rounded-[6px] tracking-[1px] uppercase hover:bg-cyan hover:text-ink transition-all inline-block">
                    Book a Call →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="border border-rule rounded-[14px] overflow-hidden divide-y divide-rule fu" data-d="1">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-7 py-5 text-left hover:bg-ink-2 transition-colors group"
                >
                  <span className={`text-[14px] font-semibold transition-colors pr-2 ${open === i ? 'text-cyan' : 'text-white group-hover:text-np-text'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] mt-[1px] transition-all ${open === i ? 'border-cyan text-cyan bg-cyan-dim rotate-180' : 'border-rule text-np-text-dim'}`}>
                    ▾
                  </span>
                </button>
                {open === i && (
                  <div className="px-7 pb-6">
                    <p className="text-[13.5px] text-np-text-muted leading-[1.75]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
