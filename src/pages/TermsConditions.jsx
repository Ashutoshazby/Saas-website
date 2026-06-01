import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By using the Clan Reborn website or contacting us for services, you agree to these basic terms and conditions.',
  },
  {
    title: 'Services',
    body: 'Clan Reborn provides web development, Android app development, digital marketing, social media management, hosting setup, and related digital services. Exact deliverables, timelines, and pricing are confirmed before a project begins.',
  },
  {
    title: 'Pricing and Payments',
    body: 'Prices shown on the website are starting points or estimates. Final pricing depends on project scope. Payment schedules, advance amounts, and delivery terms are shared in the project proposal or invoice.',
  },
  {
    title: 'Client Responsibilities',
    body: 'Clients are responsible for providing accurate project information, brand assets, content, access credentials, approvals, and timely feedback required to complete the project.',
  },
  {
    title: 'Timelines',
    body: 'Project timelines are estimated based on approved scope and availability of client inputs. Delays in feedback, content, or approvals may affect delivery dates.',
  },
  {
    title: 'Third-Party Tools',
    body: 'Some projects may use third-party hosting, analytics, scheduling, payment, or communication tools. Their own terms and policies apply separately.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Clan Reborn aims to deliver reliable services, but we are not liable for indirect losses, third-party outages, platform policy changes, or issues caused by external services outside our control.',
  },
  {
    title: 'Contact',
    body: 'For questions about these terms, contact us at ashutoshtiwari.azby@gmail.com.',
  },
];

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#05070d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="noise-overlay" />
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="text-sm font-semibold text-cyan-200 hover:text-cyan-100">
          Back to home
        </Link>
        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">Basic terms for using this website and working with Clan Reborn.</p>
        </header>

        <div className="grid gap-8 py-10">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
