export default function AnnouncementBar() {
  return (
    <div className="bg-ink-2 border-b border-rule flex items-center justify-center gap-3 px-6 py-[10px] text-[12.5px] text-np-text-muted font-mono">
      <span className="bg-cyan-dim border border-cyan-border text-cyan text-[10px] px-2 py-[2px] rounded-[3px] tracking-[1px] uppercase">
        New
      </span>
      White label Shopify Conversion Optimization now available —{' '}
      <a
        href="#contact"
        className="text-cyan underline underline-offset-[3px] hover:text-white transition-colors"
      >
        Claim your free audit &rarr;
      </a>
    </div>
  )
}
