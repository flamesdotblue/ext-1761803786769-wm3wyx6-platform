import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CollectionGrid from './components/CollectionGrid.jsx';
import Footer from './components/Footer.jsx';
import LoadingOverlay from './components/LoadingOverlay.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-zinc-800 selection:text-zinc-100">
      <AnimatePresence>{loading && <LoadingOverlay />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <motion.section
          id="collection"
          className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                The Collection
              </h2>
              <p className="mt-2 max-w-2xl text-zinc-400">
                Advanced chronometry meets sculpted design. Explore pieces engineered with uncompromising precision.
              </p>
            </div>
            <a
              href="#collection"
              className="hidden rounded-full bg-gradient-to-r from-yellow-600/90 to-yellow-400/80 px-5 py-2 text-sm font-medium text-black shadow-[0_0_40px_#fde68a55] ring-1 ring-yellow-400/40 transition hover:brightness-110 sm:inline-flex"
            >
              View All
            </a>
          </div>
          <CollectionGrid />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
