import { motion } from 'framer-motion';
import { BsLightningFill, BsTrophyFill } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';

const achievements = [
  {
    icon: '🥇',
    title: 'CaseQuesta',
    org: 'BITS Pilani',
    desc: 'Top 8 out of 200+ competing teams',
    color: 'yellow',
  },
  {
    icon: '🥇',
    title: 'ProductoPedia',
    org: 'SRCC',
    desc: 'Top 5 out of 50+ competing teams',
    color: 'yellow',
  },
  {
    icon: '🧩',
    title: '1000+ DSA Problems',
    org: 'LeetCode · Codeforces · GFG',
    desc: 'Solved across multiple competitive platforms',
    color: 'blue',
  },
  {
    icon: '🎖️',
    title: '98% QA Pass Rate',
    org: 'Arcesium India Pvt. Ltd.',
    desc: 'Achieved during internship through rigorous test engineering',
    color: 'green',
  },
];

const colorMapDark: Record<string, { bg: string; border: string; text: string }> = {
  yellow: { bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.25)', text: '#fbbf24' },
  blue: { bg: 'rgba(37,99,235,0.12)', border: 'rgba(37,99,235,0.3)', text: '#60a5fa' },
  green: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#34d399' },
};

const colorMapLight: Record<string, { bg: string; border: string; text: string }> = {
  yellow: { bg: '#fef3c7', border: '#fde68a', text: '#d97706' },
  blue: { bg: '#dbeafe', border: '#bfdbfe', text: '#1e40af' },
  green: { bg: '#d1fae5', border: '#a7f3d0', text: '#065f46' },
};

export default function Achievements() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colorMap = isDark ? colorMapDark : colorMapLight;

  return (
    <section id="achievements" className={`relative py-24 px-6 transition-colors duration-300 ${
      isDark ? 'bg-dark-900' : 'bg-white'
    }`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(234,179,8,0.04) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(217,119,6,0.03) 0%, transparent 60%)',
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
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 transition-colors duration-300 ${
            isDark ? 'text-yellow-500' : 'text-yellow-600'
          }`}>
            Milestones
          </p>
          <h2 className="section-title">Achievements & Awards</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((item, i) => {
            const cfg = colorMap[item.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`glass-card border p-6 flex gap-4 items-start transition-all duration-300 hover:shadow-lg ${
                  isDark
                    ? 'border-white/[0.08]'
                    : 'border-indigo-200/30'
                }`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = cfg.border;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${cfg.bg}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(99,102,241,0.1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-colors duration-300"
                  style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className={`font-outfit font-bold mb-0.5 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-indigo-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: cfg.text }}>
                    {item.org}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-white/50' : 'text-indigo-700/70'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-10 glass-card border p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center transition-colors duration-300 ${
            isDark ? 'border-white/[0.08]' : 'border-indigo-200/30'
          }`}
        >
          {[
            { value: '1000+', label: 'Problems Solved', icon: BsLightningFill },
            { value: '98%', label: 'QA Pass Rate', icon: BsTrophyFill },
            { value: 'Top 5%', label: 'LeetCode Global', icon: BsLightningFill },
            { value: '2x', label: 'Competition Finalist', icon: BsTrophyFill },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <stat.icon size={18} className={isDark ? 'text-accent-cyan' : 'text-accent-teal'} />
              <span className="font-outfit font-black text-2xl gradient-text">{stat.value}</span>
              <span className={`text-xs transition-colors duration-300 ${
                isDark ? 'text-white/40' : 'text-indigo-700/50'
              }`}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
