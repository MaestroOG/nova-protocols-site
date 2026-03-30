export default function Mission() {
  return (
    <section className="border-t border-rule border-b bg-ink-2 py-24 relative overflow-hidden">
      {/* Subtle grid grill */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10">
        {/* Mono label */}
        <div className="flex items-center justify-center gap-4 mb-10 fu">
          <span className="w-12 h-px bg-rule-h" />
          <span className="font-mono text-[9px] text-np-text-dim tracking-[3px] uppercase">
            Our Mission
          </span>
          <span className="w-12 h-px bg-rule-h" />
        </div>

        {/* Main manifesto text */}
        <div className="max-w-[900px] mx-auto text-center fu" data-d="1">
          <p
            className="font-head font-black text-white leading-[1.08] tracking-[-2.5px] mb-8"
            style={{ fontSize: 'clamp(28px,4vw,52px)' }}
          >
            We believe every agency deserves to{' '}
            <em className="hero-outline">punch above</em> its weight — delivering
            enterprise-grade work without enterprise-scale costs.
          </p>
        </div>

        {/* Supporting sentence + pull quote */}
        <div className="grid grid-cols-2 gap-16 mt-16 max-xl:grid-cols-1 max-xl:gap-10">
          <div className="fu" data-d="2">
            <p className="text-[15.5px] text-np-text-muted leading-[1.8]">
              Nova Protocols exists to remove the delivery bottleneck that holds growing
              agencies back. We step in as your silent, skilled back office — handling
              everything from development to reporting — so you can focus entirely on
              client relationships and growth.
            </p>
          </div>
          <div className="fu" data-d="3">
            <div className="border-l-2 border-cyan pl-6">
              <p className="text-[15.5px] text-np-text-muted leading-[1.8] italic">
                &ldquo;Your clients should never know we exist. Your competitors should
                never know how you scale. That&apos;s the Nova Protocols promise.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-[6px] bg-cyan-dim border border-cyan-border flex items-center justify-center font-mono text-[10px] text-cyan font-bold">
                  NA
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">Nabeel Ahmad</div>
                  <div className="font-mono text-[9px] text-np-text-dim tracking-[1px]">
                    Founder & COO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
