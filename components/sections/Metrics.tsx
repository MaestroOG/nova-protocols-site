const metrics = [
  { value: '200', suffix: '+', label: 'Agency Partners', sub: '// Across 18 countries' },
  { value: '98', suffix: '%', label: 'Retention Rate', sub: '// 12-month rolling avg' },
  { value: '5K', suffix: '+', label: 'Projects Delivered', sub: '// On time, on brief' },
  { value: '48', suffix: 'h', label: 'Avg. Onboarding', sub: '// From sign-up to live' },
]

export default function Metrics() {
  return (
    <div className="bg-ink-2 border-t border-rule border-b">
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`met py-12 px-10 fu ${
              i < metrics.length - 1
                ? 'border-r border-rule max-xl:border-rule max-xl:[&:nth-child(2n)]:border-r-0 max-sm:border-r-0 max-xl:border-b'
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
