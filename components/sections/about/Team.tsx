import SectionPre from '@/components/ui/SectionPre'

const team = [
  {
    initials: 'NA',
    name: 'Nabeel Ahmad',
    role: 'Founder & COO',
    bio: 'Former agency owner who scaled to 60 clients before hitting the delivery wall. Built Nova Protocols to solve the problem he lived firsthand.',
    tags: ['Strategy', 'Operations', 'Partnerships'],
    delay: undefined,
  },
  {
    initials: 'NS',
    name: 'Nina Sato',
    role: 'Head of Delivery',
    bio: '12 years in digital project management across enterprise and boutique agencies. Obsessed with process efficiency and zero-defect delivery.',
    tags: ['Delivery', 'QA', 'Dev'],
    delay: '1',
  },
  {
    initials: 'JM',
    name: 'James Morley',
    role: 'Head of SEO & Paid Media',
    bio: 'Built and scaled SEO programmes for 80+ brands. Leads our organic and paid media teams with a data-first, no-vanity-metrics philosophy.',
    tags: ['SEO', 'Paid Ads', 'Analytics'],
    delay: '2',
  },
  {
    initials: 'AL',
    name: 'Aisha Lowe',
    role: 'Head of Partner Success',
    bio: "The person 200+ agency owners call first. Manages every partner relationship with the same care she'd give her own clients.",
    tags: ['Onboarding', 'CX', 'Retention'],
    delay: '3',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-[120px]">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Header */}
        <div className="flex justify-between items-end mb-14 flex-wrap gap-6 max-xl:flex-col max-xl:items-start">
          <div>
            <SectionPre text="Our Team" className="fu" />
            <h2
              className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
              style={{ fontSize: 'clamp(30px,4vw,50px)' }}
              data-d="1"
            >
              The people behind
              <br />
              the curtain.
            </h2>
          </div>
          <p className="text-[15.5px] text-np-text-muted leading-[1.75] max-w-[400px] fu" data-d="2">
            A lean leadership team with deep roots in agency life — they&apos;ve all been on
            your side of the table.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-ink-2 border border-rule rounded-[14px] overflow-hidden hover:border-cyan-border hover:-translate-y-[3px] transition-all duration-300 fu"
              data-d={member.delay}
            >
              {/* Avatar area */}
              <div className="h-36 bg-ink-3 border-b border-rule flex items-center justify-center relative overflow-hidden">
                {/* Faint grid */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative z-10 w-16 h-16 rounded-[14px] bg-cyan-dim border border-cyan-border flex items-center justify-center font-mono text-[18px] text-cyan font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="font-head text-[16px] font-bold text-white mb-[2px] tracking-[-0.2px]">
                  {member.name}
                </div>
                <div className="font-mono text-[9px] text-cyan tracking-[1.5px] uppercase mb-4">
                  {member.role}
                </div>
                <p className="text-[13px] text-np-text-muted leading-[1.65] mb-5">{member.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-[5px]">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] border border-rule text-np-text-dim px-[8px] py-[3px] rounded-[3px] tracking-[0.5px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring CTA */}
        <div className="mt-8 flex items-center gap-5 p-6 border border-rule rounded-[14px] bg-ink-2 fu" data-d="4">
          <div className="flex gap-[-6px]">
            {['TH', 'MK', 'RL'].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-ink-3 border border-rule-h flex items-center justify-center font-mono text-[9px] text-np-text-dim -ml-2 first:ml-0"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold text-white mb-[2px]">
              60+ specialists across development, SEO, and paid media
            </div>
            <div className="text-[13px] text-np-text-muted">
              Always growing — we hire when partners need us to, not when it looks good on a slide.
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 font-mono text-[10px] text-cyan border border-cyan-border bg-cyan-dim px-4 py-2 rounded-[6px] tracking-[1px] uppercase hover:bg-cyan hover:text-ink transition-all"
          >
            We're Hiring →
          </a>
        </div>
      </div>
    </section>
  )
}
