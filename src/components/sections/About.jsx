import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, Cpu, Globe, Award } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { aboutCards, statsData, personalInfo } from '../../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Sparkles: Sparkles,
  Cpu: Cpu,
  Globe: Globe,
};

export default function About({ playClick }) {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT ME"
          title="Engineering Modern"
          highlight="Digital Solutions"
          subtitle={personalInfo.aboutText}
        />

        {/* Animated Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aboutCards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Award;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => {
                  if (playClick) playClick();
                }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
              >
                {/* Glowing Top Border Highlight */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`}></div>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300 shadow-md">
                  <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-sans leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Statistics Counter Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-3xl border border-purple-500/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            {statsData.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 md:px-4 flex flex-col items-center">
                <span className="font-heading text-4xl sm:text-5xl font-extrabold gradient-text-purple-cyan tracking-tight">
                  {stat.value}{stat.suffix}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
