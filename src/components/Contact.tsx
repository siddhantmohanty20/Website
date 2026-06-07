import { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

// This line reads the secret URL directly from your new .env file
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL; 

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Safety check to ensure your .env variable is loading correctly
    if (!GOOGLE_SCRIPT_URL) {
      toast.error('Configuration error. Please email directly.');
      console.error('Missing VITE_GOOGLE_SCRIPT_URL in your .env file');
      return;
    }

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      // mode: 'no-cors' prevents the browser from blocking requests due to Google's backend redirects
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      toast.success('Message sent! I will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDark ? '#1a1a2e' : '#ffffff',
            color: isDark ? '#e2e8f0' : '#1e1b4b',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.1)',
          },
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(124,58,237,0.07) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(109,40,217,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label text-sm font-semibold tracking-widest uppercase mb-3 transition-colors duration-300">
            Get In Touch
          </p>
          <h2 className="section-title">Contact Me</h2>
          <p className={`text-sm mt-4 max-w-md mx-auto transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/60'
            }`}>
            Whether you have an opportunity, a question, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <h3 className={`font-outfit font-bold text-xl mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
              }`}>
              Let's talk
            </h3>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-indigo-700/70'
              }`}>
              I'm currently open to new opportunities. If you have a project or role in mind, I'd love to hear about it.
            </p>

            {/* Contact items */}
            <div className="space-y-4 mt-2">
              <a
                href="mailto:siddhantmohanty606@gmail.com"
                className={`flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 glass-card border ${isDark
                    ? 'border-white/[0.06] hover:border-accent-purple/40'
                    : 'border-indigo-200/40 hover:border-indigo-400/40'
                  }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: isDark
                      ? 'rgba(124,58,237,0.15)'
                      : 'rgba(109,40,217,0.15)',
                    border: isDark
                      ? '1px solid rgba(124,58,237,0.3)'
                      : '1px solid rgba(109,40,217,0.3)',
                  }}
                >
                  <HiMail size={18} className={isDark ? 'text-accent-purple' : 'text-accent-violet'} />
                </div>
                <div>
                  <p className={`text-xs mb-0.5 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                    }`}>
                    Email
                  </p>
                  <p className={`text-sm font-medium group-hover:text-white transition-colors ${isDark ? 'text-white/80' : 'text-indigo-900'
                    }`}>
                    siddhantmohanty606@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918709319507"
                className={`flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 glass-card border ${isDark
                    ? 'border-white/[0.06] hover:border-accent-blue/40'
                    : 'border-indigo-200/40 hover:border-blue-400/40'
                  }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: isDark
                      ? 'rgba(37,99,235,0.15)'
                      : 'rgba(37,99,235,0.15)',
                    border: isDark
                      ? '1px solid rgba(37,99,235,0.3)'
                      : '1px solid rgba(37,99,235,0.3)',
                  }}
                >
                  <HiPhone size={18} className={isDark ? 'text-accent-blue' : 'text-accent-indigo'} />
                </div>
                <div>
                  <p className={`text-xs mb-0.5 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                    }`}>
                    Phone
                  </p>
                  <p className={`text-sm font-medium group-hover:text-white transition-colors ${isDark ? 'text-white/80' : 'text-indigo-900'
                    }`}>
                    +91 87093 19507
                  </p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/siddhant-mohanty-132a02257/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 glass-card border ${isDark
                    ? 'text-white/70 hover:text-white border-white/[0.06] hover:border-accent-blue/40 hover:shadow-lg hover:shadow-blue-500/10'
                    : 'text-indigo-900 border-indigo-200/40 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
              >
                <FiLinkedin size={17} />
                LinkedIn
              </a>
              <a
                href="https://github.com/siddhantmohanty20"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 glass-card border ${isDark
                    ? 'text-white/70 hover:text-white border-white/[0.06] hover:border-white/20 hover:shadow-lg'
                    : 'text-indigo-900 border-indigo-200/40 hover:border-indigo-400/40 hover:shadow-lg'
                  }`}
              >
                <FiGithub size={17} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`glass-card border p-7 flex flex-col gap-4 transition-colors duration-300 ${isDark
                ? 'border-white/[0.08]'
                : 'border-indigo-200/30'
              }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className={`text-xs mb-1.5 block transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-indigo-700/60'
                  }`}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 ${isDark
                      ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 focus:border-accent-purple/50'
                      : 'bg-indigo-50 border border-indigo-200/40 text-indigo-900 placeholder-indigo-700/30 focus:border-indigo-400/50'
                    }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className={`text-xs mb-1.5 block transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-indigo-700/60'
                  }`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 ${isDark
                      ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 focus:border-accent-purple/50'
                      : 'bg-indigo-50 border border-indigo-200/40 text-indigo-900 placeholder-indigo-700/30 focus:border-indigo-400/50'
                    }`}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className={`text-xs mb-1.5 block transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-indigo-700/60'
                }`}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Project Inquiry"
                className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 ${isDark
                    ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 focus:border-accent-purple/50'
                    : 'bg-indigo-50 border border-indigo-200/40 text-indigo-900 placeholder-indigo-700/30 focus:border-indigo-400/50'
                  }`}
              />
            </div>

            {/* Message */}
            <div>
              <label className={`text-xs mb-1.5 block transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-indigo-700/60'
                }`}>
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none ${isDark
                    ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 focus:border-accent-purple/50'
                    : 'bg-indigo-50 border border-indigo-200/40 text-indigo-900 placeholder-indigo-700/30 focus:border-indigo-400/50'
                  }`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shimmer-btn hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${isDark ? 'hover:shadow-purple-500/30' : 'shadow-indigo-500/20 hover:shadow-indigo-500/40'
                }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-4 h-4 rounded-full block border-2 border-white/30 border-t-white"
                  />
                  Sending...
                </span>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer bar */}
      <div className={`mt-20 pt-6 text-center transition-colors duration-300 ${isDark
          ? 'border-t border-white/[0.06]'
          : 'border-t border-indigo-200/30'
        }`}>
        <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-white/30' : 'text-indigo-700/50'
          }`}>
          © 2026 Siddhant Mohanty. All rights reserved.
        </p>
        <p className={`text-xs mt-1 transition-colors duration-300 ${isDark ? 'text-white/15' : 'text-indigo-700/30'
          }`}>
          Built with React, Vite, Tailwind CSS & Framer Motion
        </p>
      </div>
    </section>
  );
}