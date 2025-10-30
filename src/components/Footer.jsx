export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Flames. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <a href="#privacy" className="hover:text-zinc-200">Privacy</a>
            <a href="#terms" className="hover:text-zinc-200">Terms</a>
            <a href="#support" className="hover:text-zinc-200">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
