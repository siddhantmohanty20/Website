import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const profiles = [
  {
    platform: 'LeetCode',
    icon: SiLeetcode,
    iconColor: '#FFA116',
    image: '/assets/leetcode-profile.svg',
    stats: [
      { label: 'Rating', value: '1876' },
      { label: 'Badge', value: 'Knight' },
      { label: 'Rank', value: 'Top 5.19%' },
    ],
    link: 'https://leetcode.com/u/CC_Frost/',
    color: { bg: 'rgba(255,161,22,0.08)', border: 'rgba(255,161,22,0.25)', text: '#FFA116' },
  },
  {
    platform: 'Codeforces',
    icon: SiCodeforces,
    iconColor: '#1F8ACB',
    image: '/assets/codeforces-profile.svg',
    stats: [
      { label: 'Rating', value: '1302' },
      { label: 'Rank', value: 'Pupil' },
    ],
    link: 'https://codeforces.com/profile/siddhantmohanty606',
    color: { bg: 'rgba(31,138,203,0.08)', border: 'rgba(31,138,203,0.25)', text: '#1F8ACB' },
  },
  {
    platform: 'GeeksForGeeks',
    icon: SiGeeksforgeeks,
    iconColor: '#2F8D46',
    image: '/assets/gfg-profile.svg',
    stats: [
      { label: 'Problems Solved', value: '250+' },
      { label: 'Score', value: '731' },
      { label: 'POTD', value: '36' },
    ],
    link: 'https://www.geeksforgeeks.org/profile/siddhantmoeynu?tab=activity',
    color: { bg: 'rgba(47,141,70,0.08)', border: 'rgba(47,141,70,0.25)', text: '#2F8D46' },
  },
];

export default function CodingProfiles() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [previewProfile, setPreviewProfile] = useState<(typeof profiles)[number] | null>(null);

  return (
    <section id="coding-profiles" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-light-50'
      }`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)',
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
            Competitive
          </p>
          <h2 className="section-title">Coding Profiles</h2>
          <p className={`text-sm mt-4 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/60'
            }`}>
            1000+ problems solved across all platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`glass-card border overflow-hidden transition-all duration-300 hover:shadow-xl group ${isDark
                    ? 'border-white/[0.08] hover:border-opacity-60'
                    : 'border-indigo-200/30 hover:border-indigo-300/50 hover:shadow-indigo-500/10'
                  }`}
                style={isDark ? { '--glow-color': profile.color.border } as React.CSSProperties : {}}
                onMouseEnter={(e) => {
                  if (isDark) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = profile.color.border;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px ${profile.color.bg}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDark) {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }
                }}
              >
                {/* Screenshot */}
                <button
                  type="button"
                  onClick={() => setPreviewProfile(profile)}
                  aria-label={`View ${profile.platform} profile screenshot`}
                  className="relative block w-full h-48 overflow-hidden cursor-zoom-in p-2 text-left"
                  style={{
                    background: isDark
                      ? `linear-gradient(135deg, ${profile.color.bg}, rgba(0,0,0,0.2))`
                      : `linear-gradient(135deg, rgba(109,40,217,0.08), rgba(0,0,0,0.05))`,
                  }}
                >
                  <img
                    src={profile.image}
                    alt={`${profile.platform} profile`}
                    className="w-full h-full rounded-md bg-white object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${isDark
                      ? 'from-dark-800/30 via-transparent to-transparent'
                      : 'from-light-100/20 via-transparent to-transparent'
                    }`} />

                  {/* Platform icon overlay */}
                  <div className="absolute top-4 left-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={
                        isDark
                          ? { background: profile.color.bg, border: `1px solid ${profile.color.border}` }
                          : { background: 'rgba(109,40,217,0.1)', border: '1px solid rgba(109,40,217,0.2)' }
                      }
                    >
                      <Icon size={22} color={isDark ? profile.iconColor : '#6d28d9'} />
                    </div>
                  </div>
                </button>

                {/* Info */}
                <div className="p-6">
                  <h3 className={`font-outfit font-bold text-lg mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-indigo-900'
                    }`}>
                    {profile.platform}
                  </h3>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {profile.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center px-3 py-2 rounded-lg transition-colors duration-300"
                        style={
                          isDark
                            ? { background: profile.color.bg, border: `1px solid ${profile.color.border}` }
                            : { background: 'rgba(109,40,217,0.08)', border: '1px solid rgba(109,40,217,0.15)' }
                        }
                      >
                        <span
                          className="font-outfit font-bold text-sm"
                          style={{ color: isDark ? profile.iconColor : '#6d28d9' }}
                        >
                          {stat.value}
                        </span>
                        <span className={`text-xs mt-0.5 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/50'
                          }`}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={profile.link} // TODO: Replace # with actual profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 w-full justify-center ${isDark ? '' : 'border'
                      }`}
                    style={
                      isDark
                        ? { background: profile.color.bg, border: `1px solid ${profile.color.border}`, color: profile.iconColor }
                        : { background: 'rgba(109,40,217,0.08)', border: '1px solid rgba(109,40,217,0.2)', color: '#6d28d9' }
                    }
                  >
                    <FiExternalLink size={15} />
                    Visit Profile
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {previewProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-6"
            onClick={() => setPreviewProfile(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full max-w-5xl overflow-hidden rounded-lg border shadow-2xl ${
                isDark ? 'bg-dark-800 border-white/10' : 'bg-white border-indigo-200/40'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`flex items-center justify-between px-4 py-3 border-b ${
                  isDark ? 'border-white/10' : 'border-indigo-100'
                }`}
              >
                <h3 className={`font-outfit font-semibold ${isDark ? 'text-white' : 'text-indigo-950'}`}>
                  {previewProfile.platform}
                </h3>
                <button
                  type="button"
                  onClick={() => setPreviewProfile(null)}
                  aria-label="Close preview"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark
                      ? 'text-white/70 hover:text-white hover:bg-white/10'
                      : 'text-indigo-700 hover:text-indigo-950 hover:bg-indigo-100'
                  }`}
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className={isDark ? 'bg-dark-900' : 'bg-light-50'}>
                <img
                  src={previewProfile.image}
                  alt={`${previewProfile.platform} profile preview`}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
