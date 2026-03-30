const metrics = [
  { value: '60', suffix: '+', label: 'Team Specialists', sub: '// Dev, SEO & Paid Media' },
  { value: '4.9', suffix: '/5', label: 'Partner Satisfaction', sub: '// NPS — rolling average' },
  { value: '0', suffix: '', label: 'NDA Breaches. Ever.', sub: '// Confidentiality record' },
  { value: '97', suffix: '%', label: 'On-Time Delivery', sub: '// Across all projects' },
]

export default function AboutMetrics() {
  return (
    <div className="bg-ink-2 border-t border-rule border-b">
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`met py-12 px-10 fu ${
              i < metrics.length - 1
                ? 'border-r border-rule max-xl:[&:nth-child(2n)]:border-r-0 max-xl:border-b max-sm:border-r-0'
                : ''
            }`}
            data-d={i > 0 ? String(i) : undefined}
          >
            <div className="font-head text-[52px] font-black text-white tracking-[-3px] leading-none mb-2">
              {m.value}
              <em className="text-cyan not-italic text-[36px]">{m.suffix}</em>
            </div>
            <div className="text-[13px] text-np-text-muted">{m.label}</div>
            <div className="font-mono text-[10px] text-np-text-dim mt-1 tracking-[0.5px]">{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
