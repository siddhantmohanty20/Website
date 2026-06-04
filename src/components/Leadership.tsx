import { motion } from 'framer-motion';
import { HiUsers } from 'react-icons/hi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { useTheme } from '../contexts/ThemeContext';

const leadershipRoles = [
  {
    title: 'President, Cultural Society',
    org: 'MNIT Jaipur',
    period: 'Oct 2024 – May 2025',
    icon: MdOutlineLeaderboard,
    color: 'purple',
    bullets: [
      'Led a 30+ member student council overseeing 15+ institute-wide cultural events.',
      'Managed multi-lakh event budgets with cross-team coordination across departments.',
    ],
    tags: ['Leadership', 'Event Management', 'Team Building', 'Budget Management'],
  },
  {
    title: 'Student Training Coordinator',
    org: 'Placement & Training Cell — MNIT Jaipur',
    period: 'Jun 2024 – May 2025',
    icon: HiUsers,
    color: 'cyan',
    bullets: [
      'Organised 10+ placement preparation workshops and alumni-led training sessions.',
      'Benefited 200+ students through structured career development programs.',
    ],
    tags: ['Training', 'Placement', 'Coordination', 'Mentorship'],
  },
];

const colorCfgDark: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  purple: {
    bg: 'rgba(124,58,237,0.12)',
    border: 'rgba(124,58,237,0.3)',
    text: '#a855f7',
    glow: '0 8px 40px rgba(124,58,237,0.15)',
  },
  cyan: {
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.3)',
    text: '#22d3ee',
    glow: '0 8px 40px rgba(6,182,212,0.15)',
  },
};

const colorCfgLight: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: '#f3e8ff', border: '#e9d5ff', text: '#6d28d9' },
  cyan: { bg: '#cffafe', border: '#a5f3fc', text: '#0369a1' },
};

export default function Leadership() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colorCfg = isDark ? colorCfgDark : colorCfgLight;

  return (
    <section id="leadership" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 40% at 30% 60%, rgba(124,58,237,0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 60% 40% at 30% 60%, rgba(109,40,217,0.04) 0%, transparent 60%)',
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
            Community
          </p>
          <h2 className="section-title">Leadership Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((role, i) => {
            const cfg = isDark ? colorCfgDark[role.color] : colorCfgLight[role.color];
            const Icon = role.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`glass-card border p-7 flex flex-col transition-all duration-300 ${isDark
                    ? 'border-white/[0.08]'
                    : 'border-indigo-200/30'
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
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={
                      isDark
                        ? { background: cfg.bg, border: `1px solid ${cfg.border}` }
                        : { background: cfg.bg, border: `1px solid ${cfg.border}` }
                    }
                  >
                    <Icon size={22} style={{ color: cfg.text }} />
                  </div>
                  <div>
                    <h3 className={`font-outfit font-bold text-base leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                      }`}>
                      {role.title}
                    </h3>
                    <p className="text-sm mt-1 transition-colors duration-300" style={{ color: cfg.text }}>
                      {role.org}
                    </p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-4">
                  <BsCalendar3 size={12} className={isDark ? 'text-white/30' : 'text-indigo-700/40'} />
                  <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                    }`}>
                    {role.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 flex-1">
                  {role.bullets.map((b, bi) => (
                    <li key={bi} className={`flex gap-2 text-sm transition-colors duration-300 ${isDark ? 'text-white/60' : 'text-indigo-700/75'
                      }`}>
                      <span style={{ color: cfg.text }} className="shrink-0 mt-1 text-xs">
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-300"
                      style={
                        isDark
                          ? { background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }
                          : { background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }
                      }
                    >
                      {tag}
                    </span>
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
