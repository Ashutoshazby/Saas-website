import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const accentClass = {
  cyan: 'from-cyan-400/20 via-cyan-300/5 to-transparent text-cyan-200 shadow-cyan-500/10',
  green: 'from-emerald-400/20 via-emerald-300/5 to-transparent text-emerald-200 shadow-emerald-500/10',
  purple: 'from-violet-400/20 via-violet-300/5 to-transparent text-violet-200 shadow-violet-500/10',
  rose: 'from-rose-400/20 via-rose-300/5 to-transparent text-rose-200 shadow-rose-500/10',
};

export default function ServiceCard({ service, onClick, className = '' }) {
  const Icon = service.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 220, damping: 20 });

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`group premium-hover relative min-h-[310px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#12151e] p-7 text-left shadow-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300 ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition duration-500 group-hover:opacity-100 ${accentClass[service.accent]}`} />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className={`grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] ${accentClass[service.accent]}`}>
            <Icon size={29} />
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-300">
            {service.badge}
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="text-2xl font-semibold leading-tight text-white">{service.title}</h3>
          <p className="mt-5 text-base leading-7 text-slate-400">{service.short}</p>
          <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-100">
            Explore scope <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
