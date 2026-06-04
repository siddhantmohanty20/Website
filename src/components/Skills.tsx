import { motion } from 'framer-motion';
import { SiSpringboot, SiDocker } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdAutoAwesome } from 'react-icons/md';
import { TbTestPipe } from 'react-icons/tb';
import { HiAcademicCap } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const skillCategories = [
  {
    title: 'Languages',
    color: 'violet',
    icon: '{ }',
    skills: ['C++', 'Java', 'Kotlin', 'JavaScript', 'SQL', 'Python'],
  },
  {
    title: 'Frameworks & Web',
    color: 'blue',
    icon: '⚙',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Spring AI', 'React', 'Hibernate', 'MyBatis'],
  },
  {
    title: 'AI & ML',
    color: 'cyan',
    icon: '🧠',
    skills: ['OpenAI API', 'RAG', 'Embedding Models', 'pgvector', 'Ollama'],
  },
  {
    title: 'DevOps & Cloud',
    color: 'emerald',
    icon: '☁',
    skills: ['Docker', 'Docker Compose', 'Maven', 'AWS EC2', 'AWS S3', 'GitHub', 'GitLab', 'CI/CD'],
  },
  {
    title: 'Testing',
    color: 'orange',
    icon: '✓',
    skills: ['JUnit 5', 'Mockito', 'MockK', 'Unit Testing', 'Integration Testing', 'TDD'],
  },
  {
    title: 'Coursework',
    color: 'pink',
    icon: '📚',
    skills: ['DSA', 'System Design', 'OOP', 'Microservices', 'REST API Design', 'OS', 'Computer Networks', 'Agile/Scrum'],
  },
];

const colorConfig: Record<string, { bg: string; border: string; text: string; glow: string; gradient: string }> = {
  violet: {
    bg: 'rgba(124,58,237,0.12)',
    border: 'rgba(124,58,237,0.3)',
    text: '#a855f7',
    glow: '0 0 20px rgba(124,58,237,0.2)',
    gradient: 'from-violet-500 to-purple-600',
  },
  blue: {
    bg: 'rgba(37,99,235,0.12)',
    border: 'rgba(37,99,235,0.3)',
    text: '#60a5fa',
    glow: '0 0 20px rgba(37,99,235,0.2)',
    gradient: 'from-blue-500 to-indigo-600',
  },
  cyan: {
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.3)',
    text: '#22d3ee',
    glow: '0 0 20px rgba(6,182,212,0.2)',
    gradient: 'from-cyan-400 to-blue-500',
  },
  emerald: {
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.3)',
    text: '#34d399',
    glow: '0 0 20px rgba(16,185,129,0.2)',
    gradient: 'from-emerald-500 to-teal-600',
  },
  orange: {
    bg: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.3)',
    text: '#fb923c',
    glow: '0 0 20px rgba(249,115,22,0.2)',
    gradient: 'from-orange-500 to-amber-600',
  },
  pink: {
    bg: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.3)',
    text: '#f472b6',
    glow: '0 0 20px rgba(236,72,153,0.2)',
    gradient: 'from-pink-500 to-rose-600',
  },
};

const lightColorConfig: Record<string, { bg: string; border: string; text: string }> = {
  violet: { bg: '#f3e8ff', border: '#e9d5ff', text: '#6d28d9' },
  blue: { bg: '#dbeafe', border: '#bfdbfe', text: '#1e40af' },
  cyan: { bg: '#cffafe', border: '#a5f3fc', text: '#0369a1' },
  emerald: { bg: '#d1fae5', border: '#a7f3d0', text: '#065f46' },
  orange: { bg: '#fed7aa', border: '#fdba74', text: '#9a3412' },
  pink: { bg: '#fbcfe8', border: '#f9a8d4', text: '#a1045e' },
};

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const iconMap: Record<string, React.ComponentType<any>> = {
    violet: VscCode,
    blue: SiSpringboot,
    cyan: MdAutoAwesome,
    emerald: SiDocker,
    orange: TbTestPipe,
    pink: HiAcademicCap,
  };

  return (
    <section id="skills" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-white'
      }`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(109,40,217,0.03) 0%, transparent 70%)',
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
            Arsenal
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const cfg = isDark ? colorConfig[cat.color] : lightColorConfig[cat.color];
            const Icon = iconMap[cat.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`glass-card p-6 transition-all duration-300 ${isDark
                  ? 'border border-white/[0.08] hover:border-opacity-60'
                  : 'border border-indigo-200/30 hover:border-indigo-300/50 hover:shadow-lg'
                  }`}
                onMouseEnter={(e) => {
                  if (isDark) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = cfg.border;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = cfg.glow;
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDark) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${isDark ? `bg-gradient-to-br ${colorConfig[cat.color].gradient} text-white` : ''
                      }`}
                    style={
                      isDark
                        ? {}
                        : { background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }
                    }
                  >
                    {Icon ? <Icon size={24} /> : cat.icon}
                  </div>
                  <h3 className={`font-outfit font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                    }`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default ${isDark ? 'border' : ''
                        }`}
                      style={
                        isDark
                          ? { background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }
                          : { background: cfg.bg, color: cfg.text }
                      }
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
