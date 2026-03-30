import SectionPre from '@/components/ui/SectionPre'

const portalFeatures = [
  {
    icon: '📥',
    title: 'Branded Brief Intake',
    desc: 'Submit client projects through a form that carries your agency name. Every brief is structured to capture exactly what our team needs to execute without back-and-forth.',
  },
  {
    icon: '📊',
    title: 'Live Project Tracking',
    desc: 'See the real-time status of every active project — brief received, in production, in review, delivered. No chasing, no status emails.',
  },
  {
    icon: '📄',
    title: 'White Label Report Library',
    desc: 'All monthly reports are stored in your portal, branded with your logo. Download, forward to clients, or link them directly — they never see ours.',
  },
  {
    icon: '💬',
    title: 'Direct Account Manager Chat',
    desc: 'Message your account manager directly from the portal. No ticket queue, no support bot. A real conversation with someone who knows your business.',
  },
  {
    icon: '🔒',
    title: 'Secure Client Folders',
    desc: 'Client briefs, deliverables, and history are separated by client — no cross-contamination, fully searchable, always accessible.',
  },
  {
    icon: '🔔',
    title: 'Delivery Notifications',
    desc: 'Instant notifications when deliverables are ready, reports are generated, or your account manager needs a quick decision from you.',
  },
]

export default function ThePortal() {
  return (
    <section className="py-[120px] bg-ink-2 border-t border-rule border-b">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-[1fr_480px] gap-16 items-start max-xl:grid-cols-1 max-xl:gap-12">

          {/* Left */}
          <div>
            <SectionPre text="The Partner Portal" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-4 fu"
              style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}
              data-d="1"
            >
              Your command centre.
              <br />
              Branded as yours.
            </h2>
            <p className="text-[15.5px] text-np-text-muted leading-[1.78] mb-10 fu" data-d="2">
              Every agency partner gets a dedicated portal configured with their branding. It&apos;s where you submit briefs, track delivery, download reports, and communicate — all in one place, all under your name.
            </p>

            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {portalFeatures.map((f, i) => (
                <div
                  key={f.title}
                  className="p-5 bg-ink border border-rule rounded-[12px] hover:border-rule-h hover:-translate-y-[1px] transition-all duration-300 fu"
                  data-d={i % 2 === 1 ? '1' : undefined}
                >
                  <div className="text-[20px] mb-3">{f.icon}</div>
                  <div className="text-[14px] font-semibold text-white mb-2">{f.title}</div>
                  <div className="text-[12.5px] text-np-text-muted leading-[1.65]">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portal mockup */}
          <div className="sticky top-24 fu" data-d="2">
            <div className="bg-ink border border-rule rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              {/* Portal chrome */}
              <div className="flex items-center gap-[10px] px-5 py-3 border-b border-rule bg-ink-2">
                <div className="flex gap-[5px]">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center font-mono text-[9px] text-np-text-dim tracking-[1px]">partner.youragency.com/portal</div>
              </div>

              {/* Sidebar + content */}
              <div className="flex" style={{ minHeight: '400px' }}>
                {/* Sidebar */}
                <div className="w-14 flex flex-col items-center gap-4 py-5 border-r border-rule bg-ink-2">
                  {['📥', '📊', '📄', '💬', '🔒'].map((icon, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-[8px] flex items-center justify-center text-[14px] transition-all cursor-pointer ${i === 0 ? 'bg-cyan-dim border border-cyan-border' : 'hover:bg-ink-3'}`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase">Active Projects</div>
                    <span className="font-mono text-[9px] text-cyan border border-cyan-border bg-cyan-dim px-2 py-[2px] rounded-[3px] animate-liveblink">● LIVE</span>
                  </div>

                  {[
                    { client: '[Client A]', service: 'SEO Retainer', status: 'In Progress', pct: 72 },
                    { client: '[Client B]', service: 'Web Development', status: 'In Review', pct: 95 },
                    { client: '[Client C]', service: 'Meta Ads', status: 'Delivered', pct: 100 },
                    { client: '[Client D]', service: 'Shopify CRO', status: 'Brief Received', pct: 15 },
                  ].map((proj, i) => (
                    <div key={i} className="mb-4 p-3 bg-ink-2 border border-rule rounded-[8px] hover:border-rule-h transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-[12px] font-semibold text-white">{proj.client}</div>
                          <div className="font-mono text-[9px] text-np-text-dim tracking-[0.5px]">{proj.service}</div>
                        </div>
                        <span className={`font-mono text-[9px] px-2 py-[2px] rounded-[3px] border ${
                          proj.pct === 100
                            ? 'text-[#00c864] border-[rgba(0,200,100,0.25)] bg-[rgba(0,200,100,0.07)]'
                            : proj.pct > 50
                            ? 'text-cyan border-cyan-border bg-cyan-dim'
                            : 'text-np-text-dim border-rule'
                        }`}>
                          {proj.status}
                        </span>
                      </div>
                      <div className="h-[3px] bg-ink-3 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${proj.pct === 100 ? 'bg-[#00c864]' : 'bg-cyan'}`}
                          style={{ width: `${proj.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-rule px-5 py-3 flex items-center justify-between bg-ink-2">
                <span className="font-mono text-[9px] text-np-text-dim">Powered by Nova Protocols</span>
                <span className="font-mono text-[9px] text-cyan">Your Agency Name · 4 active projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
