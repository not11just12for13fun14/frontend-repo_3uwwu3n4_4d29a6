import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <motion.h3
                className="text-2xl md:text-3xl font-semibold text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                Tell us about your site
              </motion.h3>
              <p className="mt-2 text-slate-300">We respond within one business day.</p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Name" />
                <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" />
                <input className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Project location" />
                <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="What do you need?" />
                <button type="button" className="sm:col-span-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white shadow hover:opacity-90 transition">Send request</button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300"><Phone className="h-5 w-5 text-cyan-300"/> +1 (555) 555-0123</div>
              <div className="flex items-center gap-3 text-slate-300"><Mail className="h-5 w-5 text-cyan-300"/> hello@jrcrestus.com</div>
              <div className="flex items-center gap-3 text-slate-300"><MapPin className="h-5 w-5 text-cyan-300"/> Your City, Country</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
