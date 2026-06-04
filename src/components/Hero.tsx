import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FiDownload, FiMail } from 'react-icons/fi';
import { BsFolder2Open } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';

const roles = [
  'Backend Engineer',
  'Java Developer',
  'Spring Boot Expert',
  'AI Integration Enthusiast',
  'Problem Solver',
];

function TypewriterText({ isDark }: { isDark: boolean }) {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && charIdx < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 70);
    } else if (!deleting && charIdx === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="gradient-text font-outfit">
      {displayed}
      <span className={`animate-pulse ${isDark ? 'text-accent-cyan' : 'text-accent-teal'}`}>|</span>
    </span>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="summary"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 70% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(6,182,212,0.12) 0%, transparent 60%), #0a0a0f'
            : 'radial-gradient(ellipse 80% 70% at 50% -10%, rgba(109,40,217,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(8,145,178,0.08) 0%, transparent 60%), #f8f7ff',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #7c3aed, transparent)'
            : 'radial-gradient(circle, #6d28d9, transparent)',
        }}
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #06b6d4, transparent)'
            : 'radial-gradient(circle, #0891b2, transparent)',
        }}
      />
      <motion.div
        animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #2563eb, transparent)'
            : 'radial-gradient(circle, #4f46e5, transparent)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 glass-card border-white/10 transition-colors duration-300 ${
            isDark ? '' : 'border-indigo-200/30'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className={`transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-indigo-900/70'
          }`}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`font-outfit font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-indigo-900'
          }`}
        >
          Siddhant
          <br />
          <span className="gradient-text">Mohanty</span>
        </motion.h1>

        {/* Role / Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`text-xl sm:text-2xl font-inter font-medium mb-3 transition-colors duration-300 ${
            isDark ? 'text-white/60' : 'text-indigo-700/60'
          }`}
        >
          Software Engineer |{' '}
          <TypewriterText isDark={isDark} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className={`text-sm sm:text-base tracking-widest uppercase mb-10 transition-colors duration-300 ${
            isDark ? 'text-white/40' : 'text-indigo-700/50'
          }`}
        >
          Java · Spring Boot · REST APIs · Microservices · AI Integration
        </motion.p>

        {/* Summary paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10 transition-colors duration-300 ${
            isDark ? 'text-white/60' : 'text-indigo-700/70'
          }`}
        >
          Software Engineer with hands-on experience building scalable backend systems using Java,
          Spring Boot, REST APIs, PostgreSQL, and microservice architectures. Strong foundation in
          data structures, algorithms, object-oriented design, testing, and software engineering
          principles. Experienced in delivering production-grade features through Agile development
          practices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className={`group flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shimmer-btn shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 ${
              isDark ? '' : 'shadow-indigo-500/20 hover:shadow-indigo-500/40'
            }`}
          >
            <BsFolder2Open size={18} />
            View Projects
          </button>
          <a
            href="/assets/Siddhant-Mohanty-Resume.pdf"
            download="Siddhant-Mohanty-Resume.pdf"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-card border transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'text-white/80 hover:text-white border-white/10 hover:border-accent-purple/50 hover:shadow-lg hover:shadow-purple-500/20'
                : 'text-indigo-900 border-indigo-200/40 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20'
            }`}
          >
            <FiDownload size={18} />
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-card border transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'text-white/80 hover:text-white border-white/10 hover:border-accent-cyan/50 hover:shadow-lg hover:shadow-cyan-500/20'
                : 'text-indigo-900 border-indigo-200/40 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/20'
            }`}
          >
            <FiMail size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
            isDark ? 'text-white/30' : 'text-indigo-700/40'
          }`}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <HiArrowDown className={`transition-colors duration-300 ${
              isDark ? 'text-white/30' : 'text-indigo-700/40'
            }`} size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
