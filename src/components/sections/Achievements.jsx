import { motion } from 'framer-motion';
import { Award, Code, Crown, Heart } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { achievementsData } from '../../data/portfolioData';

const iconMap = {
  Award: Award,
  Code: Code,
  Crown: Crown,
  Heart: Heart,
};

export default function Achievements({ playClick }) {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="MILESTONES & HONORS"
          title="Key Career"
          highlight="Achievements"
          subtitle="Recognitions, academic milestones, and repository statistics."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  if (playClick) playClick();
                }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl text-center flex flex-col items-center justify-between border border-white/10 group cursor-pointer relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/30 to-cyan-500/20 border border-purple-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <IconComp className="w-7 h-7 text-cyan-400 group-hover:text-purple-300 transition-colors" />
                </div>

                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-2">
                  {item.highlight}
                </span>

                <h3 className="font-heading text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 font-sans">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
