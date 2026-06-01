import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/clan-reborn-horizontal.svg';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Scope', href: '#scope' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onBookCall }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-[#05070d]/80 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl'
          : 'border-white/5 bg-[#05070d]/50 py-5 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={close} className="flex items-center">
          <img src={logo} alt="Clan Reborn" className="h-11 w-auto" />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" onClick={onBookCall} className="btn-secondary">
            Book Strategy Call
          </button>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-4 mt-4 rounded-3xl border border-white/10 bg-[#090b12]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                close();
                onBookCall();
              }}
              className="btn-primary mt-2"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
