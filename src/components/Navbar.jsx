import { Menu, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <motion.a
              href="#"
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(56,189,248,0.35)]" />
              <span className="text-white text-lg font-semibold tracking-wide">JRCrestus</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#acts" className="text-slate-300 hover:text-white transition">Story</a>
              <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-white shadow hover:opacity-90 transition"
              >
                <Phone className="h-4 w-4" />
                Get a Quote
              </a>
            </div>

            <button className="md:hidden rounded-xl border border-white/10 p-2 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
