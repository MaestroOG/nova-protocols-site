import SectionPre from '@/components/ui/SectionPre'

export default function ContactHero() {
  return (
    <section className="relative pt-16 overflow-hidden border-b border-rule">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 70% 0%, rgba(108,54,122,0.09) 0%, transparent 60%)',
        }}
      />
      <div className="absolute top-0 bottom-0 right-[40%] w-px bg-rule pointer-events-none opacity-40" />

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10 py-16">
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-10 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span>›</span>
          <span className="text-cyan">Contact</span>
        </div>

        <div className="max-w-[640px]">
          <SectionPre text="Get in Touch" className="fu in" />
          <h1
            className="font-head font-black leading-[0.95] tracking-[-3px] text-white mb-5 fu in"
            style={{ fontSize: 'clamp(40px,5.5vw,68px)' }}
            data-d="1"
          >
            Let&apos;s talk about
            <br />
            <em className="hero-outline">growing</em> your
            <br />
            <span className="text-cyan">agency.</span>
          </h1>
          <p className="text-[16px] text-np-text-muted leading-[1.75] mb-8 fu in" data-d="2">
            Free agency audit, pricing quote, or just a 30-minute discovery call — we respond within one business day and always start with a genuine conversation, never a hard sell.
          </p>

          {/* Response promise strip */}
          <div className="flex items-center gap-6 font-mono text-[10px] text-np-text-dim tracking-[0.5px] fu in" data-d="3">
            <div className="flex items-center gap-2">
              <span className="text-cyan">⚡</span> Response within 24h
            </div>
            <div className="w-px h-4 bg-rule-h" />
            <div className="flex items-center gap-2">
              <span className="text-cyan">🔒</span> NDA on request
            </div>
            <div className="w-px h-4 bg-rule-h" />
            <div className="flex items-center gap-2">
              <span className="text-cyan">🎯</span> No hard sell
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
