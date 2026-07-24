import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { projectsList } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-b theme-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-xs font-mono uppercase tracking-widest theme-muted font-semibold">
          Featured Projects
        </h2>

        {/* Medium Sized Clean Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl border theme-card hover:border-blue-500 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>

                <h3 className="text-base font-bold theme-text group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm theme-muted leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded theme-pill border"
                    >
                      {t}
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
