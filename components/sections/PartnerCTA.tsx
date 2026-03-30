export default function PartnerCTA() {
  return (
    <section id="partner" className="py-[120px] bg-ink-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="relative border border-rule rounded-[20px] py-20 px-20 text-center overflow-hidden bg-ink max-sm:px-6 max-sm:py-12">

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(108,54,122,0.10), transparent)' }} />

          {/* Grid overlay */}
          <div className="partner-grill" />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-[10px] font-mono text-[10px] text-cyan tracking-[2px] uppercase mb-5 fu">
              <span className="w-5 h-px bg-cyan" />
              Become a Partner
              <span className="w-5 h-px bg-cyan" />
            </div>

            <h2
              className="font-head font-black tracking-[-2.5px] text-white leading-[1.05] mb-4 fu"
              style={{ fontSize: 'clamp(32px,4.5vw,56px)' }}
              data-d="1"
            >
              Ready to scale without
              <br />
              the chaos?
            </h2>

            <p className="text-[16px] text-np-text-muted max-w-[480px] mx-auto mb-10 leading-[1.75] fu" data-d="2">
              Join 200+ agencies using Nova Protocols to deliver more, earn more, and stress less. Your first free audit is on us — no commitment required.
            </p>

            <div className="flex gap-[14px] justify-center flex-wrap fu max-sm:flex-col max-sm:items-center" data-d="3">
              <a
                href="/contact"
                className="text-[14.5px] font-bold tracking-[0.2px] py-[14px] px-8 bg-cyan text-ink rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all"
              >
                Apply to Partner →
              </a>
              <a
                href="/contact"
                className="text-[14.5px] font-medium py-[14px] px-8 border border-rule-h text-np-text-muted rounded-lg inline-flex items-center gap-2 hover:border-cyan-border hover:text-np-text transition-all"
              >
                Get a Free Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
