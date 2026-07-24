import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-4">
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase mb-4 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight max-w-3xl"
      >
        {title} <span className="gradient-text-purple-cyan">{highlight}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl font-sans leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
