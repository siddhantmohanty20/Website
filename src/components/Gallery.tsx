import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const galleryImages = [
  {
    src: './assets/gallery/cultural-event.JPG', // TODO: Replace with actual gallery image
    caption: 'Cultural event at MNIT Jaipur',
  },
  {
    src: './assets/gallery/blitz-team.jpeg', // TODO: Replace with actual gallery image
    caption: 'Cultural Team of MNIT Jaipur',
  },
  {
    src: './assets/gallery/case-questa.jpeg', // TODO: Replace with actual gallery image
    caption: 'CaseQuesta 2024 — BITS Pilani',
  },
  {
    src: './assets/gallery/felicitation.jpeg', // TODO: Replace with actual gallery image
    caption: 'Felicitated as Advisor to President of Cultural Society — MNIT Jaipur',
  },
  {
    src: './assets/gallery/blitz-team.jpeg', // TODO: Replace with actual gallery image
    caption: 'CaseQuesta competition — BITS Pilani',
  },
  {
    src: './assets/gallery/arc-intern.png', // TODO: Replace with actual gallery image
    caption: 'Internship at Arcesium India Pvt. Ltd.',
  },
];

const PLACEHOLDER_IMAGES = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Gallery() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>();

  const next = useCallback(() => setCurrent((c) => (c + 1) % galleryImages.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length), []);

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 4000);
  };

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetTimer();
  };

  const handlePrev = () => {
    prev();
    resetTimer();
  };
  const handleNext = () => {
    next();
    resetTimer();
  };

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className={`relative py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-white'
      }`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(8,145,178,0.03) 0%, transparent 70%)',
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
            Moments
          </p>
          <h2 className="section-title">Gallery</h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-2xl overflow-hidden border transition-colors duration-300 ${isDark ? 'border-white/[0.08]' : 'border-indigo-200/30'
            }`}
        >
          {/* Main image */}
          <div className={`relative h-64 sm:h-96 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-dark-700' : 'bg-light-200'
            }`}>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={galleryImages[current].src}
                alt={galleryImages[current].caption}
                className="w-full h-full object-cover cursor-zoom-in"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => openLightbox(current)}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGES[current];
                }}
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${isDark
                ? 'from-dark-900/80 via-transparent to-transparent'
                : 'from-light-100/80 via-transparent to-transparent'
              }`} />

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`absolute bottom-4 left-4 right-4 text-sm font-medium transition-colors duration-300 ${isDark ? 'text-white/80' : 'text-indigo-900/80'
                  }`}
              >
                {galleryImages[current].caption}
              </motion.p>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={handlePrev}
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark
                  ? 'text-white bg-black/50 border border-white/15'
                  : 'text-indigo-900 bg-white/50 border border-white/30'
                }`}
            >
              <HiChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark
                  ? 'text-white bg-black/50 border border-white/15'
                  : 'text-indigo-900 bg-white/50 border border-white/30'
                }`}
            >
              <HiChevronRight size={22} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className={`flex items-center justify-center gap-2 py-4 transition-colors duration-300 ${isDark ? 'bg-dark-800/60' : 'bg-light-100/60'
            }`}>
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current
                    ? 'linear-gradient(90deg, #7c3aed, #06b6d4)'
                    : isDark
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(99,102,241,0.2)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                openLightbox(i);
              }}
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${i === current
                  ? 'border-2 border-accent-purple opacity-100'
                  : isDark
                    ? 'border-2 border-white/[0.08] opacity-50'
                    : 'border-2 border-indigo-200/30 opacity-50'
                }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGES[i];
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)' }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark
                  ? 'text-white/70 hover:text-white bg-white/10'
                  : 'text-white/80 hover:text-white bg-black/30'
                }`}
              onClick={() => setLightboxOpen(false)}
            >
              <HiX size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIdx].src}
                alt={galleryImages[lightboxIdx].caption}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGES[lightboxIdx];
                }}
              />
              <p className="text-center text-white/60 text-sm mt-4">{galleryImages[lightboxIdx].caption}</p>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => setLightboxIdx((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                  className="px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors bg-white/10"
                >
                  <HiChevronLeft size={20} />
                </button>
                <span className="text-white/40 text-sm self-center">
                  {lightboxIdx + 1} / {galleryImages.length}
                </span>
                <button
                  onClick={() => setLightboxIdx((p) => (p + 1) % galleryImages.length)}
                  className="px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors bg-white/10"
                >
                  <HiChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
