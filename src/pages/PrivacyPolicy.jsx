import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Introduction',
    body: 'Clan Reborn respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, or use our services.',
  },
  {
    title: 'Information We Collect',
    body: 'We may collect your name, email address, phone number, WhatsApp number, project details, and any information you submit through contact forms, WhatsApp messages, or scheduling forms. We may also collect basic usage data such as page visits and device information if analytics are added.',
  },
  {
    title: 'How We Use Information',
    body: 'We use information to respond to inquiries, provide services, prepare proposals, improve our website, communicate about projects, and support client relationships.',
  },
  {
    title: 'WhatsApp Communication',
    body: 'Users may contact Clan Reborn through WhatsApp. Conversations may be stored for support, follow-up, and project communication purposes.',
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell user data. Information may be shared only with trusted tools or service providers such as hosting, scheduling, communication, or analytics platforms when required to operate our website or services.',
  },
  {
    title: 'Data Security',
    body: 'We take reasonable steps to protect submitted information from unauthorized access, misuse, or loss. However, no online method of transmission or storage is completely secure.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our website may contain links to external websites or tools. We are not responsible for the privacy practices, content, or policies of third-party websites.',
  },
  {
    title: 'User Rights',
    body: 'You may request access, correction, or deletion of your personal information by contacting us using the details below.',
  },
  {
    title: 'Updates to This Policy',
    body: 'This Privacy Policy may be updated at any time. The latest version will be posted on this page.',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#05070d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="noise-overlay" />
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="text-sm font-semibold text-cyan-200 hover:text-cyan-100">
          Back to home
        </Link>
        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">Basic privacy terms for visitors, leads, and clients of Clan Reborn.</p>
        </header>

        <div className="grid gap-8 py-10">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{section.body}</p>
            </section>
          ))}

          <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Email: <a className="text-cyan-200 hover:text-cyan-100" href="mailto:ashutoshtiwari.azby@gmail.com">ashutoshtiwari.azby@gmail.com</a>
              <br />
              Location: Ghaziabad, India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
