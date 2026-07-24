import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Mail, Code2, Terminal } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';
import LaptopCanvas from '../3d/LaptopCanvas';
import { personalInfo } from '../../data/portfolioData';

export default function Hero({ playClick }) {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const handleScrollTo = (id) => {
    if (playClick) playClick();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glowing Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none"></div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono w-max shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]"></span>
            <span className="tracking-wide">AVAILABLE FOR NEW OPPORTUNITIES</span>
          </motion.div>

          {/* Main Title & Typing Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Hi, I&apos;m <span className="gradient-text-purple-cyan">{personalInfo.name}</span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-cyan-400 h-10 flex items-center">
              <AnimatedText words={personalInfo.roles} />
            </div>
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-xl font-sans leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 interactive group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/cv.pdf"
              download="Ammara_Lohani_CV.pdf"
              onClick={() => {
                if (playClick) playClick();
              }}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl glass-panel border border-white/20 text-white dark:text-white light:text-slate-900 font-semibold text-sm hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 interactive"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl glass-panel border border-purple-500/30 text-purple-300 font-semibold text-sm hover:bg-purple-600/20 transition-all duration-300 interactive"
            >
              <Mail className="w-4 h-4 text-pink-400" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Tech Pill Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono"
          >
            <span className="text-slate-500 font-semibold uppercase tracking-wider">Core Stack:</span>
            {['React.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-cyan-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Side 3D Interactive Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10"></div>
            <LaptopCanvas />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
