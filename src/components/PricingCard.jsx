import { Check, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/whatsapp';

export default function PricingCard({ plan, selected, onSelect }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      onClick={onSelect}
      className={`relative flex min-h-[520px] cursor-pointer flex-col rounded-[2rem] border p-7 transition ${
        plan.popular
          ? 'border-cyan-300/50 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/20 shadow-2xl shadow-cyan-500/10'
          : 'border-white/10 bg-white/[0.045] hover:border-white/20'
      } ${selected ? 'ring-2 ring-cyan-300/70' : ''}`}
    >
      {plan.popular ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30 bg-cyan-300 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-cyan-400/25">
          Most Popular
        </div>
      ) : null}

      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
      <p className="mt-4 min-h-[56px] text-base leading-7 text-slate-300">{plan.note}</p>
      <div className="mt-8 flex items-end gap-2">
        <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
        {plan.price !== 'Custom' ? <span className="pb-2 text-slate-400">/project</span> : null}
      </div>

      <ul className="mt-8 grid gap-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-slate-200">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-200">
              <Check size={14} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          console.log('[analytics] pricing_cta_click', { plan: plan.name });
          openWhatsApp(`the ${plan.name} plan`);
        }}
        className={plan.popular ? 'btn-primary mt-auto' : 'btn-secondary mt-auto'}
      >
        <MessageCircle size={18} />
        Discuss {plan.name}
      </button>
    </motion.article>
  );
}
