import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import { BsStarFill } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';

const educationData = [
  {
    institution: 'Malaviya National Institute of Technology',
    location: 'Jaipur, Rajasthan, India',
    degree: 'B.Tech — Electronics and Communication Engineering',
    period: 'Nov 2022 – May 2026',
    score: 8.70,
    scoreType: 'CGPA',
    scoreMax: 10.0,
    logo: './assets/mnit-logo.png', // TODO: Replace with actual logo
    initials: 'NIT',
  },
  {
    institution: 'Kerala Samajam Model School',
    location: 'Jamshedpur, India',
    degree: 'Class XII',
    board: 'CISCE (Council for the Indian School Certificate Examinations)',
    year: 2021,
    score: 93.5,
    scoreType: 'Percentage',
    scoreMax: 100,
    logo: './assets/ksms-logo.png', // TODO: Replace with actual logo
    initials: 'KS',
  },
  {
    institution: 'Kerala Samajam Model School',
    location: 'Jamshedpur, India',
    degree: 'Class X',
    board: 'ICSE (Indian Certificate of Secondary Education)',
    year: 2019,
    score: 93.8,
    scoreType: 'Percentage',
    scoreMax: 100,
    logo: './assets/ksms-logo.png', // TODO: Replace with actual logo
    initials: 'KS',
  },
];

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="education" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 50% 40% at 80% 60%, rgba(6,182,212,0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 50% 40% at 80% 60%, rgba(8,145,178,0.04) 0%, transparent 60%)',
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
            Background
          </p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`glass-card border transition-all duration-300 p-8 sm:p-10 ${isDark
                  ? 'border-white/[0.08] hover:border-accent-cyan/40 hover:shadow-xl hover:shadow-cyan-500/10'
                  : 'border-indigo-200/40 hover:border-teal-300/40 hover:shadow-xl hover:shadow-teal-500/10'
                }`}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                {/* Logo */}
                <div
                  className={`shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-lg font-bold transition-colors duration-300 ${isDark
                      ? 'bg-cyan-600/15 border border-cyan-600/30'
                      : 'bg-teal-100/60 border border-teal-200/50'
                    }`}
                >
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain p-2 rounded-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `<span style="color: ${isDark ? '#22d3ee' : '#0d9488'}">${edu.initials}</span>`;
                      }
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className={`font-outfit font-bold text-xl sm:text-2xl mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                        }`}>
                        {edu.institution}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-indigo-700/60'
                        }`}>
                        {edu.location}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold self-start transition-colors duration-300 ${isDark
                          ? 'bg-cyan-600/20 text-accent-cyan'
                          : 'bg-teal-100 text-accent-teal'
                        }`}
                    >
                      {edu.year || `${edu.period}`}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div>
                      <p className={`text-xs uppercase tracking-widest mb-1 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                        }`}>
                        Degree
                      </p>
                      <p className={`text-base font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                        }`}>
                        {edu.degree}
                      </p>
                    </div>
                    {edu.board && (
                      <div>
                        <p className={`text-xs uppercase tracking-widest mb-1 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                          }`}>
                          Board
                        </p>
                        <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-white/70' : 'text-indigo-800'
                          }`}>
                          {edu.board}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Score badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors duration-300 ${isDark
                      ? 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-600/30'
                      : 'bg-gradient-to-r from-teal-100 to-blue-100 border border-teal-200/50'
                    }`}>
                    <BsStarFill className={isDark ? 'text-yellow-400' : 'text-yellow-500'} size={14} />
                    <span className={`text-white/70 text-sm transition-colors duration-300 ${isDark ? '' : 'text-indigo-900/70'
                      }`}>
                      {edu.scoreType}
                    </span>
                    <span className={`font-outfit font-bold text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                      }`}>
                      {edu.score}
                    </span>
                    <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                      }`}>
                      / {edu.scoreMax}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {[edu.degree.split('—')[0], edu.location?.split(',')[0], String(edu.year || edu.period.split('–')[1])].map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs transition-colors duration-300 ${isDark
                            ? 'bg-white/[0.05] text-white/50'
                            : 'bg-indigo-100/40 text-indigo-700/60'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
