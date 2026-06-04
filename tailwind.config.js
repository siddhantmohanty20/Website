/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#141422',
          600: '#1a1a2e',
          500: '#1e1e35',
        },
        light: {
          50: '#f8f7ff',
          100: '#f3f0ff',
          200: '#ede9fe',
          300: '#ddd6fe',
        },
        accent: {
          purple: '#7c3aed',
          blue: '#2563eb',
          cyan: '#06b6d4',
          'purple-light': '#a855f7',
          'blue-light': '#3b82f6',
          'cyan-light': '#22d3ee',
          violet: '#6d28d9',
          indigo: '#4f46e5',
          teal: '#0891b2',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4)',
        'gradient-card': 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.1), rgba(6,182,212,0.1))',
        'gradient-text': 'linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee)',
        'gradient-dark': 'linear-gradient(135deg, #6d28d9, #4f46e5, #0891b2)',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(6,182,212,0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
