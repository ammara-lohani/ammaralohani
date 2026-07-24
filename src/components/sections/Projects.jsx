import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, X, Eye } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from '../../data/portfolioData';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'react', label: 'React.js' },
];

export default function Projects({ playClick }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PORTFOLIO SHOWCASE"
          title="Featured Projects"
          highlight="& Case Studies"
          subtitle="Explore some of the web applications, e-commerce stores, and system tools I have engineered."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (playClick) playClick();
                  setActiveFilter(cat.id);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 interactive ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'glass-panel border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Top Featured Tag */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/40 text-[10px] font-mono font-bold text-white shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-yellow-300" /> FEATURED
                    </div>
                  )}

                  {/* Preview Modal Trigger */}
                  <button
                    onClick={() => {
                      if (playClick) playClick();
                      setSelectedProject(project);
                    }}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white hover:bg-purple-600 transition-colors opacity-0 group-hover:opacity-100"
                    title="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {project.tagline}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-4 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-white/10 text-[11px] font-mono text-purple-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center space-x-3 pt-3 border-t border-white/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (playClick) playClick();
                        }}
                        className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-xl glass-panel border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-purple-500/40 transition-all interactive"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => {
                          if (playClick) playClick();
                          setSelectedProject(project);
                        }}
                        className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-xs font-semibold text-white shadow-md shadow-purple-600/30 hover:scale-[1.02] transition-all interactive"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel p-6 sm:p-8 rounded-3xl max-w-2xl w-full border border-purple-500/30 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel hover:bg-rose-500/20 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-6 border border-white/10"
              />

              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                {selectedProject.tagline}
              </span>
              <h2 className="font-heading text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-purple-600/20 border border-purple-500/40 text-xs font-mono text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl glass-panel text-center text-xs font-semibold text-white border border-white/20 hover:border-purple-400 flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" /> View GitHub Repository
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-xs font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Live Application
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
