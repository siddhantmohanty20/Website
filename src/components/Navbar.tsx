import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuLine, RiCloseLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Coding', href: '#coding-profiles' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function ProfileAvatar({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative rounded-full animate-pulse-glow">
      <div
        className="w-9 h-9 rounded-full p-[2px] overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #7c3aed, #06b6d4)'
            : 'linear-gradient(135deg, #6d28d9, #0891b2)',
        }}
      >
        <img
          src="/assets/profile.jpg"
          alt="Siddhant Mohanty"
          className="block w-full h-full rounded-full object-cover object-[50%_35%] bg-gradient-to-br from-violet-600 to-blue-500"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
            target.nextElementSibling?.classList.add('flex');
          }}
        />
        <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-violet-600 to-blue-500 items-center justify-center text-white text-sm font-semibold font-outfit">
          SM
        </div>
      </div>
      <span
        className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2"
        style={{ borderColor: isDark ? '#0a0a0f' : '#f8f7ff' }}
      />
    </div>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('summary');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-dark-900/90 border-b border-white/[0.06]'
            : 'bg-white/85 border-b border-indigo-200/30'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#summary')}
            className={`font-outfit font-bold text-xl tracking-tight transition-colors duration-300 ${
              isDark ? '' : 'text-indigo-900'
            }`}
          >
            <span className="gradient-text">SM</span>
            <span className={`ml-1 text-sm font-normal hidden sm:inline transition-colors duration-300 ${
              isDark ? 'text-white/60' : 'text-indigo-700/60'
            }`}>
              / Siddhant Mohanty
            </span>
          </button>

          {/* Desktop Nav + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-indigo-900'
                      : isDark
                      ? 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
                      : 'text-indigo-700/60 hover:text-indigo-900 hover:bg-indigo-100/20'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{
                        background: isDark
                          ? 'linear-gradient(90deg, #7c3aed, #06b6d4)'
                          : 'linear-gradient(90deg, #6d28d9, #0891b2)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  : 'text-indigo-700 hover:bg-indigo-100/30'
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                {isDark ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  : 'text-indigo-700 hover:bg-indigo-100/30'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <RiMoonLine size={18} /> : <RiSunLine size={18} />}
            </button>

            {/* Profile image */}
            <ProfileAvatar isDark={isDark} />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  : 'text-indigo-700 hover:bg-indigo-100/30'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
            </button>
          </div>

          {/* Desktop Profile picture */}
          <div className="hidden lg:flex items-center gap-3">
            <ProfileAvatar isDark={isDark} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden overflow-hidden ${
              isDark
                ? 'bg-dark-800/95 border-b border-white/[0.06]'
                : 'bg-white/90 border-b border-indigo-200/20'
            }`}
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <div className="px-4 py-3 grid grid-cols-3 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`py-2 px-3 text-sm rounded-lg text-center transition-all ${
                      isActive
                        ? isDark
                          ? 'text-white font-medium'
                          : 'text-indigo-900 font-medium'
                        : isDark
                        ? 'text-white/50 hover:text-white'
                        : 'text-indigo-700/60 hover:text-indigo-900'
                    }`}
                    style={
                      isActive
                        ? {
                            background: isDark
                              ? 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.15))'
                              : 'linear-gradient(135deg, rgba(109,40,217,0.15), rgba(8,145,178,0.1))',
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
