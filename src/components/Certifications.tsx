import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const certs = [
  {
    name: 'Certification Name 1',
    issuer: 'Issuing Organization 1',
    image: './assets/cert-1.jpg', // TODO: Replace with actual certification screenshot/badge
    link: '#', // TODO: Replace with actual certificate link
  },
  {
    name: 'Certification Name 2',
    issuer: 'Issuing Organization 2',
    image: './assets/cert-2.jpg', // TODO: Replace with actual certification screenshot/badge
    link: '#', // TODO: Replace with actual certificate link
  },
  {
    name: 'Certification Name 3',
    issuer: 'Issuing Organization 3',
    image: './assets/cert-3.jpg', // TODO: Replace with actual certification screenshot/badge
    link: '#', // TODO: Replace with actual certificate link
  },
  {
    name: 'Certification Name 4',
    issuer: 'Issuing Organization 4',
    image: './assets/cert-4.jpg', // TODO: Replace with actual certification screenshot/badge
    link: '#', // TODO: Replace with actual certificate link
  },
];

export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}>
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
              className={`glass-card border overflow-hidden transition-all duration-300 group ${isDark
                  ? 'border-white/[0.08] hover:border-accent-purple/40 hover:shadow-xl hover:shadow-purple-500/10'
                  : 'border-indigo-200/30 hover:border-indigo-300/50 hover:shadow-xl hover:shadow-indigo-500/10'
                }`}
            >
              {/* Certificate image */}
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.1))'
                    : 'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(37,99,235,0.08))',
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.display = 'flex';
                    target.parentElement!.style.alignItems = 'center';
                    target.parentElement!.style.justifyContent = 'center';
                    const icon = document.createElement('div');
                    icon.className = 'flex flex-col items-center gap-2 opacity-30';
                    target.parentElement!.appendChild(icon);
                  }}
                />
                {/* Placeholder overlay when no image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 pointer-events-none">
                  <HiShieldCheck size={48} className={isDark ? 'text-accent-purple' : 'text-accent-violet'} />
                </div>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-dark-800/80 to-transparent' : 'from-light-200/60 to-transparent'
                  }`} />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className={`font-outfit font-semibold text-sm mb-1 leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                  }`}>
                  {cert.name}
                </h3>
                <p className={`text-xs mb-4 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                  }`}>
                  {cert.issuer}
                </p>

                <a
                  href={cert.link} // TODO: Replace # with actual certificate URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs font-semibold transition-colors ${isDark
                      ? 'text-accent-purple hover:text-accent-purple-light'
                      : 'text-accent-violet hover:text-accent-indigo'
                    }`}
                >
                  <FiExternalLink size={13} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
