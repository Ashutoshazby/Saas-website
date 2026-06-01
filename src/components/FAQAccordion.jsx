import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-white/10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setActive(open ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-white sm:px-8"
            >
              {item.question}
              <ChevronDown size={20} className={`shrink-0 transition ${open ? 'rotate-180 text-cyan-200' : 'text-slate-500'}`} />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-base leading-7 text-slate-400 sm:px-8">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
