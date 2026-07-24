import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-neutral-900 py-8 text-xs font-mono text-slate-400 dark:text-slate-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        <p>Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
