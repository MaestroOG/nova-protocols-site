import SectionPre from '@/components/ui/SectionPre'
import { BarChart, Book, Lock, Search, ShoppingBag, Zap } from 'lucide-react'

const certifications = [
  { label: 'Google Partner', icon: <Search />, desc: 'Certified Google Ads & Analytics partner' },
  { label: 'Meta Business Partner', icon: <Book />, desc: 'Official Meta Business partner badge' },
  { label: 'Shopify Partner', icon: <ShoppingBag />, desc: 'Verified Shopify development partner' },
  { label: 'Semrush Certified', icon: <BarChart />, desc: 'Agency certified in SEO tooling' },
  { label: 'Webflow Expert', icon: <Zap />, desc: 'Certified Webflow development expert' },
  { label: 'ISO 27001 Aligned', icon: <Lock />, desc: 'Data security and confidentiality standards' },
]

const pressItems = [
  { name: 'Agency Magazine', quote: '"The white label partner agencies actually trust."' },
  { name: 'Search Engine Journal', quote: '"Redefining how agencies scale delivery."' },
  { name: 'Marketing Week', quote: '"The invisible engine behind modern agency growth."' },
]

export default function Certifications() {
  return (
    <section className="py-[120px] border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        {/* Certifications */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <SectionPre text="Certifications & Partnerships" className="fu" />
              <h2
                className="font-head font-black tracking-[-2px] text-white leading-[1.05] fu"
                style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}
                data-d="1"
              >
                Qualified across every
                <br />
                service we offer.
              </h2>
            </div>
            <p className="text-[14px] text-np-text-muted leading-[1.75] max-w-[340px] fu" data-d="2">
              Every tool and platform we use, we&apos;re certified in. No generalists.
              No guesswork.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {certifications.map((cert, i) => (
              <div
                key={cert.label}
                className="flex items-center gap-4 p-6 bg-ink-2 border border-rule rounded-[12px] hover:border-rule-h hover:-translate-y-[1px] transition-all duration-300 fu"
                data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : undefined}
              >
                <div className="w-12 h-12 rounded-[10px] bg-ink-3 border border-rule flex items-center justify-center text-[22px] flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white mb-[2px]">{cert.label}</div>
                  <div className="text-[12px] text-np-text-dim leading-[1.5]">{cert.desc}</div>
                </div>
                <span className="ml-auto font-mono text-[9px] text-[#00c864] border border-[rgba(0,200,100,0.25)] bg-[rgba(0,200,100,0.08)] px-2 py-[3px] rounded-[3px] flex-shrink-0">
                  ✓ Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* As seen in / Press */}
        <div className="border-t border-rule pt-16">
          <div className="flex items-center gap-4 mb-10 fu">
            <span className="font-mono text-[9px] text-np-text-dim tracking-[3px] uppercase">
              As seen in
            </span>
            <span className="flex-1 h-px bg-rule" />
          </div>

          <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-1 fu" data-d="2">
            {pressItems.map((p) => (
              <div
                key={p.name}
                className="p-7 bg-ink-2 border border-rule rounded-[12px] hover:border-rule-h transition-all duration-300"
              >
                <div className="font-head text-[13px] font-bold text-white mb-3 tracking-[-0.2px] uppercase">
                  {p.name}
                </div>
                <p className="text-[14px] text-np-text-muted leading-[1.65] italic">{p.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
