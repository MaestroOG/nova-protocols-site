const agencies = [
  'Crescendo Digital',
  'Apex Marketing',
  'Orbit Agency',
  'Signal Creative',
  'Nexus Media',
  'Pulse Digital',
  'Vortex Studio',
  'Anchor Media',
]

export default function TrustBar() {
  return (
    <div className="border-t border-rule border-b bg-ink-2 py-7">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">
        <div className="flex items-center gap-0">
          <div className="font-mono text-[9px] text-np-text-dim tracking-[2px] uppercase pr-10 border-r border-rule flex-shrink-0 whitespace-nowrap">
            Trusted by agencies in
          </div>
          <div className="flex-1 overflow-hidden px-8">
            <div className="flex gap-14 animate-trust-move w-max items-center">
              {[...agencies, ...agencies].map((name, i) => (
                <span
                  key={i}
                  className="font-head text-[14px] font-bold text-np-text-dim tracking-[-0.3px] whitespace-nowrap hover:text-np-text-muted transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
