'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How quickly can we get started?',
    a: 'After an initial call, onboarding takes 48 hours. We set up your branded portal, configure reporting templates, and assign your account manager — then you can submit your first brief.',
  },
  {
    q: 'Will my clients ever find out?',
    a: 'No. Everything we produce — emails, reports, deliverables, portal logins — carries your branding only. We also sign NDAs before any engagement begins.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No lock-in contracts. We work on a month-to-month basis for retainer services, and per-project for one-off engagements. Cancel or pause anytime.',
  },
  {
    q: 'Do you work with agencies outside the UK/US?',
    a: 'Yes — we have active partners in 18 countries including Australia, Canada, South Africa, UAE, and across Europe. Time zones are no barrier.',
  },
]

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'hello@novaprotocols.com', link: 'mailto:hello@novaprotocols.com' },
  { icon: '📅', label: 'Book a Call', value: '30-min discovery — pick a slot', link: '#' },
  { icon: '⚡', label: 'Response Time', value: 'Under 24 hours, guaranteed', link: null },
  { icon: '🌍', label: 'We Serve', value: '18 countries worldwide', link: null },
]

export default function ContactBody() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1500)
  }

  return (
    <section className="py-[100px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-[1fr_520px] gap-16 max-xl:grid-cols-1 max-xl:gap-12">

          {/* LEFT: Sidebar */}
          <div className="flex flex-col gap-10">

            {/* Contact details */}
            <div className="fu">
              <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase mb-6">Contact Details</div>
              <div className="flex flex-col gap-4">
                {contactInfo.map((cd) => (
                  <div key={cd.label} className="flex gap-4 p-5 bg-ink-2 border border-rule rounded-[12px] hover:border-rule-h transition-all group">
                    <div className="w-10 h-10 rounded-[8px] bg-cyan-dim border border-cyan-border flex items-center justify-center text-[16px] flex-shrink-0">
                      {cd.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase mb-1">{cd.label}</div>
                      {cd.link ? (
                        <a href={cd.link} className="text-[14px] font-medium text-white hover:text-cyan transition-colors">{cd.value}</a>
                      ) : (
                        <div className="text-[14px] font-medium text-white">{cd.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="fu" data-d="2">
              <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase mb-6">Common Questions</div>
              <div className="border border-rule rounded-[14px] overflow-hidden divide-y divide-rule">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-ink-2 transition-colors"
                    >
                      <span className="text-[13.5px] font-semibold text-white pr-4">{faq.q}</span>
                      <span className={`text-np-text-dim flex-shrink-0 transition-transform duration-200 text-[12px] ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-[13.5px] text-np-text-muted leading-[1.7]">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust strip */}
            <div className="p-6 bg-ink-2 border border-rule rounded-[14px] fu" data-d="3">
              <div className="flex items-start gap-4">
                <div className="text-[28px]">🛡️</div>
                <div>
                  <div className="text-[14px] font-bold text-white mb-1">Your enquiry is confidential.</div>
                  <div className="text-[13px] text-np-text-muted leading-[1.65]">
                    We sign NDAs before any detailed discussion. Your brief, your clients, and your competitive position are protected from the first email.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Full form */}
          <div className="fu" data-d="1">
            <div className="bg-ink-2 border border-rule rounded-2xl p-9 sticky top-24">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="text-[52px] mb-5">✅</div>
                  <div className="font-head text-[24px] font-bold text-white mb-3">Audit Request Sent!</div>
                  <div className="text-[14px] text-np-text-muted leading-[1.7] max-w-[280px] mx-auto">
                    We&apos;ll review your details and come back to you within 24 hours. Check your inbox.
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-2">
                    <div className="font-head text-[22px] font-bold text-white mb-1">Get a Free Agency Audit</div>
                    <div className="text-[13.5px] text-np-text-muted">Tell us about your agency and what services you want to offer.</div>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2 my-6">
                    <div className="flex-1 h-[2px] bg-cyan rounded-full" />
                    <span className="font-mono text-[9px] text-cyan tracking-[1px]">Free · No commitment</span>
                    <div className="flex-1 h-[2px] bg-rule rounded-full" />
                  </div>

                  {/* Form fields */}
                  <div className="space-y-[14px]">
                    <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                      {[{ label: 'First Name', placeholder: 'Alex', type: 'text' }, { label: 'Last Name', placeholder: 'Kim', type: 'text' }].map((f) => (
                        <div key={f.label} className="flex flex-col gap-[5px]">
                          <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">{f.label}</label>
                          <input type={f.type} placeholder={f.placeholder}
                            className="bg-ink border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full" />
                        </div>
                      ))}
                    </div>

                    {[
                      { label: 'Work Email', placeholder: 'alex@youragency.com', type: 'email' },
                      { label: 'Agency Website', placeholder: 'https://youragency.com', type: 'url' },
                      { label: 'Agency Name', placeholder: 'Crescendo Digital', type: 'text' },
                    ].map((f) => (
                      <div key={f.label} className="flex flex-col gap-[5px]">
                        <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder}
                          className="bg-ink border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full" />
                      </div>
                    ))}

                    <div className="flex flex-col gap-[5px]">
                      <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">Services Interested In</label>
                      <select className="bg-ink border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all appearance-none cursor-pointer w-full" defaultValue="">
                        <option value="" disabled>Select a service...</option>
                        {['White Label Web Development', 'White Label Shopify', 'White Label SEO', 'White Label Paid Ads', 'White Label Social Media', 'Multiple Services'].map((o) => (
                          <option key={o} className="bg-ink-2">{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-[5px]">
                      <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">Number of Active Clients</label>
                      <select className="bg-ink border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all appearance-none cursor-pointer w-full" defaultValue="">
                        <option value="" disabled>Select a range...</option>
                        {['1–5 clients', '6–15 clients', '16–30 clients', '30+ clients'].map((o) => (
                          <option key={o} className="bg-ink-2">{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-[5px]">
                      <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">Tell us about your agency</label>
                      <textarea placeholder="What services do you currently offer? What are you looking to add or scale?" rows={4}
                        className="bg-ink border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full resize-vertical" />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full text-[14.5px] font-bold tracking-[0.2px] py-[14px] px-8 bg-cyan text-ink rounded-lg flex items-center justify-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all disabled:opacity-70 disabled:cursor-wait disabled:transform-none"
                    >
                      {submitting ? 'Sending...' : 'Send My Audit Request →'}
                    </button>

                    <p className="font-mono text-[9px] text-np-text-dim text-center tracking-[0.5px]">
                      We respond within 24 hours. NDA available on request.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
