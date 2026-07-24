import { motion } from 'framer-motion';
import { techStackGrouped } from '../data/portfolioData';

export default function TechStack() {
  return (
    <section className="py-12 border-b theme-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-xs font-mono uppercase tracking-widest theme-muted font-semibold">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {techStackGrouped.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-lg border theme-card space-y-3"
            >
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium theme-pill px-2.5 py-1 rounded border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
