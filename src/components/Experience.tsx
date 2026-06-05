import { motion } from 'framer-motion';
import { BsBuildingsFill } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const experiences = [
  {
    company: 'Arcesium India Pvt. Ltd.',
    role: 'Software Developer Intern',
    period: 'May 2025 – Jul 2025',
    project: 'Corporate Card Invoice Automation',
    bullets: [
      'Architected and optimised RESTful backend microservices in Java, Kotlin, and Spring Boot, implementing modular service layers and ACID-compliant database transaction workflows to fully automate corporate credit card invoice creation and payment processing.',
      'Engineered a comprehensive test suite using JUnit 5 and Mockito, achieving a 98% QA pass rate across unit and integration test coverage; eliminated flaky test failures through mock isolation strategies.',
      'Eliminated 95% of manually processed bottlenecks, delivering $30,000+ in annual operational cost savings and reducing processing time by 99.8%.',
      'Collaborated cross-functionally with product and QA teams in an Agile/Scrum environment to scope, implement, and release features within tight sprint cycles.',
    ],
    tags: ['Java', 'Kotlin', 'Spring Boot', 'JUnit 5', 'Mockito', 'Agile'],
    image: './assets/arc-team.png',
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label text-sm font-semibold tracking-widest uppercase mb-3 transition-colors duration-300">
            Career
          </p>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px opacity-30 transition-colors duration-300 ${isDark
              ? 'bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan'
              : 'bg-gradient-to-b from-accent-violet via-accent-indigo to-accent-teal'
            }`} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[18px] sm:left-[26px] top-4 w-5 h-5 rounded-full flex items-center justify-center animate-pulse-glow"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #7c3aed, #06b6d4)'
                    : 'linear-gradient(135deg, #6d28d9, #0891b2)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Two-column layout on desktop */}
              <div className="pl-16 sm:pl-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card */}
                <div
                  className={`glass-card glass-card-hover p-6 sm:p-8 transition-all duration-300 ${isDark
                      ? ''
                      : 'border-indigo-200/40 hover:border-indigo-400/40'
                    }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BsBuildingsFill className={isDark ? 'text-accent-cyan' : 'text-accent-teal'} size={16} />
                        <h3 className={`font-outfit font-bold text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                          }`}>
                          {exp.company}
                        </h3>
                      </div>
                      <p className={`font-semibold text-base transition-colors duration-300 ${isDark ? 'text-accent-purple' : 'text-accent-violet'
                        }`}>
                        {exp.role}
                      </p>
                      {exp.project && (
                        <p className={`text-sm mt-1 transition-colors duration-300 ${isDark
                            ? 'text-white/40'
                            : 'text-indigo-700/50'
                          }`}>
                          Project: <span className={isDark ? 'text-white/60 italic' : 'text-indigo-800/70 italic'}>{exp.project}</span>
                        </p>
                      )}
                    </div>
                    <span
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold self-start transition-colors duration-300 ${isDark
                          ? 'bg-accent-purple/20 text-white/80'
                          : 'bg-accent-violet/20 text-indigo-900'
                        }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className={`flex gap-3 text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/65' : 'text-indigo-700/75'
                        }`}>
                        <HiCheckCircle className={`shrink-0 mt-0.5 ${isDark ? 'text-accent-cyan' : 'text-accent-teal'}`} size={17} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${isDark
                            ? 'bg-cyan-600/20 text-accent-cyan/80'
                            : 'bg-teal-100 text-accent-teal'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image on the right (desktop only) */}
                <div className="hidden md:block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`relative h-72 rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? 'border border-white/[0.08]' : 'border border-indigo-200/50 shadow-lg'
                      }`}
                    style={{
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.1))'
                        : 'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(8,145,178,0.08))',
                    }}
                  >
                    <img
                      src={exp.image}
                      alt={`${exp.company} team`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '0.3';
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark
                        ? 'from-dark-900/80 via-transparent to-transparent'
                        : 'from-light-50/80 via-transparent to-transparent'
                      }`} />
                    {/* Caption */}
                    <p className={`absolute bottom-4 left-4 right-4 text-sm font-medium transition-colors duration-300 ${isDark ? 'text-white/80' : 'text-indigo-900/80'
                      }`}>
                      Team at {exp.company}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
