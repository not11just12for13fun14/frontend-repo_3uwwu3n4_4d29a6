import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            JRCrestus
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Scaffolding service providers crafting safe, precise, and elegant temporary structures that let your projects reach new heights.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a href="#acts" className="rounded-xl bg-white/10 backdrop-blur-md px-5 py-3 text-white border border-white/20 hover:bg-white/15 transition">Start the story</a>
            <a href="#contact" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white shadow hover:opacity-90 transition">Talk to us</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
