import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCode, Palette, Atom, Layers, Server, Cpu,
  Database, Table, Flame, Zap, Coffee, Code, Terminal, GitBranch,
  Monitor, Box
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from '../common/Icons';
import SectionHeader from '../common/SectionHeader';
import { skillsCategories, skillsData } from '../../data/portfolioData';

const iconComponents = {
  FileCode, Palette, FileYellow: FileCode, Atom, Layers, Server, Cpu,
  Database, Table, Flame, Zap, Coffee, Code, Terminal, GitBranch,
  Github: GithubIcon, Monitor, Figma: FigmaIcon, Box
};

export default function Skills({ playClick }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL SKILLS"
          title="Tools & Technologies"
          highlight="I Excel In"
          subtitle="A comprehensive overview of my technical stack, frameworks, database systems, and development tools."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillsCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (playClick) playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 interactive ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'glass-panel border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComp = iconComponents[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    y: -6,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: '0 12px 30px -10px rgba(124, 58, 237, 0.3)',
                  }}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between border border-white/10 group cursor-pointer relative overflow-hidden"
                >
                  {/* Ambient Glow */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  ></div>

                  <div>
                    {/* Icon & Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="font-heading font-semibold text-sm text-white dark:text-white light:text-slate-900 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Level Progress Indicator */}
                  <div className="mt-4 pt-2 border-t border-white/5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                      <span>Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
