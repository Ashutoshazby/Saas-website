import { motion, AnimatePresence } from 'framer-motion';
import icon from '../assets/clan-reborn-icon.svg';

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#05070d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-center">
            <motion.img
              src={icon}
              alt="Clan Reborn"
              className="mx-auto h-20 w-20"
              animate={{ y: [0, -8, 0], filter: ['drop-shadow(0 0 0 rgba(34,211,238,0))', 'drop-shadow(0 0 24px rgba(34,211,238,.45))', 'drop-shadow(0 0 0 rgba(34,211,238,0))'] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-100">Clan Reborn</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
