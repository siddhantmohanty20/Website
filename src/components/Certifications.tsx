import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const certs = [
  {
    name: 'Java & Spring Certification',
    issuer: 'Udemy',
    image: '/assets/certificates/java-spring-certification.png',
  },
  {
    name: 'C++ Certification',
    issuer: 'Udemy',
    image: '/assets/certificates/cpp-certification.png',
  },
  {
    name: 'App Design Certificate',
    issuer: 'Coursera',
    image: '/assets/certificates/app-design.png',
  },
  {
    name: 'Coursera Certificate',
    issuer: 'Coursera',
    image: '/assets/certificates/microeconomics-principle.png',
  },
];

export default function Certifications() {
  const { theme } = useTheme();
  const [selectedCert, setSelectedCert] =
    useState<(typeof certs)[number] | null>(null);

  const isDark = theme === 'dark';

  return (
    <section
      id="certifications"
      className={`relative py-24 px-6 transition-colors duration-300 ${
        isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(109,40,217,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label text-sm font-semibold tracking-widest uppercase mb-3 transition-colors duration-300">
            Credentials
          </p>

          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`glass-card border overflow-hidden transition-all duration-300 group ${
                isDark
                  ? 'border-white/[0.08] hover:border-accent-purple/40 hover:shadow-xl hover:shadow-purple-500/10'
                  : 'border-indigo-200/30 hover:border-indigo-300/50 hover:shadow-xl hover:shadow-indigo-500/10'
              }`}
            >
              {/* Certificate Image */}
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="relative h-48 w-full overflow-hidden text-left"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.1))'
                    : 'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(37,99,235,0.08))',
                }}
                aria-label={`View ${cert.name}`}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  loading="lazy"
                  className="pointer-events-none h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />

                {/* Fallback Icon Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 pointer-events-none">
                  <HiShieldCheck
                    size={48}
                    className={
                      isDark
                        ? 'text-accent-purple'
                        : 'text-accent-violet'
                    }
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? 'from-dark-800/80 to-transparent'
                      : 'from-light-200/60 to-transparent'
                  }`}
                />
              </button>

              {/* Info */}
              <div className="p-5">
                <h3
                  className={`font-outfit font-semibold text-sm mb-1 leading-tight transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-indigo-900'
                  }`}
                >
                  {cert.name}
                </h3>

                <p
                  className={`text-xs mb-4 transition-colors duration-300 ${
                    isDark
                      ? 'text-white/40'
                      : 'text-indigo-700/50'
                  }`}
                >
                  {cert.issuer}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                    isDark
                      ? 'text-accent-purple hover:text-accent-purple-light'
                      : 'text-accent-violet hover:text-accent-indigo'
                  }`}
                >
                  <FiExternalLink size={13} />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/80 px-4 py-6 backdrop-blur-md sm:px-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${
                isDark
                  ? 'border-white/10 bg-dark-900'
                  : 'border-indigo-200/40 bg-white'
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className={`flex items-center justify-between gap-4 border-b px-4 py-3 ${
                  isDark
                    ? 'border-white/10'
                    : 'border-indigo-200/50'
                }`}
              >
                <div>
                  <h3
                    className={`font-outfit text-base font-semibold sm:text-lg ${
                      isDark ? 'text-white' : 'text-indigo-900'
                    }`}
                  >
                    {selectedCert.name}
                  </h3>

                  <p
                    className={`text-xs ${
                      isDark
                        ? 'text-white/50'
                        : 'text-indigo-700/60'
                    }`}
                  >
                    {selectedCert.issuer}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg p-2 transition-colors ${
                      isDark
                        ? 'text-white/70 hover:bg-white/10 hover:text-white'
                        : 'text-indigo-700 hover:bg-indigo-100/60 hover:text-indigo-900'
                    }`}
                    aria-label="Open certificate in new tab"
                  >
                    <FiExternalLink size={20} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className={`rounded-lg p-2 transition-colors ${
                      isDark
                        ? 'text-white/70 hover:bg-white/10 hover:text-white'
                        : 'text-indigo-700 hover:bg-indigo-100/60 hover:text-indigo-900'
                    }`}
                    aria-label="Close certificate viewer"
                  >
                    <FiX size={22} />
                  </button>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-white p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}