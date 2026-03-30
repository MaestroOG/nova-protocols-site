import SectionPre from '@/components/ui/SectionPre'
import { scrollTo } from '@/utils/scrollTo'

const features = [
  {
    num: '01',
    title: 'Fully Invisible to Your Clients',
    desc: 'Branded emails, reports, portals — zero Nova Protocols footprint. Your clients think it\'s all you.',
  },
  {
    num: '02',
    title: 'Dedicated Account Management',
    desc: 'One point of contact who knows your clients, your brand, and your delivery standards.',
  },
  {
    num: '03',
    title: 'Scale Without Headcount',
    desc: 'Go from 8 clients to 40 without a single new hire. We flex with your demand, month by month.',
  },
  {
    num: '04',
    title: 'Branded Reporting, Ready to Send',
    desc: 'White label dashboards and monthly reports land in your inbox — ready to forward directly to clients.',
  },
]

const processSteps = [
  {
    n: '1',
    title: 'Agency Onboarding',
    desc: 'Portal setup, brand kit import, and introductory call — done in 48 hours from sign-up.',
  },
  {
    n: '2',
    title: 'Client Brief Submission',
    desc: 'Drop a brief through your portal. We handle scoping, timelines, and follow-up questions.',
  },
  {
    n: '3',
    title: 'Expert Delivery',
    desc: 'Our specialists execute — hitting deadlines, quality benchmarks, and revision rounds.',
  },
  {
    n: '4',
    title: 'Branded Reports, Delivered',
    desc: 'Reports arrive in your inbox under your brand, ready to forward to your client without edits.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] bg-ink-2 border-t border-rule border-b"
    >
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="grid grid-cols-2 max-xl:grid-cols-1">
          {/* Left */}
          <div className="pr-[72px] border-r border-rule flex flex-col justify-center max-xl:pr-0 max-xl:border-r-0 max-xl:border-b max-xl:pb-12 max-xl:mb-0">
            <SectionPre text="For Agencies" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] mb-[14px] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Built for agencies
              <br />
              that want more.
            </h2>
            <p
              className="text-[15.5px] text-np-text-muted leading-[1.75] max-w-[560px] mb-10 fu"
              data-d="2"
            >
              We&apos;re not a freelancer marketplace. We&apos;re a specialist delivery partner built
              exclusively for agencies that want to scale without the operational chaos of in-house
              hiring.
            </p>

            {/* Feature list */}
            <div className="fu" data-d="3">
              {features.map((f, i) => (
                <div
                  key={f.num}
                  className={`flex gap-5 py-6 ${
                    i === 0 ? 'pt-0' : ''
                  } ${i < features.length - 1 ? 'border-b border-rule' : 'pb-0'}`}
                >
                  <span className="font-mono text-[10px] text-cyan bg-cyan-dim border border-cyan-border px-2 py-1 rounded-[4px] h-fit flex-shrink-0 mt-[2px] tracking-[0.5px]">
                    {f.num}
                  </span>
                  <div>
                    <div className="text-[14.5px] font-semibold text-white mb-1">{f.title}</div>
                    <div className="text-[13.5px] text-np-text-muted leading-[1.65]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 fu" data-d="4">
              <button
                onClick={() => scrollTo('partner')}
                className="text-[14.5px] font-bold tracking-[0.2px] py-[14px] px-8 bg-cyan text-ink rounded-lg inline-flex items-center gap-2 hover:bg-[#9B4DAB] hover:shadow-[0_0_40px_rgba(108,54,122,0.50)] hover:-translate-y-[2px] transition-all"
              >
                Become a Partner →
              </button>
            </div>
          </div>

          {/* Right: process visual */}
          <div className="pl-[72px] flex flex-col justify-center fu max-xl:pl-0 max-xl:pt-12" data-d="2">
            <div className="bg-ink-3 border border-rule rounded-[14px] overflow-hidden">
              {/* Bar */}
              <div className="bg-ink-2 border-b border-rule px-5 py-3 flex items-center gap-[10px]">
                <div className="flex gap-[5px]">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">
                  our_process.md
                </span>
              </div>

              {/* Steps */}
              <div className="p-5">
                {processSteps.map((step, i) => (
                  <div
                    key={step.n}
                    className={`flex gap-[14px] py-[14px] relative ${
                      i < processSteps.length - 1 ? 'border-b border-rule' : 'pb-0'
                    }`}
                  >
                    <div className="w-[22px] h-[22px] rounded-full bg-cyan flex items-center justify-center font-mono text-[10px] text-ink font-bold flex-shrink-0 mt-[1px]">
                      {step.n}
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-white mb-[3px]">{step.title}</div>
                      <div className="text-[12.5px] text-np-text-dim leading-[1.5]">{step.desc}</div>
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
