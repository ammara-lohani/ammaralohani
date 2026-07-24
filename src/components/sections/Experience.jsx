import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { experienceData } from '../../data/portfolioData';

export default function Experience({ playClick }) {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="CAREER PATH"
          title="Professional Experience"
          highlight="& Academic Roles"
          subtitle="My journey across full-stack development, software engineering internships, and university laboratory mentorship."
        />

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#09090B] border-2 border-purple-500 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(124,58,237,0.6)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              </div>

              {/* Card Container */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] font-mono mb-2">
                      {exp.type}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-cyan-400 font-medium mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-white/5 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Responsibility Bullet Points */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-400">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
