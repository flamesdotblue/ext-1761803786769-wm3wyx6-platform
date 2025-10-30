import { motion } from 'framer-motion';

export default function LoadingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] grid place-items-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-3"
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.span
          className="h-6 w-6 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-200 to-amber-500 shadow-[0_0_60px_#fde68a]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
        />
        <motion.span
          className="bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-lg font-semibold tracking-widest text-transparent"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          FLAMES
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
