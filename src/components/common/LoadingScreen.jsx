import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[10000] bg-[#09090B] flex flex-col items-center justify-center p-4 selection:bg-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
          <div className="absolute w-60 h-60 bg-cyan-600/15 rounded-full blur-[90px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 shadow-2xl shadow-purple-500/30 mb-6 flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#09090B] rounded-[14px] flex items-center justify-center">
                <Code2 className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Name Heading */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-heading text-2xl font-bold tracking-tight text-white mb-2"
            >
              AMMARA LOHANI
            </motion.h2>

            <p className="text-xs font-mono text-purple-400/80 tracking-widest uppercase mb-8 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" /> INITIALIZING 3D EXPERIENCE
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-900/80 rounded-full h-2 p-0.5 border border-white/10 mb-3 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Percentage Display */}
            <div className="flex justify-between w-full text-[11px] font-mono text-slate-400">
              <span>System Ready</span>
              <span className="text-cyan-400 font-semibold">{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
