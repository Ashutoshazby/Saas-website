import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarCheck, MessageCircle, X } from 'lucide-react';
import { CALENDLY_URL, openCalendly, openWhatsApp } from '../utils/whatsapp';
import { services } from '../data/siteData';

const initialForm = {
  name: '',
  email: '',
  whatsapp: '',
  service: services[0].title,
  budget: '',
};

export default function StrategyCallModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!/^[0-9+\s-]{8,}$/.test(form.whatsapp)) next.whatsapp = 'Enter a valid WhatsApp number';
    if (!form.service) next.service = 'Select a service';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    console.log('[lead] strategy_call_request', form);
    setSubmitted(true);
  };

  const close = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book strategy call"
            initial={{ opacity: 0, scale: 0.92, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0d1018] p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close modal"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <p className="eyebrow mb-4">Lead Funnel</p>
            <h2 className="text-3xl font-semibold text-white">Book a strategy call</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Share a few details first so the call starts with context, not guesswork.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-6">
                <p className="text-lg font-semibold text-white">Redirecting to schedule your call...</p>
                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Your details are queued. Continue to Calendly when you are ready.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => openCalendly('strategy_call_modal')} className="btn-primary flex-1">
                    <CalendarCheck size={18} />
                    Continue to Calendly
                  </button>
                  <button
                    type="button"
                    onClick={() => openWhatsApp('strategy call', 'Hi Clan Reborn, I want to book a strategy call')}
                    className="btn-secondary flex-1"
                  >
                    <MessageCircle size={18} />
                    Chat instead
                  </button>
                </div>
                <p className="mt-4 text-xs text-slate-500">{CALENDLY_URL}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 grid gap-5">
                <Field label="Name" error={errors.name}>
                  <input value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" className="field-input" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="you@example.com" className="field-input" />
                </Field>
                <Field label="WhatsApp Number" error={errors.whatsapp}>
                  <input
                    value={form.whatsapp}
                    onChange={(event) => update('whatsapp', event.target.value)}
                    placeholder="+91 98765 43210"
                    className="field-input"
                  />
                </Field>
                <Field label="Service" error={errors.service}>
                  <select value={form.service} onChange={(event) => update('service', event.target.value)} className="field-input">
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget (optional)">
                  <input value={form.budget} onChange={(event) => update('budget', event.target.value)} placeholder="Example: ₹20,000" className="field-input" />
                </Field>

                <button type="submit" className="btn-primary mt-2">
                  <CalendarCheck size={18} />
                  Submit & Continue
                </button>
                <button
                  type="button"
                  onClick={() => openWhatsApp('strategy call', 'Hi Clan Reborn, I want to book a strategy call')}
                  className="btn-secondary"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp instead
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      {children}
      {error ? <span className="text-sm text-rose-300">{error}</span> : null}
    </label>
  );
}
