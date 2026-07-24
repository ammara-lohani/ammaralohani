import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-14 border-b theme-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-6"
      >
        {/* Status & Location */}
        <div className="flex items-center space-x-3 text-xs font-mono theme-muted">
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{personalInfo.availability}</span>
          </span>
          <span className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 opacity-70" />
            <span>{personalInfo.location}</span>
          </span>
        </div>

        {/* Headline & Writing Style Sentence */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight theme-text">
            Hi, I&apos;m {personalInfo.name}.
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400">
            {personalInfo.title}
          </p>

          {/* Writing Style Accent Content with Slow Typing Effect */}
          <div className="pt-2">
            <motion.p 
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04,
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 font-semibold tracking-wide"
            >
              {personalInfo.writingSentence.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  transition={{ ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>

        {/* View Projects Button */}
        <div className="pt-3">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
