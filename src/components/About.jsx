import { motion } from 'framer-motion';
import { aboutStory } from '../data/portfolioData';

export default function About() {
  return (
    <section className="py-12 border-b border-slate-100 dark:border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          About
        </h2>

        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
          {aboutStory}
        </p>
      </motion.div>
    </section>
  );
}
