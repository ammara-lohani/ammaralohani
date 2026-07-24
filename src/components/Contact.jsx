import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Contact
        </h2>

        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Let&apos;s build something together.
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 font-sans max-w-md">
            Whether you have a project, an engineering role, or just want to discuss software ideas, feel free to reach out.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
            <a
              href={personalInfo.socials.email}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
