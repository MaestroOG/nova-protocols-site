import SectionPre from '@/components/ui/SectionPre'
import { Handshake, Settings, Clipboard, Rocket } from 'lucide-react'


const steps = [
  {
    n: '01',
    icon: <Handshake />,
    title: 'Apply to Partner',
    desc: "Fill out a brief application. We'll qualify your agency and schedule an intro call within 24 hours.",
    badge: 'STEP 01',
  },
  {
    n: '02',
    icon: <Settings />,
    title: 'Setup Your Portal',
    desc: 'We configure your white label workspace, branded dashboards, and reporting templates in your name.',
    badge: 'STEP 02',
  },
  {
    n: '03',
    icon: <Clipboard />,
    title: 'Submit Projects',
    desc: 'Drop briefs through our streamlined intake. We scope, schedule, and execute with no micromanagement needed.',
    badge: 'STEP 03',
  },
  {
    n: '04',
    icon: <Rocket />,
    title: 'Deliver & Scale',
    desc: 'Polished deliverables arrive under your brand. Rinse, repeat, and scale your agency revenue without limits.',
    badge: 'STEP 04',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="grid grid-cols-2 gap-12 items-end mb-[72px] max-xl:grid-cols-1">
          <div>
            <SectionPre text="How It Works" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              Up and running
              <br />
              in 48 hours.
            </h2>
          </div>
          <p
            className="text-[15.5px] text-np-text-muted leading-[1.75] max-w-[560px] fu"
            data-d="2"
          >
            No lengthy contracts. No complicated setup. We&apos;ve engineered the onboarding to get your
            agency delivering new services this week.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-4 border border-rule rounded-[14px] overflow-hidden max-xl:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`hw px-7 py-8 relative bg-ink transition-colors duration-300 fu ${i < steps.length - 1
                  ? 'border-r border-rule max-xl:[&:nth-child(2n)]:border-r-0 max-xl:border-b max-sm:border-r-0'
                  : ''
                }`}
              data-d={i > 0 ? String(i) : undefined}
            >
              {/* Badge (appears on hover via CSS class) */}
              <div className="hw-badge absolute top-5 right-5 font-mono text-[9px] text-cyan border border-cyan-border px-2 py-[3px] rounded-[3px] tracking-[0.5px]">
                {step.badge}
              </div>
              <div className="hw-n font-head text-[54px] font-black leading-none mb-5">{step.n}</div>
              <div className="text-[22px] mb-[14px]">{step.icon}</div>
              <div className="font-head text-[16px] font-bold text-white mb-2">{step.title}</div>
              <div className="text-[13px] text-np-text-muted leading-[1.65]">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
