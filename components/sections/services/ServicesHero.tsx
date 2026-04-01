import SectionPre from '@/components/ui/SectionPre'
import { BarChart, Globe, Megaphone, ShoppingBag, Smartphone } from 'lucide-react'

export default function ServicesHero() {
  return (
    <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden pt-16 border-b border-rule">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(108,54,122,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(108,54,122,0.07) 0%, transparent 60%)',
        }}
      />
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-rule opacity-60" />
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-rule opacity-30" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-rule" />
      </div>

      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7 relative z-10 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-12 fu in">
          <a href="/" className="hover:text-cyan transition-colors">Home</a>
          <span>›</span>
          <span className="text-cyan">Services</span>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-xl:grid-cols-1 max-xl:gap-10">
          {/* Left */}
          <div>
            <SectionPre text="White Label Services" className="fu in" />
            <h1
              className="font-head font-black leading-[0.95] tracking-[-3px] text-white mb-7 fu in"
              style={{ fontSize: 'clamp(44px,6vw,76px)' }}
              data-d="1"
            >
              Everything your
              <br />
              agency <em className="hero-outline">needs</em> to
              <br />
              <span className="text-cyan">deliver more.</span>
            </h1>
            <p className="text-[16px] text-np-text-muted leading-[1.75] max-w-[480px] mb-10 fu in" data-d="2">
              Five fully managed service lines, each delivered 100% under your brand. Pick one, pick all — we flex around your agency, not the other way around.
            </p>
            {/* Feature pills */}
            <div className="flex flex-wrap gap-[8px] fu in" data-d="3">
              {['100% White Label', 'NDA on Day One', 'Dedicated Account Manager', 'Branded Reporting', 'No Lock-in'].map((pill) => (
                <span key={pill} className="font-mono text-[10px] text-cyan border border-cyan-border bg-cyan-dim px-3 py-[5px] rounded-[4px] tracking-[0.5px]">
                  ✓ {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: service summary panel */}
          <div className="fu in" data-d="2">
            <div className="bg-ink-2 border border-rule rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-rule bg-ink-3">
                <div className="flex gap-[5px]">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">services_overview.live</span>
              </div>
              <div className="divide-y divide-rule">
                {[
                  { icon: <Globe />, name: 'Web Development', status: 'ACTIVE', projects: '340+' },
                  { icon: <ShoppingBag />, name: 'Shopify Development', status: 'ACTIVE', projects: '180+' },
                  { icon: <BarChart />, name: 'White Label SEO', status: 'ACTIVE', projects: '890+' },
                  { icon: <Megaphone />, name: 'Paid Advertising', status: 'ACTIVE', projects: '410+' },
                  { icon: <Smartphone />, name: 'Social Media Marketing', status: 'ACTIVE', projects: '260+' },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between px-5 py-[13px] hover:bg-ink-3 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-[16px]">{s.icon}</span>
                      <span className="text-[13px] font-medium text-np-text-muted group-hover:text-white transition-colors">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-np-text-dim">{s.projects} delivered</span>
                      <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[2px] rounded-[3px] animate-liveblink">● {s.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
