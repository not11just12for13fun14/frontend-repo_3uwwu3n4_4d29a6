import { motion } from 'framer-motion';
import { Layers, Crane, Ruler, HardHat } from 'lucide-react';

const services = [
  {
    title: 'Commercial Scaffolding',
    text: 'Facade access, shoring, and staging for offices, retail, and high-rise projects.',
    icon: Layers,
  },
  {
    title: 'Industrial Platforms',
    text: 'Heavy-duty systems for plants and infrastructure with strict safety protocols.',
    icon: Crane,
  },
  {
    title: 'Design & Engineering',
    text: 'Stamped drawings, load calculations, and compliance documentation.',
    icon: Ruler,
  },
  {
    title: 'Site Safety & Training',
    text: 'On-site toolbox talks, inspections, and competency training.',
    icon: HardHat,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              Built like a safety-first production
            </motion.h2>
            <motion.p
              className="mt-3 text-slate-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              The choreography behind our work: engineered planning, disciplined assembly, and responsive support.
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-blue-400/30 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-300 border border-blue-400/20 w-fit">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-semibold mt-3">{s.title}</h3>
                <p className="text-slate-300 mt-2">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
