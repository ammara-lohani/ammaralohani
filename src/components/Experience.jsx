import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-12 border-b theme-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-xs font-mono uppercase tracking-widest theme-muted font-semibold">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceTimeline.map((item) => (
            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6">
              {/* Timeline Period */}
              <div className="text-xs font-mono theme-muted pt-0.5">
                {item.period}
              </div>

              {/* Position Info */}
              <div className="sm:col-span-3 space-y-2">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold theme-text">
                    {item.role}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm theme-muted leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded theme-pill border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
