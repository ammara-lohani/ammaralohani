import { motion } from 'framer-motion';
import { Users, Mic, Camera, HeartHandshake, ShieldCheck } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { leadershipData } from '../../data/portfolioData';

const iconMap = {
  Users: Users,
  Mic: Mic,
  Camera: Camera,
  HeartHandshake: HeartHandshake,
};

export default function Leadership({ playClick }) {
  return (
    <section id="leadership" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="VOLUNTEER & EXTRA-CURRICULAR"
          title="Leadership & Community"
          highlight="Involvement"
          subtitle="Building tech communities, fostering student empowerment, and coordinating university societies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((item, idx) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  if (playClick) playClick();
                }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden group cursor-pointer"
              >
                {/* Accent Header Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}></div>

                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <IconComp className="w-7 h-7 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        {item.role}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.organization}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
