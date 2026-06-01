import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1100;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center">
      <div className="text-3xl font-semibold text-white sm:text-4xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}
