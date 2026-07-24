import { GithubIcon, LinkedinIcon } from './common/Icons';
import { Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full theme-header backdrop-blur-md border-b transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Social Icons */}
        <div className="flex items-center space-x-4 theme-muted">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.email}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: View CV */}
        <div className="flex items-center">
          <a
            href="/_ammara%20lohani.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-xs font-medium theme-text border theme-border px-3 py-1.5 rounded-md hover:bg-blue-600 hover:text-white transition-all"
          >
            <span>View CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
}
