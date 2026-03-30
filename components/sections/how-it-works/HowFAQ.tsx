'use client'

import { useState } from 'react'
import SectionPre from '@/components/ui/SectionPre'

const faqs = [
  {
    q: 'How long does onboarding actually take?',
    a: '48 hours from confirmation — not from the day you sign, from the day we confirm your application. Portal setup, brand kit import, reporting template configuration, and account manager introduction are all completed within that window. You\'ll be ready to submit your first brief by day three.',
  },
  {
    q: 'What do I need to prepare for the intro call?',
    a: 'Very little. A rough idea of your agency\'s size, current service offering, and what you\'re looking to add is enough. We run the call — no deck required from you, no lengthy questionnaires beforehand. The call takes 30 minutes and we come back with a partnership proposal within 24 hours.',
  },
  {
    q: 'How detailed does a brief need to be?',
    a: 'Enough for us to scope accurately — client background, the goal of the project, any constraints, and your desired timeline. Your account manager will ask clarifying questions in one round if anything\'s missing. We\'ve built the intake form to prompt the right information so you don\'t need to think about format.',
  },
  {
    q: 'What happens if a deadline is missed?',
    a: 'It\'s rare — our on-time rate sits at 97.2% — but when it happens, your account manager contacts you proactively, explains the situation, and gives a revised timeline before the deadline passes. We don\'t wait for you to chase. There\'s no penalty to you; the revision timeline is extended at no cost.',
  },
  {
    q: 'Can I brief for multiple clients at the same time?',
    a: 'Yes. There\'s no limit to concurrent projects. Your portal handles all client briefs in separate, clearly labelled workstreams. Your account manager coordinates delivery across all of them and flags any scheduling conflicts before they become problems.',
  },
  {
    q: 'How are revisions handled?',
    a: 'Every project includes revision rounds — the number depends on project type (typically 2–3 rounds, unlimited for smaller fixes). You submit feedback through your portal, your account manager routes it to the delivery team, and revised work comes back within 48 hours. There are no extra charges for revisions within scope.',
  },
  {
    q: 'What does the monthly report look like?',
    a: 'A polished PDF under your logo and brand colours. For SEO it covers keyword rankings, organic traffic, backlinks built, and next-month plan. For paid ads it covers spend, ROAS, leads, and creative performance. For social it covers reach, engagement, and content performance. Formatted so you can forward it directly — no editing required.',
  },
]

export default function HowFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="text-center mb-14">
          <SectionPre text="Process FAQ" centered className="fu" />
          <h2
            className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
            style={{ fontSize: 'clamp(30px,4vw,50px)' }}
            data-d="1"
          >
            Questions about
            <br />
            the process itself.
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="border border-rule rounded-[14px] overflow-hidden divide-y divide-rule fu">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-7 py-5 text-left hover:bg-ink-3 transition-colors group"
                >
                  <span className={`text-[14px] font-semibold transition-colors pr-2 ${open === i ? 'text-cyan' : 'text-white group-hover:text-np-text'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] mt-[1px] transition-all duration-200 ${open === i ? 'border-cyan text-cyan bg-cyan-dim rotate-180' : 'border-rule text-np-text-dim'}`}>
                    ▾
                  </span>
                </button>
                {open === i && (
                  <div className="px-7 pb-6 bg-ink-3">
                    <p className="text-[13.5px] text-np-text-muted leading-[1.78]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center fu">
            <p className="text-[14px] text-np-text-muted mb-5">Still have a question about our process?</p>
            <a
              href="/contact"
              className="text-[14.5px] font-bold py-[14px] px-8 bg-cyan text-ink rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all"
            >
              Book a 30-Minute Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
