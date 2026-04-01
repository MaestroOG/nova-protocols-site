'use client'

import { useState } from 'react'
import SectionPre from '@/components/ui/SectionPre'
import { Calendar, Mail, Zap } from 'lucide-react'

const contactDetails = [
  {
    icon: <Mail />,
    label: 'Email',
    value: 'team@novaprotocols.com',
    delay: '2',
  },
  {
    icon: <Calendar />,
    label: 'Book a Call',
    value: '30-min discovery, no strings',
    delay: '3',
  },
  {
    icon: <Zap />,
    label: 'Response Time',
    value: 'Under 24 hours, guaranteed',
    delay: '4',
  },
]

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 py-[120px] max-xl:px-7">
        <div className="grid grid-cols-2 gap-20 max-xl:grid-cols-1 max-xl:gap-12">
          {/* Left */}
          <div className="flex flex-col">
            <SectionPre text="Contact" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-[14px] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Let&apos;s talk about
              <br />
              your agency.
            </h2>
            <p className="text-[15.5px] text-np-text-muted leading-[1.75] mb-12 fu" data-d="2">
              Free audit, pricing quote, or just a quick intro call — we respond within one business day
              and always start with a genuine conversation, not a hard sell.
            </p>

            {contactDetails.map((cd) => (
              <div key={cd.label} className="flex gap-4 mb-6 fu" data-d={cd.delay}>
                <div className="w-[42px] h-[42px] rounded-[10px] bg-cyan-dim border border-cyan-border flex items-center justify-center text-[16px] flex-shrink-0">
                  {cd.icon}
                </div>
                <div>
                  <div className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase mb-[3px]">
                    {cd.label}
                  </div>
                  <div className="text-[14.5px] font-medium text-white">{cd.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div className="bg-ink border border-rule rounded-2xl p-9 fu" data-d="2">
            <div className="font-head text-[20px] font-bold text-white mb-1">Get a Free Agency Audit</div>
            <div className="text-[13.5px] text-np-text-muted mb-6">
              Tell us about your agency and what services you want to offer.
            </div>

            {submitted ? (
              <div className="text-center py-16">
                <div className="text-[40px] mb-4">✅</div>
                <div className="font-head text-[20px] font-bold text-white mb-2">Request Sent!</div>
                <div className="text-[13.5px] text-np-text-muted">We&apos;ll be in touch within 24 hours.</div>
              </div>
            ) : (
              <>
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3 mb-[14px] max-sm:grid-cols-1">
                  <div className="flex flex-col gap-[5px]">
                    <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alex"
                      className="bg-ink-2 border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Kim"
                      className="bg-ink-2 border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-[5px] mb-[14px]">
                  <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="alex@youragency.com"
                    className="bg-ink-2 border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full"
                  />
                </div>

                {/* Website */}
                <div className="flex flex-col gap-[5px] mb-[14px]">
                  <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">
                    Agency Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://youragency.com"
                    className="bg-ink-2 border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full"
                  />
                </div>

                {/* Service select */}
                <div className="flex flex-col gap-[5px] mb-[14px]">
                  <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">
                    Services Interested In
                  </label>
                  <select
                    className="bg-ink-2 border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all appearance-none cursor-pointer w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    <option className="bg-ink-2">White Label Web Development</option>
                    <option className="bg-ink-2">White Label Shopify</option>
                    <option className="bg-ink-2">White Label SEO</option>
                    <option className="bg-ink-2">White Label Paid Ads</option>
                    <option className="bg-ink-2">White Label Social Media</option>
                    <option className="bg-ink-2">Multiple Services</option>
                  </select>
                </div>

                {/* Textarea */}
                <div className="flex flex-col gap-[5px] mb-[14px]">
                  <label className="font-mono text-[10px] text-np-text-dim tracking-[1px] uppercase">
                    Tell us about your agency
                  </label>
                  <textarea
                    placeholder="How many clients? What are you looking to expand?"
                    rows={4}
                    className="bg-ink-2 border border-rule rounded-lg px-[14px] py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim w-full resize-vertical"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full text-[14.5px] font-bold tracking-[0.2px] py-[14px] px-8 bg-cyan text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all disabled:opacity-70 disabled:cursor-wait disabled:transform-none"
                >
                  {submitting ? 'Sending...' : 'Send My Audit Request →'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
