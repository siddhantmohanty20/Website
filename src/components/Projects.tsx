import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectTag {
  name: string;
  devicon?: string; // devicon class name, e.g., 'devicon-java-plain'
  isText?: boolean; // true for non-devicon tags
}

const projects = [
  {
    title: 'AI-Powered E-Commerce Platform',
    tags: [
      { name: 'Java', devicon: 'devicon-java-plain' },
      { name: 'Spring Boot', devicon: 'devicon-spring-original' },
      { name: 'Docker', devicon: 'devicon-docker-plain' },
      { name: 'React', devicon: 'devicon-react-original' },
      { name: 'OpenAI', isText: true },
      { name: 'pgvector', isText: true },
    ],
    bullets: [
      'Designed a full-stack e-commerce app with Spring Boot and PostgreSQL; containerised with Docker Compose.',
      'Integrated OpenAI API for AI-generated product descriptions and images.',
      'Implemented a context-aware AI chatbot using RAG for real-time product and order queries.',
    ],
    github: 'https://github.com/siddhantmohanty20/E-com-Website', // TODO: Replace with actual GitHub repo URL
    live: null,
  },
  {
    title: 'Multimodal Conversational AI with Memory',
    tags: [
      { name: 'Java', devicon: 'devicon-java-plain' },
      { name: 'Spring AI', isText: true },
      { name: 'OpenAI API', isText: true },
      { name: 'Docker', devicon: 'devicon-docker-plain' },
      { name: 'pgvector', isText: true },
    ],
    bullets: [
      'Engineered a multimodal AI chat backend supporting text, image understanding, image generation, speech-to-text, and audio processing in a unified pipeline.',
      'Integrated semantic search with pgvector for context-sensitive memory retrieval.',
    ],
    github: 'https://github.com/siddhantmohanty20/Backend-for-Multimodal-Conversational-AI-with-Memory', // TODO: Replace with actual GitHub repo URL
    live: null,
  },
  {
    title: 'JobApp Portal',
    tags: [
      { name: 'Spring Boot', devicon: 'devicon-spring-original' },
      { name: 'Spring Security', isText: true },
      { name: 'PostgreSQL', devicon: 'devicon-postgresql-plain' },
      { name: 'React', devicon: 'devicon-react-original' },
      { name: 'Spring AOP', isText: true },
      { name: 'JWT', isText: true },
    ],
    bullets: [
      'Built a full-stack job portal with role-based access control using Spring Security and JWT authentication.',
      'Implemented request logging with Spring AOP; optimised PostgreSQL queries for applicant filtering.',
    ],
    github: 'https://github.com/siddhantmohanty20/Job-App', // TODO: Replace with actual GitHub repo URL
    live: null,
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-white'
      }`}>
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)'
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
            Portfolio
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-indigo-700/60'
            }`}>
            A selection of projects that showcase my expertise in backend systems, AI integration, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`glass-card border transition-all duration-300 p-6 flex flex-col ${isDark
                  ? 'border-white/[0.08] hover:border-accent-purple/40 hover:shadow-xl hover:shadow-purple-500/10'
                  : 'border-indigo-200/30 hover:border-indigo-300/50 hover:shadow-xl hover:shadow-indigo-500/10'
                }`}
            >
              {/* Title */}
              <h3 className={`font-outfit font-bold text-lg mb-4 leading-tight transition-colors duration-300 ${isDark ? 'text-white group-hover:gradient-text' : 'text-indigo-900'
                }`}>
                {project.title}
              </h3>

              {/* Tags with logos */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${tag.isText
                        ? isDark
                          ? 'bg-blue-600/20 text-accent-blue border border-blue-600/30'
                          : 'bg-blue-100 text-accent-indigo border border-blue-200'
                        : isDark
                          ? 'bg-white/[0.05] text-white/70 border border-white/10'
                          : 'bg-indigo-50 text-indigo-900 border border-indigo-200'
                      }`}
                  >
                    {tag.devicon && !tag.isText ? (
                      <i className={`${tag.devicon} text-sm`} />
                    ) : null}
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.bullets.map((b, bi) => (
                  <li key={bi} className={`text-sm leading-relaxed flex gap-2 transition-colors duration-300 ${isDark ? 'text-white/55' : 'text-indigo-700/75'
                    }`}>
                    <span className={`mt-1.5 shrink-0 text-xs ${isDark ? 'text-accent-cyan' : 'text-accent-teal'}`}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Footer actions */}
              <div className={`flex items-center gap-3 pt-4 transition-colors duration-300 ${isDark ? 'border-t border-white/[0.06]' : 'border-t border-indigo-200/30'
                }`}>
                <a
                  href={project.github} // TODO: Replace # with actual GitHub repo URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm font-medium transition-colors group/btn ${isDark
                      ? 'text-white/60 hover:text-white'
                      : 'text-indigo-700/70 hover:text-indigo-900'
                    }`}
                >
                  <FiGithub size={16} className={`transition-colors ${isDark ? 'group-hover/btn:text-accent-cyan' : 'group-hover/btn:text-accent-teal'}`} />
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium ml-auto transition-colors ${isDark
                        ? 'text-white/60 hover:text-white'
                        : 'text-indigo-700/70 hover:text-indigo-900'
                      }`}
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
