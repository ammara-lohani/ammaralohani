import { Code2, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer({ playClick }) {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] dark:bg-[#09090B] light:bg-slate-900 py-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand Mark */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 shadow-md">
            <div className="w-full h-full bg-[#09090B] rounded-[6px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="font-heading font-bold text-base text-white tracking-tight">
            Ammara Lohani
          </span>
        </div>

        {/* Copyright & Tagline */}
        <p className="text-xs font-sans text-slate-400 flex items-center gap-1">
          &copy; {new Date().getFullYear()} Ammara Lohani. Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> React, Tailwind & Three.js
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => playClick && playClick()}
            className="p-2 rounded-full glass-panel hover:text-cyan-400 hover:border-purple-500/40 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => playClick && playClick()}
            className="p-2 rounded-full glass-panel hover:text-purple-400 hover:border-purple-500/40 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            onClick={() => playClick && playClick()}
            className="p-2 rounded-full glass-panel hover:text-pink-400 hover:border-purple-500/40 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
