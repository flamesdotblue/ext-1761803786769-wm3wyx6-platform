import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#collection', label: 'Collection' },
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group relative inline-flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-200 to-amber-500 shadow-[0_0_40px_#fde68a55]"></span>
          <span className="bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-lg font-semibold tracking-wider text-transparent">
            FLAMES
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-300 transition hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#account"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
          >
            <User className="h-4 w-4" /> Account
          </a>
          <a
            href="#cart"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 px-3 py-1.5 text-sm font-medium text-black shadow-[0_0_30px_#fde68a66] ring-1 ring-yellow-300/40 transition hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" /> Cart
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="inline-flex items-center rounded-md p-2 text-zinc-200 hover:bg-white/5 md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="ml-auto flex h-full w-80 max-w-[85%] flex-col gap-6 border-l border-white/10 bg-zinc-950 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-zinc-200">Menu</span>
                <button
                  aria-label="Close menu"
                  className="rounded-md p-2 text-zinc-300 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="grid gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-zinc-200 transition hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto grid gap-3">
                <a href="#account" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-zinc-200 hover:bg-white/5">
                  <User className="h-4 w-4" /> Account
                </a>
                <a href="#cart" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-yellow-600 to-yellow-400 px-3 py-2 font-medium text-black ring-1 ring-yellow-300/40">
                  <ShoppingCart className="h-4 w-4" /> Cart
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
