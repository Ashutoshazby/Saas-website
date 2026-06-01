import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function ServiceModal({ service, onClose }) {
  const Icon = service?.icon;

  return (
    <AnimatePresence>
      {service ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={service.title}
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0d1018] p-6 shadow-2xl shadow-black/50 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6">
                <div className="grid h-20 w-20 place-items-center rounded-3xl border border-white/10 bg-white/[0.06] text-cyan-200">
                  {Icon ? <Icon size={38} /> : null}
                </div>
                <p className="mt-8 text-sm uppercase tracking-[0.28em] text-cyan-200">Starting price</p>
                <p className="mt-3 text-3xl font-semibold text-white">{service.price}</p>
                <button
                  type="button"
                  onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary mt-8 w-full"
                >
                  View Pricing <ArrowRight size={17} />
                </button>
              </div>

              <div className="pr-2">
                <p className="eyebrow mb-4">Service Scope</p>
                <h3 className="text-3xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>

                <ul className="mt-6 grid gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-400/15 text-cyan-200">
                        <Check size={14} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openWhatsApp(service.title, service.whatsappText)}
                  className="ripple mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-400 px-6 py-4 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-emerald-400/30"
                >
                  <MessageCircle size={20} />
                  Chat with us on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
