import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Clock, Award } from 'lucide-react';

const acts = [
  {
    title: 'Act I — The Brief',
    lead: 'Every build begins with a story.',
    text: 'We listen. Your site, your constraints, your timeline. We map safety, access, load, weather, and workflow into a clear plan.',
    icon: ShieldCheck,
  },
  {
    title: 'Act II — The Build',
    lead: 'Precision becomes structure.',
    text: 'Our crews assemble modular systems with millimeter discipline — engineered calculations, tagged components, and tidy edges.',
    icon: Wrench,
  },
  {
    title: 'Act III — The Pulse',
    lead: 'Work never waits.',
    text: 'We keep you moving with inspections, adjustments, and on-call support. Downtime is the villain; we don’t let it in.',
    icon: Clock,
  },
  {
    title: 'Act IV — The Strike',
    lead: 'Leave it cleaner than we found it.',
    text: 'Swift dismantle, zero mess, site returned to its original cadence — or better.',
    icon: Award,
  },
];

export default function Acts() {
  return (
    <section id="acts" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            A landing page like a play script
          </motion.h2>
          <motion.p
            className="mt-3 text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Four acts to tell how we scaffold certainty around your build.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {acts.map((act, idx) => (
            <motion.div
              key={act.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-cyan-400/30 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-300 border border-cyan-400/20">
                  <act.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{act.title}</h3>
                  <p className="text-cyan-200/80 mt-1">{act.lead}</p>
                  <p className="text-slate-300 mt-2">{act.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
