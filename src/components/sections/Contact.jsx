import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle2, Copy, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

export default function Contact({ playClick }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playClick) playClick();

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#06B6D4', '#EC4899', '#34D399'],
      });

      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    if (playClick) playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let&apos;s Build Something"
          highlight="Extraordinary Together"
          subtitle="Have a project in mind, a job opportunity, or just want to connect? Send a message below!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
                Contact Details
              </h3>

              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <span className="text-sm font-semibold text-white font-mono">{personalInfo.email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-xl glass-panel hover:bg-purple-600/20 text-slate-300 hover:text-cyan-400 transition-colors interactive"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center space-x-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location & Availability</span>
                  <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-4">
                  Connect via Socials
                </span>
                <div className="flex space-x-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClick && playClick()}
                    className="flex-1 py-3 rounded-2xl glass-panel glass-panel-hover flex items-center justify-center space-x-2 text-xs font-semibold text-white border border-white/10 interactive"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClick && playClick()}
                    className="flex-1 py-3 rounded-2xl glass-panel glass-panel-hover flex items-center justify-center space-x-2 text-xs font-semibold text-white border border-white/10 interactive"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/20 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Ammara will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-sans placeholder:text-slate-600"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-sans placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ammara, I would like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-sans placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2.5 interactive disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
