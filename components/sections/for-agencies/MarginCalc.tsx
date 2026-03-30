'use client'

import { useState } from 'react'
import SectionPre from '@/components/ui/SectionPre'

const serviceMargins = {
  'Web Development': { cost: 1200, sell: 3500 },
  'White Label SEO': { cost: 600, sell: 1800 },
  'Paid Advertising': { cost: 500, sell: 1400 },
  'Shopify Development': { cost: 900, sell: 2800 },
  'Social Media': { cost: 400, sell: 1100 },
}

type ServiceKey = keyof typeof serviceMargins

export default function MarginCalc() {
  const [service, setService] = useState<ServiceKey>('White Label SEO')
  const [clients, setClients] = useState(5)

  const { cost, sell } = serviceMargins[service]
  const revenue = sell * clients
  const costs   = cost * clients
  const profit  = revenue - costs
  const margin  = Math.round((profit / revenue) * 100)

  return (
    <section className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-[1fr_540px] gap-16 items-center max-xl:grid-cols-1 max-xl:gap-12">

          {/* Left text */}
          <div>
            <SectionPre text="Margin Calculator" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-4 fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              See your margins
              <br />
              before you commit.
            </h2>
            <p className="text-[15.5px] text-np-text-muted leading-[1.78] mb-8 fu" data-d="2">
              Agencies that resell our services typically keep 40–60% margins on every project. This is what that looks like at different volumes and service types.
            </p>
            <div className="flex flex-col gap-3 fu" data-d="3">
              {[
                { icon: '📊', text: 'Pricing is customised to your volume — better rates at scale' },
                { icon: '🔄', text: 'Month-to-month, no lock-in — scale up or down as needed' },
                { icon: '📑', text: 'Full pricing guide shared in your first call, no waiting' },
              ].map((p) => (
                <div key={p.text} className="flex items-start gap-3 p-4 bg-ink-2 border border-rule rounded-[10px]">
                  <span className="text-[16px] flex-shrink-0 mt-[1px]">{p.icon}</span>
                  <span className="text-[13.5px] text-np-text-muted">{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: interactive calculator */}
          <div className="fu" data-d="2">
            <div className="bg-ink-2 border border-rule rounded-2xl overflow-hidden">
              {/* Panel bar */}
              <div className="flex items-center gap-[10px] px-5 py-3 border-b border-rule bg-ink-3">
                <div className="flex gap-[5px]">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">margin_calculator.live</span>
              </div>

              <div className="p-6 space-y-5">
                {/* Service selector */}
                <div>
                  <label className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase block mb-2">Service Type</label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(serviceMargins) as ServiceKey[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setService(s)}
                        className={`font-mono text-[10px] tracking-[0.5px] px-3 py-[6px] rounded-[6px] border transition-all ${
                          service === s
                            ? 'bg-cyan text-ink border-cyan font-bold'
                            : 'text-np-text-dim border-rule hover:border-rule-h hover:text-np-text-muted'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client count slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase">Clients on this service</label>
                    <span className="font-head text-[22px] font-extrabold text-white tracking-[-1px]">{clients}</span>
                  </div>
                  <input
                    type="range" min={1} max={30} value={clients}
                    onChange={(e) => setClients(Number(e.target.value))}
                    className="w-full h-[3px] bg-rule rounded-full appearance-none cursor-pointer accent-cyan"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-np-text-dim mt-1">
                    <span>1 client</span><span>30 clients</span>
                  </div>
                </div>

                {/* Results */}
                <div className="border border-rule rounded-[12px] overflow-hidden">
                  {[
                    { label: 'Your sell price / client', value: `£${sell.toLocaleString()}`, sub: 'per month', color: '' },
                    { label: 'Nova Protocols cost / client', value: `£${cost.toLocaleString()}`, sub: 'per month', color: 'text-np-text-dim' },
                    { label: 'Total monthly revenue', value: `£${revenue.toLocaleString()}`, sub: `${clients} clients`, color: '' },
                    { label: 'Total monthly profit', value: `£${profit.toLocaleString()}`, sub: `${margin}% margin`, color: 'text-[#00c864]' },
                  ].map((row, i) => (
                    <div key={row.label} className={`flex items-center justify-between px-5 py-4 ${i < 3 ? 'border-b border-rule' : ''} ${i === 3 ? 'bg-[rgba(0,200,100,0.04)]' : ''}`}>
                      <div>
                        <div className="text-[12.5px] text-np-text-muted">{row.label}</div>
                        <div className="font-mono text-[9px] text-np-text-dim tracking-[0.5px]">{row.sub}</div>
                      </div>
                      <div className={`font-head text-[22px] font-extrabold tracking-[-1px] ${row.color || 'text-white'}`}>
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Margin bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] text-np-text-dim tracking-[1px] uppercase">Margin</span>
                    <span className="font-mono text-[11px] text-[#00c864] font-bold">{margin}%</span>
                  </div>
                  <div className="h-2 bg-ink-3 rounded-full overflow-hidden border border-rule">
                    <div
                      className="h-full bg-[#00c864] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(margin, 100)}%` }}
                    />
                  </div>
                </div>

                <a href="/contact" className="w-full flex items-center justify-center gap-2 text-[13.5px] font-bold py-[13px] bg-cyan text-ink rounded-lg hover:bg-[#9B4DAB] hover:shadow-[0_0_24px_rgba(108,54,122,0.40)] transition-all">
                  Get Your Custom Quote →
                </a>
              </div>
            </div>

            <p className="font-mono text-[9px] text-np-text-dim text-center mt-3 tracking-[0.5px]">
              Estimates only. Actual pricing varies by volume and service mix.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
