import { motion } from 'framer-motion';

const products = [
  {
    id: 'chrono-x-ti',
    name: 'Chrono X Titanium',
    price: 4890,
    accent: 'from-yellow-500/80 to-amber-300/80',
  },
  {
    id: 'aero-gmt',
    name: 'Aero GMT Steel',
    price: 3720,
    accent: 'from-zinc-200/70 to-zinc-500/70',
  },
  {
    id: 'noir-automatic',
    name: 'Noir Automatic',
    price: 2890,
    accent: 'from-emerald-400/70 to-teal-300/70',
  },
  {
    id: 'lunar-moonphase',
    name: 'Lunar Moonphase',
    price: 5650,
    accent: 'from-indigo-400/70 to-violet-300/70',
  },
  {
    id: 'carbon-r',
    name: 'Carbon R Forged',
    price: 6190,
    accent: 'from-slate-300/70 to-slate-500/70',
  },
  {
    id: 'ocean-200',
    name: 'Ocean 200 Diver',
    price: 3420,
    accent: 'from-cyan-300/70 to-blue-400/70',
  },
];

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, idx) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-4"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent}`} />
            <div className="relative aspect-[4/3] w-full">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />
              <motion.div
                whileHover={{ scale: 1.04, rotate: -0.2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="absolute inset-8 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-[inset_0_0_60px_rgba(255,255,255,0.04)]"
              />
              <motion.div
                className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/10 bg-black/60 backdrop-blur"
                initial={{ y: -6, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <motion.div
                className="absolute bottom-8 left-8 h-6 w-24 rounded-full border border-white/10 bg-white/5"
                initial={{ y: 6, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 p-4">
            <div>
              <h3 className="text-lg font-medium text-zinc-100">{p.name}</h3>
              <p className="text-sm text-zinc-400">${p.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`#/product/${p.id}`}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-200 transition hover:bg-white/5"
              >
                Details
              </a>
              <button
                className="rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 px-3 py-1.5 text-xs font-semibold text-black shadow-[0_0_20px_#fde68a66] ring-1 ring-yellow-300/40 transition active:scale-[0.98]"
                onClick={() => alert(`${p.name} added to cart`)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
