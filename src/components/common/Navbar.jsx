import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Code2, Download } from 'lucide-react';

import { useScrollSpy } from '../../hooks/useScrollSpy';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme, soundEnabled, toggleSound, playClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (playClick) playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#09090B]/80 dark:bg-[#09090B]/80 light:bg-white/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-900/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center space-x-2.5 group interactive"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#09090B] dark:bg-[#09090B] light:bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-heading font-bold text-lg text-white dark:text-white light:text-slate-900 tracking-tight">
            Ammara<span className="text-purple-500">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors duration-200 interactive ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full shadow-md shadow-purple-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Controls & Quick Actions */}
        <div className="flex items-center space-x-2.5">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              if (playClick) playClick();
              toggleSound();
            }}
            aria-label="Toggle Sound Effects"
            className="p-2.5 rounded-full glass-panel hover:bg-purple-600/20 text-slate-300 hover:text-cyan-400 transition-all duration-300 interactive border border-white/10"
            title={soundEnabled ? 'Disable Sound Effects' : 'Enable Sound Effects'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              if (playClick) playClick();
              toggleTheme();
            }}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full glass-panel hover:bg-purple-600/20 text-amber-400 transition-all duration-300 interactive border border-white/10"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button>

          {/* Download CV CTA */}
          <a
            href="/cv.pdf"
            download="Ammara_Lohani_CV.pdf"
            onClick={() => {
              if (playClick) playClick();
            }}
            className="hidden sm:flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 interactive"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              if (playClick) playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 interactive"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#09090B]/95 dark:bg-[#09090B]/95 light:bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600/30 to-cyan-500/20 text-white border border-purple-500/40'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]"></span>}
                  </button>
                );
              })}

              <div className="pt-2">
                <a
                  href="/cv.pdf"
                  download="Ammara_Lohani_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 text-xs font-semibold w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae (CV)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
