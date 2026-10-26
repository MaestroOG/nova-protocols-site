import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardList,
  FileWarning,
  LockKeyhole,
  Mail,
  Network,
  ShieldAlert,
  Siren,
  WifiOff,
} from 'lucide-react'
import SectionPre from '@/components/ui/SectionPre'

const emailLink =
  'mailto:team@novaprotocols.com?subject=URGENT%3A%20Incident%20response%20request'

const immediateSteps = [
  {
    icon: <WifiOff aria-hidden="true" />,
    title: 'Isolate affected devices',
    text: 'If you can do so safely, disconnect affected devices from Wi-Fi and wired networks. Do not use them to send messages or sign in to other accounts.',
  },
  {
    icon: <ShieldAlert aria-hidden="true" />,
    title: 'Do not power off or clean up',
    text: 'Avoid shutting down affected systems, deleting files, running cleanup tools, or changing settings. Those actions can destroy evidence or make recovery harder.',
  },
  {
    icon: <ClipboardList aria-hidden="true" />,
    title: 'Record what you see',
    text: 'Note the time, affected users and devices, unusual messages, and actions already taken. Photograph screens with a separate device if it is safe.',
  },
  {
    icon: <LockKeyhole aria-hidden="true" />,
    title: 'Use a trusted way to communicate',
    text: 'Contact your IT or security provider from a device you believe is safe. Do not reuse a potentially compromised work email or device to coordinate the response.',
  },
]

const responseStages = [
  {
    number: '01',
    title: 'Triage',
    text: 'Establish what happened, when it began, which systems may be involved, and who is authorised to make decisions.',
    icon: <Siren aria-hidden="true" />,
  },
  {
    number: '02',
    title: 'Contain',
    text: 'Work with your IT or security responders to limit further access and prevent the incident from spreading.',
    icon: <Network aria-hidden="true" />,
  },
  {
    number: '03',
    title: 'Investigate',
    text: 'Preserve relevant evidence and build a clear timeline of affected accounts, devices, and services.',
    icon: <FileWarning aria-hidden="true" />,
  },
  {
    number: '04',
    title: 'Recover',
    text: 'Restore systems in a controlled order, verify they are safe to bring back, and keep stakeholders informed.',
    icon: <Check aria-hidden="true" />,
  },
]

const incidentTypes = [
  {
    title: 'Ransomware or extortion',
    text: 'Limit network connections from affected devices. Preserve ransom notes and messages, and avoid negotiating or paying before speaking with your response team, insurer, and legal adviser.',
  },
  {
    title: 'Compromised email or account',
    text: 'From a trusted device, notify your IT team and check for suspicious forwarding rules, unexpected sign-ins, or unauthorised changes. Warn colleagues through a separate channel.',
  },
  {
    title: 'Suspected data exposure',
    text: 'Do not delete logs or messages. Record what information may be involved and who may be affected, then involve your privacy lead and legal advisers promptly.',
  },
  {
    title: 'Unexpected outage or system access',
    text: 'Record the affected services and when the disruption began. Keep a note of recent changes, alerts, and supplier communications for your technical team.',
  },
]

const haveReady = [
  'A plain-language description of what you noticed and when',
  'The people, devices, accounts, and services you know are affected',
  'Any screenshots, alerts, or messages, preserved without altering them',
  'The name of your IT provider and your cyber-insurance incident contact',
  'A decision-maker and a safe phone number or email address to reach them',
  'A way to communicate that does not rely on the affected systems',
]

const faqs = [
  {
    question: 'Should we report the incident?',
    answer:
      'Reporting duties depend on your location, the information involved, and your organisation’s circumstances. Notify your privacy or information officer and legal adviser promptly; they can assess applicable requirements. This page is general information, not legal advice.',
  },
  {
    question: 'Should we turn off affected computers?',
    answer:
      'Usually, do not power them off unless your incident responder or IT team advises you to, or leaving them connected creates an immediate safety risk. If practical, disconnect them from the network while leaving them powered on.',
  },
  {
    question: 'Can we contact you if we are not an existing client?',
    answer:
      'Yes. Send us a short description using the urgent contact link and we will confirm whether we can assist. Availability and scope need to be agreed before any hands-on work begins.',
  },
  {
    question: 'How long does incident response take?',
    answer:
      'There is no reliable one-size-fits-all timeline. A single account issue is different from a widespread outage or ransomware event. The scope becomes clearer as responders establish what was accessed and what needs to be recovered.',
  },
]

function ContactLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={emailLink}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:-translate-y-[2px] hover:bg-[#9B4DAB] hover:shadow-[0_0_32px_rgba(108,54,122,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  )
}

export default function IncidentResponse() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(108,54,122,0.13) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(108,54,122,0.08) 0%, transparent 60%)',
          }}
        />
        <div aria-hidden="true" className="hero-lines opacity-50" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-14 py-16 max-xl:px-7 max-sm:py-12">
          <div className="mb-10 flex items-center gap-2 font-mono text-[10px] tracking-[1px] text-np-text-dim fu in">
            <a href="/" className="transition-colors hover:text-cyan">Home</a>
            <span>›</span>
            <span className="text-cyan">Incident Response</span>
          </div>

          <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-16 max-xl:grid-cols-1 max-xl:gap-10">
            <div>
              <SectionPre text="Incident Response" className="fu in" />
              <h1
                className="mb-6 font-head text-[clamp(42px,6vw,76px)] font-black leading-[0.96] tracking-[-3px] text-white fu in"
                data-d="1"
              >
                Under attack?
                <br />
                <em className="hero-outline">Start here.</em>
              </h1>
              <p className="mb-8 max-w-[560px] text-[16px] leading-[1.75] text-np-text-muted fu in" data-d="2">
                If you suspect ransomware, a compromised account, or a data exposure, focus first on safety, containment, and preserving what happened. Use this guide to take the next sensible steps.
              </p>
              <div className="flex flex-wrap gap-3 fu in" data-d="3">
                <ContactLink>
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Email us urgently
                </ContactLink>
                <a
                  href="#first-steps"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-rule-h px-5 py-3.5 text-[13px] font-semibold text-np-text-muted transition-colors hover:border-cyan-border hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  First steps
                  <ArrowDown aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 font-mono text-[10px] leading-relaxed tracking-[0.4px] text-np-text-dim fu in" data-d="4">
                Email is not a monitored emergency hotline. Contact your IT/security provider and insurer in parallel.
              </p>
            </div>

            <div className="fu in" data-d="2">
              <div className="overflow-hidden rounded-2xl border border-cyan-border bg-ink-2 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                <div className="flex items-center justify-between border-b border-rule bg-ink-3 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#ef6474]" />
                    <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-np-text-dim">Incident checklist</span>
                  </div>
                  <span className="font-mono text-[9px] text-cyan">START NOW</span>
                </div>
                <div className="space-y-0 divide-y divide-rule">
                  {[
                    'Disconnect affected devices from the network',
                    'Do not power off or delete anything',
                    'Record times, alerts, and affected accounts',
                    'Contact your IT/security team from a safe device',
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-4 px-5 py-4">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-cyan-border bg-cyan-dim font-mono text-[10px] text-cyan">
                        0{index + 1}
                      </span>
                      <span className="text-[13px] leading-[1.6] text-np-text-muted">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-rule bg-ink-3 px-5 py-3 text-[11px] leading-relaxed text-np-text-dim">
                  If there is an immediate risk to people or physical safety, follow your organisation&apos;s emergency procedures first.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="first-steps" className="scroll-mt-28 border-b border-rule bg-ink-2 py-24 max-sm:py-16">
        <div className="mx-auto max-w-[1240px] px-14 max-xl:px-7">
          <div className="mb-12 max-w-[680px]">
            <SectionPre text="Do This First" className="fu" />
            <h2 className="mb-4 font-head text-[clamp(30px,4vw,48px)] font-black leading-[1.05] tracking-[-2px] text-white fu" data-d="1">
              While you wait, take these steps.
            </h2>
            <p className="text-[14px] leading-[1.75] text-np-text-muted fu" data-d="2">
              Avoid actions that could spread the incident or destroy information responders may need. When in doubt, pause and ask your IT or security team.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {immediateSteps.map((step, index) => (
              <article key={step.title} className="met rounded-xl border border-rule bg-ink p-6 fu" data-d={index % 2 ? '1' : undefined}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-border bg-cyan-dim text-cyan [&>svg]:h-5 [&>svg]:w-5">
                  {step.icon}
                </div>
                <h3 className="mb-2 font-head text-[18px] font-bold tracking-[-0.3px] text-white">{step.title}</h3>
                <p className="text-[13.5px] leading-[1.75] text-np-text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule py-24 max-sm:py-16">
        <div className="mx-auto max-w-[1240px] px-14 max-xl:px-7">
          <div className="mb-12 text-center">
            <SectionPre text="The Response" centered className="fu" />
            <h2 className="font-head text-[clamp(30px,4vw,48px)] font-black leading-[1.05] tracking-[-2px] text-white fu" data-d="1">
              A clear sequence. No guesswork.
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.75] text-np-text-muted fu" data-d="2">
              Every incident is different. Your responders establish scope and priorities with you before recovery decisions are made.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {responseStages.map((stage, index) => (
              <article key={stage.number} className="relative rounded-xl border border-rule bg-ink-2 p-6 fu" data-d={String(index % 3)}>
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[1px] text-cyan">STEP {stage.number}</span>
                  <span className="text-cyan [&>svg]:h-5 [&>svg]:w-5">{stage.icon}</span>
                </div>
                <h3 className="mb-2 font-head text-[19px] font-bold text-white">{stage.title}</h3>
                <p className="text-[13px] leading-[1.75] text-np-text-muted">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-ink-2 py-24 max-sm:py-16">
        <div className="mx-auto max-w-[1240px] px-14 max-xl:px-7">
          <div className="mb-12">
            <SectionPre text="Common Scenarios" className="fu" />
            <h2 className="font-head text-[clamp(30px,4vw,48px)] font-black leading-[1.05] tracking-[-2px] text-white fu" data-d="1">
              Different incidents. Same calm response.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {incidentTypes.map((incident, index) => (
              <article key={incident.title} className="rounded-xl border border-rule bg-ink p-6 fu" data-d={index % 2 ? '1' : undefined}>
                <h3 className="mb-3 flex items-center gap-2 font-head text-[17px] font-bold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  {incident.title}
                </h3>
                <p className="text-[13.5px] leading-[1.75] text-np-text-muted">{incident.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-cyan px-4 py-2 text-[12px] leading-[1.75] text-np-text-dim fu">
            Privacy and regulatory notification decisions depend on your circumstances and jurisdiction. Involve your privacy lead and legal advisers; this guide is not legal advice.
          </p>
        </div>
      </section>

      <section className="border-b border-rule py-24 max-sm:py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[0.85fr_1.15fr] gap-16 px-14 max-lg:grid-cols-1 max-xl:px-7 max-xl:gap-10">
          <div>
            <SectionPre text="Get Ready to Call" className="fu" />
            <h2 className="mb-4 font-head text-[clamp(30px,4vw,46px)] font-black leading-[1.05] tracking-[-2px] text-white fu" data-d="1">
              What to have ready.
            </h2>
            <p className="mb-7 text-[14px] leading-[1.75] text-np-text-muted fu" data-d="2">
              You do not need every answer before you reach out. Share only what you can confirm, using a channel you trust.
            </p>
            <ContactLink>
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contact us urgently
            </ContactLink>
          </div>
          <div className="overflow-hidden rounded-xl border border-rule bg-ink-2 fu" data-d="2">
            <div className="flex items-center gap-3 border-b border-rule bg-ink-3 px-5 py-4">
              <ClipboardList aria-hidden="true" className="h-4 w-4 text-cyan" />
              <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-np-text-dim">Useful information</span>
            </div>
            <ul className="divide-y divide-rule">
              {haveReady.map((item) => (
                <li key={item} className="flex items-start gap-3 px-5 py-4 text-[13px] leading-[1.65] text-np-text-muted">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-ink-2 py-20 max-sm:py-14">
        <div className="mx-auto max-w-[900px] px-14 max-xl:px-7">
          <SectionPre text="Set Clear Expectations" className="fu" />
          <h2 className="mb-5 font-head text-[clamp(28px,3.5vw,42px)] font-black leading-[1.08] tracking-[-1.5px] text-white fu" data-d="1">
            Agree scope before anyone acts.
          </h2>
          <div className="space-y-4 text-[14px] leading-[1.8] text-np-text-muted fu" data-d="2">
            <p>
              Before a responder accesses systems, agree in writing what they are authorised to do, who the decision-maker is, how updates will be shared, and how costs are handled. Clear authority helps prevent delay and accidental disruption.
            </p>
            <p>
              The size and duration of an engagement depend on what has been affected and what recovery requires. Ask for a clear scope, the next update point, and any assumptions that still need to be confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule py-24 max-sm:py-16">
        <div className="mx-auto max-w-[900px] px-14 max-xl:px-7">
          <div className="mb-10 text-center">
            <SectionPre text="Incident Response FAQ" centered className="fu" />
            <h2 className="font-head text-[clamp(30px,4vw,46px)] font-black leading-[1.05] tracking-[-2px] text-white fu" data-d="1">
              Questions, answered.
            </h2>
          </div>
          <div className="overflow-hidden rounded-[14px] border border-rule divide-y divide-rule">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group fu" data-d={index % 2 ? '1' : undefined}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ink-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cyan [&::-webkit-details-marker]:hidden">
                  <span className="text-[14px] font-semibold text-white">{faq.question}</span>
                  <ChevronDown aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-np-text-dim transition-transform group-open:rotate-180" />
                </summary>
                <div className="bg-ink-2 px-6 pb-5">
                  <p className="text-[13.5px] leading-[1.78] text-np-text-muted">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 max-sm:py-16">
        <div aria-hidden="true" className="partner-grill" />
        <div className="relative z-10 mx-auto max-w-[850px] px-14 text-center max-xl:px-7">
          <SectionPre text="Take the Next Step" centered className="fu" />
          <h2 className="mb-4 font-head text-[clamp(32px,4.5vw,54px)] font-black leading-[1.03] tracking-[-2px] text-white fu" data-d="1">
            Need to talk this through?
          </h2>
          <p className="mx-auto mb-8 max-w-[620px] text-[14.5px] leading-[1.75] text-np-text-muted fu" data-d="2">
            Send a short note from a safe device. Tell us what you are seeing and how we can reach you. We will confirm whether we can assist and what to do next.
          </p>
          <div className="fu" data-d="3">
            <ContactLink>
              <Mail aria-hidden="true" className="h-4 w-4" />
              Email us urgently
            </ContactLink>
          </div>
          <p className="mt-5 font-mono text-[10px] tracking-[0.4px] text-np-text-dim fu" data-d="4">
            team@novaprotocols.com
          </p>
        </div>
      </section>
    </>
  )
}
