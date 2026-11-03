'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

import CustomCursor from '@/components/CustomCursor'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionPre from '@/components/ui/SectionPre'

const overviewItems = [
  { label: 'Website', value: 'nova-protocols.com' },
  { label: 'Contact', value: 'team@novaprotocols.com' },
  { label: 'Last Updated', value: 'November 2026' },
]

const policySections = [
  {
    kicker: '01',
    title: 'Information we collect',
    body:
      'We collect information you provide directly, such as your name, business details, email address, phone number, and inquiry information when you fill out our forms, book a call, or contact our team. We also automatically collect limited technical information about visits to our website, including browser type, device data, referral source, page activity, and approximate geographic location for analytics and security purposes.',
    items: [
      'Contact and business details submitted via website forms or discovery calls',
      'Communication records and service inquiry history',
      'Usage and performance analytics associated with website interactions',
      'Technical data needed to diagnose issues and keep the website secure',
    ],
  },
  {
    kicker: '02',
    title: 'How we use your data',
    body:
      'We use the information we collect to respond to enquiries, provide proposals and services, manage client relationships, improve site performance, and detect abuse or security risks. In some cases, we may use your data to share relevant updates, maintain operational records, or meet legal and contractual obligations.',
    items: [
      'To respond to sales, support, and partnership enquiries',
      'To deliver and improve our marketing, web, and agency services',
      'To maintain accurate records of active and past client engagements',
      'To monitor and secure our website and internal operations',
    ],
  },
  {
    kicker: '03',
    title: 'Cookies, analytics, and tracking',
    body:
      'Our website may use cookies and similar tracking technologies to remember preferences, understand traffic patterns, and improve functionality. We may use analytics tools to understand how visitors use the site and where opportunities exist to improve performance and content.',
    items: [
      'Essential cookies required for site operation and security',
      'Analytics cookies to understand traffic, conversion, and page engagement',
      'Preference cookies that help remember your choices where applicable',
      'Third-party measurement data used to improve usability and campaign performance',
    ],
  },
  {
    kicker: '04',
    title: 'Third-party services',
    body:
      'We work with trusted technology providers to power our website, host data, support delivery, and measure outcomes. These providers may process personal information on our behalf under appropriate contractual safeguards. Examples may include hosting, analytics, CRM, email, payments, and content management tools.',
    items: [
      'Website hosting and infrastructure providers',
      'Analytics and performance measurement tools',
      'CRM, email, and client communication systems',
      'Service providers used to support project delivery and operations',
    ],
  },
  {
    kicker: '05',
    title: 'Retention and security',
    body:
      'We retain personal data only for as long as necessary to fulfill the purpose for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements. We maintain reasonable administrative, technical, and physical safeguards designed to protect information from unauthorized access, loss, misuse, or disclosure.',
    items: [
      'Data is retained only for the period required for business, legal, or contractual purposes',
      'Access is limited to authorized personnel on a need-to-know basis',
      'Reasonable safeguards are in place to reduce the risk of unauthorized disclosure',
      'We review practices regularly as our operations and tools evolve',
    ],
  },
  {
    kicker: '06',
    title: 'Your rights',
    body:
      'Depending on your location, you may have rights to request access to, correction of, deletion of, restriction of, or objection to processing of your personal data. You may also have the right to request a copy of your data in a portable format or to withdraw consent where consent is used as the legal basis for processing.',
    items: [
      'Request access to the personal data we hold about you',
      'Ask us to correct inaccurate or incomplete information',
      'Request deletion of your data in certain circumstances',
      'Ask questions about how your data is handled or shared',
    ],
  },
]

export default function PrivacyPage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <div className="mt-[104px] max-sm:mt-[128px]">
        <Navbar />

        <main>
          <section className="relative overflow-hidden border-b border-rule bg-ink">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 65% at 50% 10%, rgba(108,54,122,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(108,54,122,0.08) 0%, transparent 60%)',
              }}
            />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 bottom-0 left-[33%] w-px bg-rule" />
              <div className="absolute top-0 bottom-0 left-[66%] w-px bg-rule opacity-50" />
              <div className="absolute left-0 right-0 bottom-0 h-px bg-rule" />
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto px-14 py-[100px] max-xl:px-7">
              <div className="flex items-center gap-2 font-mono text-[10px] text-np-text-dim tracking-[1px] mb-10 fu in">
                <a href="/" className="hover:text-cyan transition-colors">Home</a>
                <span>›</span>
                <span className="text-cyan">Privacy Policy</span>
              </div>

              <div className="grid grid-cols-[1.35fr_0.65fr] gap-12 max-xl:grid-cols-1 max-xl:gap-8">
                <div className="max-w-[760px]">
                  <SectionPre text="Privacy Policy" className="fu in" />
                  <h1
                    className="font-head font-black tracking-[-3px] text-white leading-[0.95] mb-6 fu in"
                    style={{ fontSize: 'clamp(42px,5vw,72px)' }}
                    data-d="1"
                  >
                    We protect the information
                    <br />
                    behind your growth.
                  </h1>

                  <p className="text-[16px] text-np-text-muted leading-[1.8] mb-8 fu in" data-d="2">
                    This Privacy Policy explains how Nova Protocols collects, uses, stores, and protects personal information in connection with our website, marketing activities, and client services.
                  </p>

                  <div className="flex flex-wrap gap-3 fu in" data-d="3">
                    {overviewItems.map((item) => (
                      <div
                        key={item.label}
                        className="border border-rule rounded-full px-4 py-2 bg-ink-2"
                      >
                        <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase mr-2">
                          {item.label}
                        </span>
                        <span className="text-[13px] text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="fu in" data-d="2">
                  <div className="border border-rule rounded-[18px] bg-ink-2 overflow-hidden">
                    <div className="flex items-center gap-[10px] px-5 py-3 border-b border-rule bg-ink-3">
                      <div className="flex gap-[5px]">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#ff5f57]" />
                        <div className="w-[8px] h-[8px] rounded-full bg-[#febc2e]" />
                        <div className="w-[8px] h-[8px] rounded-full bg-[#28c840]" />
                      </div>
                      <span className="font-mono text-[9px] text-np-text-dim tracking-[1.5px] uppercase">
                        privacy_snapshot.json
                      </span>
                    </div>

                    <div className="p-5 font-mono text-[12px] leading-[2]">
                      <div className="text-np-text-dim">{'{'}</div>
                      <div className="pl-5">
                        <span className="text-cyan">&quot;data_handling&quot;</span>
                        <span className="text-np-text-dim">: </span>
                        <span className="text-np-text-muted">&quot;minimal, purposeful, secure&quot;</span>
                        <span className="text-np-text-dim">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-cyan">&quot;retention&quot;</span>
                        <span className="text-np-text-dim">: </span>
                        <span className="text-np-text-muted">&quot;as long as needed&quot;</span>
                        <span className="text-np-text-dim">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-cyan">&quot;security&quot;</span>
                        <span className="text-np-text-dim">: </span>
                        <span className="text-np-text-muted">&quot;industry-standard safeguards&quot;</span>
                        <span className="text-np-text-dim">,</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-cyan">&quot;rights&quot;</span>
                        <span className="text-np-text-dim">: </span>
                        <span className="text-np-text-muted">&quot;access, correction, deletion&quot;</span>
                      </div>
                      <div className="text-np-text-dim">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-ink-2 border-b border-rule">
            <div className="max-w-[1240px] mx-auto px-14 py-[110px] max-xl:px-7">
              <div className="grid gap-8">
                {policySections.map((section) => (
                  <article
                    key={section.kicker}
                    className="border border-rule rounded-[22px] bg-ink p-8 md:p-10 fu"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-[10px] tracking-[2px] text-cyan uppercase">
                        {section.kicker}
                      </span>
                      <span className="h-px flex-1 bg-rule" />
                    </div>

                    <h2 className="font-head text-[28px] font-bold tracking-[-0.8px] text-white mb-4">
                      {section.title}
                    </h2>

                    <p className="text-[15.5px] text-np-text-muted leading-[1.9] mb-6">
                      {section.body}
                    </p>

                    <ul className="grid gap-3 md:grid-cols-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 items-start text-[14px] text-np-text-muted">
                          <span className="text-cyan mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-ink">
            <div className="max-w-[1240px] mx-auto px-14 py-[110px] max-xl:px-7">
              <div className="border border-rule rounded-[24px] bg-gradient-to-br from-[rgba(108,54,122,0.12)] to-transparent p-8 md:p-12 fu">
                <SectionPre text="Questions" />
                <h2 className="font-head text-[30px] font-black tracking-[-1px] text-white mb-4">
                  Need to ask about your data?
                </h2>
                <p className="text-[15.5px] text-np-text-muted leading-[1.8] max-w-[720px] mb-6">
                  If you want to exercise any privacy rights, request information about the data we hold, or ask a question about this policy, please contact our team and we will respond as quickly as possible.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:team@novaprotocols.com"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-border bg-cyan-dim px-5 py-3 text-[13px] font-medium text-cyan transition-colors hover:bg-[rgba(108,54,122,0.18)]"
                  >
                    team@novaprotocols.com
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-rule px-5 py-3 text-[13px] font-medium text-white transition-colors hover:border-cyan-border hover:text-cyan"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
