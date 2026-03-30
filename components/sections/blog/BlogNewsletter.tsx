'use client'

import { useState } from 'react'

export default function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    setSent(true)
  }

  return (
    <section className="py-[80px] bg-ink-2 border-t border-rule border-b">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="flex items-center gap-16 max-xl:flex-col max-xl:gap-8 max-xl:text-center">
          <div className="flex-1">
            <div className="font-mono text-[9px] text-cyan tracking-[2px] uppercase mb-3 fu">Agency Insider</div>
            <h3
              className="font-head font-black tracking-[-1.5px] text-white leading-[1.1] mb-3 fu"
              style={{ fontSize: 'clamp(22px,3vw,36px)' }}
              data-d="1"
            >
              Get the playbook in your inbox.
            </h3>
            <p className="text-[14.5px] text-np-text-muted leading-[1.7] fu" data-d="2">
              Monthly growth tactics, white label guides, and industry insights for agency owners. No fluff, no pitch — just the good stuff.
            </p>
          </div>

          <div className="flex-shrink-0 w-full max-w-[420px] fu" data-d="2">
            {sent ? (
              <div className="text-center py-6">
                <div className="text-[32px] mb-3">✅</div>
                <div className="font-head text-[18px] font-bold text-white mb-1">You&apos;re in!</div>
                <div className="text-[13px] text-np-text-muted">First issue lands next month.</div>
              </div>
            ) : (
              <div className="flex gap-3 max-sm:flex-col">
                <input
                  type="email"
                  placeholder="your@agency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  className="flex-1 bg-ink border border-rule rounded-lg px-4 py-[11px] text-[13.5px] text-np-text font-body outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(108,54,122,0.14)] transition-all placeholder:text-np-text-dim"
                />
                <button
                  onClick={handleSubmit}
                  className="text-[13.5px] font-bold text-ink px-6 py-[11px] bg-cyan rounded-lg hover:bg-[#9B4DAB] hover:shadow-[0_0_24px_rgba(108,54,122,0.40)] transition-all whitespace-nowrap"
                >
                  Subscribe →
                </button>
              </div>
            )}
            {!sent && (
              <div className="font-mono text-[9px] text-np-text-dim tracking-[0.5px] mt-3 text-center">
                No spam. Unsubscribe any time.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
