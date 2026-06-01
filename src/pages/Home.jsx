import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CalendarCheck, Mail, MessageCircle, Send, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import MotionSection from '../components/MotionSection';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import Counter from '../components/Counter';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import StrategyCallModal from '../components/StrategyCallModal';
import Preloader from '../components/Preloader';
import logoIcon from '../assets/clan-reborn-icon.svg';
import {
  audience,
  contactOptions,
  faqs,
  features,
  pricingPlans,
  processSteps,
  sampleBuilds,
  services,
  trustMetrics,
  workScopes,
} from '../data/siteData';
import { openWhatsApp } from '../utils/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('Pro');
  const [billing, setBilling] = useState('one-time');
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.orbital-core', {
        rotate: 360,
        duration: 22,
        repeat: -1,
        ease: 'none',
      });

      gsap.utils.toArray('.gsap-reveal').forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 36, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 82%' },
          },
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const openService = (service) => {
    console.log('[analytics] service_modal_open', { service: service.title });
    setSelectedService(service);
  };

  return (
    <div ref={heroRef} className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <Preloader show={loading} />
      <Navbar onBookCall={() => setStrategyOpen(true)} />

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
          <div className="cyber-grid absolute inset-0 opacity-45" />
          <div className="noise-overlay" />
          <div className="absolute left-1/2 top-28 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10">
              <motion.p
                className="eyebrow mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Rebuilding Digital Experiences
              </motion.p>
              <motion.h1
                className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                We Rebuild Digital Experiences That <span className="accent-word">Scale</span>
              </motion.h1>
              <motion.p
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Clan Reborn builds premium websites, Android apps, marketing systems, and social media engines that turn attention into qualified leads.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <button type="button" onClick={() => setStrategyOpen(true)} className="btn-primary">
                  <CalendarCheck size={19} />
                  Get Free Consultation
                </button>
                <button
                  type="button"
                  onClick={() => openWhatsApp('a free consultation', 'Hi Clan Reborn, I want to discuss my project')}
                  className="btn-secondary"
                >
                  <MessageCircle size={19} />
                  Chat on WhatsApp
                </button>
              </motion.div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              <div className="absolute inset-6 rounded-full border border-cyan-300/15" />
              <div className="absolute inset-16 rounded-full border border-violet-300/15" />
              <div className="orbital-core absolute inset-0 rounded-full">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const angle = index * 90;
                  return (
                    <div
                      key={service.id}
                      className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-white/10 bg-white/[0.06] text-cyan-100 shadow-2xl backdrop-blur"
                      style={{ transform: `rotate(${angle}deg) translateY(-220px) rotate(-${angle}deg)` }}
                    >
                      <Icon size={30} />
                    </div>
                  );
                })}
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-20 grid place-items-center rounded-[2.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/12 via-white/[0.03] to-violet-500/10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
              >
                <img src={logoIcon} alt="Clan Reborn icon" className="h-32 w-32 drop-shadow-[0_0_28px_rgba(34,211,238,.35)]" />
              </motion.div>
            </div>
          </div>
        </section>

        <MotionSection className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {trustMetrics.map((metric) => (
              <Counter key={metric.label} {...metric} />
            ))}
          </div>
        </MotionSection>

        <MotionSection id="services" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Digital execution for brands that need speed and taste."
            text="Choose one focused service or combine the full stack: website, app, campaigns, and content."
          />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} onClick={() => openService(service)} className={index % 2 ? 'xl:mt-10' : ''} />
            ))}
          </div>
        </MotionSection>

        <MotionSection id="process" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Process" title="A clear launch path before a single pixel moves." />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
                </div>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow mb-4">Who This Helps</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white">Built for businesses that need useful leads, not decoration.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Features" title="The quiet infrastructure behind a premium launch." />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
                  <Icon className="text-cyan-200" size={28} />
                  <h3 className="mt-7 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection id="pricing" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Pricing" title="Simple starting points. Real scope after a call." />
          <div className="mx-auto mb-10 flex w-max rounded-full border border-white/10 bg-white/[0.06] p-1">
            {['one-time', 'monthly'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBilling(item)}
                className={`rounded-full px-6 py-3 text-sm font-semibold capitalize transition ${billing === item ? 'bg-cyan-300 text-slate-950' : 'text-slate-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} selected={selectedPlan === plan.name} onSelect={() => setSelectedPlan(plan.name)} />
            ))}
          </div>
        </MotionSection>

        <MotionSection id="scope" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scopes & Timelines"
            title="Real work examples without fake client quotes."
            text="These are realistic launch scopes so you know what can be built, how long it takes, and where pricing usually starts."
          />
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {workScopes.map((scope) => (
              <div key={scope.title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{scope.title}</h3>
                  <Smartphone className="text-cyan-200" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <span className="rounded-2xl bg-white/[0.05] p-3 text-sm text-slate-300">Timeline: {scope.timeline}</span>
                  <span className="rounded-2xl bg-white/[0.05] p-3 text-sm text-slate-300">{scope.budget}</span>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
                  {scope.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-3">
            {sampleBuilds.map((build) => (
              <div key={build.title} className="rounded-[2rem] border border-white/10 bg-[#10131b] p-6">
                <p className="text-sm font-semibold text-cyan-200">{build.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{build.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{build.description}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="rounded-full bg-white/[0.06] px-3 py-1">{build.timeline}</span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1">{build.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Questions before we rebuild?" />
          <FAQAccordion items={faqs} />
        </MotionSection>

        <MotionSection id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white">Send the project details. We will reply with the next practical step.</h2>
              <div className="mt-8 grid gap-4">
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  const content = (
                    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                      <Icon className="text-cyan-200" />
                      <div>
                        <p className="text-sm text-slate-500">{option.label}</p>
                        <p className="font-semibold text-white">{option.value}</p>
                      </div>
                    </div>
                  );
                  return option.href ? (
                    <a key={option.label} href={option.href} target={option.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    <button key={option.label} type="button" onClick={() => openWhatsApp('contact')} className="text-left">
                      {content}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="font-semibold text-white">Clan Reborn</p>
                <p className="mt-4 text-slate-300">Based in India, serving businesses worldwide</p>
                <p className="mt-2 text-slate-300">WhatsApp: +91 92353 13682</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </MotionSection>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© Clan Reborn. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            <a href="#services" className="hover:text-white">Services</a>
          </div>
        </div>
      </footer>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      <StrategyCallModal open={strategyOpen} onClose={() => setStrategyOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    console.log('[lead] contact_form_submit', form);
    setSent(true);
    openWhatsApp('project details', `Hi Clan Reborn, my name is ${form.name}. My email is ${form.email}. Project details: ${form.message}`);
  };

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Name</span>
          <input required className="field-input" placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Email</span>
          <input required type="email" className="field-input" placeholder="Your email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Message</span>
          <textarea
            required
            rows={7}
            className="field-input resize-none"
            placeholder="Tell us what you want to build, market, or rebuild."
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
        </label>
        {sent ? <p className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">Opening WhatsApp with your project details.</p> : null}
        <button type="submit" className="btn-primary">
          Send Project Details on WhatsApp
          <Send size={18} />
        </button>
        <a href="mailto:ashutoshtiwari.azby@gmail.com" className="btn-secondary">
          Email instead
          <Mail size={18} />
        </a>
      </div>
    </form>
  );
}
