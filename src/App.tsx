import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-inter transition-colors duration-300 ${
      isDark
        ? 'bg-dark-900 text-white'
        : 'bg-light-50 text-indigo-900'
    }`}>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Leadership />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

