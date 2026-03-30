const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'Web Development', href: '/services#web-dev' },
    { label: 'WordPress Development', href: '/services#web-dev' },
    { label: 'Webflow Development', href: '/services#web-dev' },
    { label: 'Shopify Development', href: '/services#shopify' },
    { label: 'White Label SEO', href: '/services#seo' },
    { label: 'Paid Advertising', href: '/services#paid-ads' },
    { label: 'Social Media Marketing', href: '/services#social' },
  ],
  Agency: [
    { label: 'About Nova Protocols', href: '/about' },
    { label: 'For Agencies', href: '/about' },
    { label: 'How It Works', href: '/#how' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Become a Partner', href: 'https://partner.novaprotocols.com/' },
    { label: 'Free Audit', href: '/contact' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'White Label SEO', href: '/blog' },
    { label: 'Agency Growth', href: '/blog' },
    { label: 'Paid Ads Strategies', href: '/blog' },
    { label: 'Ecommerce Growth', href: '/blog' },
    { label: 'Client Fulfilment', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/t&c.pdf' },
  ],
}

const socialLinks = [
  { label: 'in', title: 'LinkedIn', href: 'https://www.linkedin.com/company/novaprotocols' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-rule pt-[72px] pb-8">
      <div className="max-w-[1240px] mx-auto px-14 max-xl:px-7">

        {/* Top grid */}
        <div className="grid grid-cols-[280px_1fr_1fr_1fr] gap-12 mb-14 max-xl:grid-cols-2 max-sm:grid-cols-1">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-[14px]">
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                {/* <span className="font-mono text-[8px] font-medium text-cyan tracking-[0.5px]">NP</span> */}
                <img src="/logo.png" alt="Nova Protocols Logo" />
              </div>
              <span className="font-head font-extrabold text-[16px] text-white">Nova Protocols</span>
            </div>
            <p className="text-[13.5px] text-np-text-muted leading-[1.75] mb-[22px]">
              The invisible delivery engine behind 200+ digital agencies. Every service, every report, under your brand.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.title}
                  className="w-[34px] h-[34px] rounded-[7px] border border-rule flex items-center justify-center text-[12px] text-np-text-dim hover:border-cyan-border hover:text-cyan hover:bg-cyan-dim transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <div className="font-head text-[13px] font-bold text-white mb-4 tracking-[-0.2px]">{col}</div>
              <div className="flex flex-col gap-[9px]">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[13.5px] text-np-text-muted hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center pt-6 border-t border-rule text-[12.5px] text-np-text-dim flex-wrap gap-4">
          <span>© {new Date().getFullYear()} Nova Protocols. All rights reserved.</span>
          <div className="flex gap-6 flex-wrap">
            <a href="/privacy" className="hover:text-cyan transition-colors">Privacy Policy</a>
            <a href="/t&c.pdf" className="hover:text-cyan transition-colors">Terms &amp; Conditions</a>
            <span className="font-mono text-[11px]">Built with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
