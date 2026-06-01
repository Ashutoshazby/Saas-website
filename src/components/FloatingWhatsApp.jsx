import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [prompt, setPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setPrompt(true), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {prompt && !dismissed ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="w-[min(320px,calc(100vw-2rem))] rounded-3xl border border-white/10 bg-[#11151d]/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-white">Need help? Chat with us</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
                  Clan Reborn is online
                </div>
                <div className="mt-3 flex gap-1">
                  <span className="typing-dot" />
                  <span className="typing-dot animation-delay-150" />
                  <span className="typing-dot animation-delay-300" />
                </div>
              </div>
              <button type="button" onClick={() => setDismissed(true)} className="text-slate-400 transition hover:text-white">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="group relative">
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max rounded-full border border-white/10 bg-slate-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:opacity-100">
          Chat on WhatsApp
        </span>
        <button
          type="button"
          aria-label="Chat on WhatsApp"
          onClick={() => openWhatsApp('a free consultation', 'Hi Clan Reborn, I want to discuss my project')}
          className="pulse-glow grid h-16 w-16 place-items-center rounded-full bg-emerald-400 text-emerald-950 shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-emerald-300"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
}
