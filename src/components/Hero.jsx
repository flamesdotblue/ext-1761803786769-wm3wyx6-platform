import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_20%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_20px_#fde68a]" />
            New: Chrono X • Grade 5 Titanium • 100m WR
          </div>
          <h1 className="bg-gradient-to-b from-zinc-50 to-zinc-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Precision. Power. Perfection.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
            A fusion of haute horlogerie and future-forward engineering. Crafted to perform. Designed to captivate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 px-6 py-3 text-sm font-medium text-black shadow-[0_0_50px_#fde68a66] ring-1 ring-yellow-300/40 transition-transform hover:scale-[1.02]"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-100 backdrop-blur transition hover:bg-white/10"
            >
              Our Legacy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
