import type { Config } from 'tailwindcss';

const config: Config = {
  // Fichiers à scanner pour les classes Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Mode dark (class-based pour toggle manuel)
  darkMode: 'class',
  
  theme: {
    extend: {
      // Couleurs personnalisées du portfolio
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc5c5',
          300: '#ff9a9a',
          400: '#f76b6b',
          500: '#F05454',
          600: '#d43939',
          700: '#b02020',
          800: '#8c1515',
          900: '#6e0d0d',
          950: '#3d0404',
        },
        dark: {
          DEFAULT: '#222831',
          lighter: '#30475E',
          darker: '#1a1a1a',
        },
        gris: '#DDDDDD',
      },
      
      // Animations personnalisées
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      
      // Breakpoints personnalisés
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      
      // Spacing personnalisé
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      
      // Box shadow personnalisé
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  
  plugins: [
    // Plugin pour les formulaires
    // require('@tailwindcss/forms'),
    // Plugin pour la typographie
    // require('@tailwindcss/typography'),
  ],
};

export default config;
