import type { Config } from 'tailwindcss';

const config: Config = {
  // Fichiers à scanner pour les classes Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // Rôles de couleur du design system — la source de vérité est
      // le jeu de variables CSS posé par html[data-theme] (globals.css).
      colors: {
        base: 'var(--bg-color)',
        card: 'var(--card-color)',
        line: 'var(--border-color)',
        body: 'var(--text-color)',
        muted: 'var(--muted-color)',
        accent: 'var(--accent-color)',
        accent2: 'var(--accent2-color)',
        onaccent: 'var(--on-accent-color)',
      },

      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },

      // Breakpoints personnalisés
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },
    },
  },

  plugins: [],
};

export default config;
