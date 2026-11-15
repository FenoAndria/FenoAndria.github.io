/**
 * Données des compétences techniques
 *
 * Organisation :
 * - languages : Langages de programmation
 * - backend : Frameworks et technologies côté serveur
 * - frontend : Frameworks et librairies côté client
 * - cms : CMS
 * - databases : Bases de données
 * - tools : Outils
 * - seo : SEO et performance
 *
 * Niveau (level) : 1 à 5 étoiles
 * Logo (icon) : fichier image ; à défaut, le logo du registre de SkillBadge
 */

import type { Skill } from '@/types';

export const skillsData: Skill[] = [
  // ========== LANGAGES ==========
  {
    id: 'html',
    name: 'HTML',
    category: 'languages',
    level: 4,
    icon: '/images/stack/html-5.png',
    order: 1,
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'languages',
    level: 4,
    icon: '/images/stack/css-3.png',
    order: 2,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    level: 3,
    icon: '/images/stack/js.png',
    order: 3,
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'languages',
    level: 4,
    icon: '/images/stack/Php.png',
    order: 4,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 2,
    icon: '/images/stack/python.png',
    order: 5,
  },

  // ========== BACKEND ==========
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'backend',
    level: 4,
    icon: '/images/stack/Laravel-2.png',
    order: 1,
  },
  {
    id: 'codeigniter',
    name: 'CodeIgniter',
    category: 'backend',
    level: 4,
    icon: '/images/stack/ci.png',
    order: 2,
  },
  {
    id: 'nodejs',
    name: 'Node.js / Express',
    category: 'backend',
    level: 3,
    order: 3,
  },
  {
    id: 'api-rest',
    name: 'API REST',
    category: 'backend',
    level: 4,
    order: 4,
  },

  // ========== FRONTEND ==========
  {
    id: 'vuejs',
    name: 'Vue.js',
    category: 'frontend',
    level: 3,
    icon: '/images/stack/vue.png',
    order: 1,
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 2,
    icon: '/images/stack/react.png',
    order: 2,
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 4,
    icon: '/images/stack/Tailwind.png',
    order: 3,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'frontend',
    level: 4,
    icon: '/images/stack/bootstrap.png',
    order: 4,
  },
  {
    id: 'jquery',
    name: 'jQuery',
    category: 'frontend',
    level: 4,
    icon: '/images/stack/jquery.png',
    order: 5,
  },

  // ========== CMS ==========
  {
    id: 'prestashop',
    name: 'PrestaShop',
    category: 'cms',
    level: 4,
    icon: '/images/stack/prestashop.svg',
    order: 1,
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'cms',
    level: 3,
    icon: '/images/stack/wordpress.svg',
    order: 2,
  },

  // ========== BASES DE DONNÉES ==========
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'databases',
    level: 4,
    icon: '/images/stack/mysql.svg',
    order: 1,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    level: 3,
    icon: '/images/stack/mongodb.svg',
    order: 2,
  },

  // ========== OUTILS ==========
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 4,
    icon: '/images/stack/git.png',
    order: 1,
  },

  // ========== SEO & PERFORMANCE ==========
  {
    id: 'search-console',
    name: 'Google Search Console',
    category: 'seo',
    level: 3,
    order: 1,
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    category: 'seo',
    level: 3,
    order: 2,
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    category: 'seo',
    level: 3,
    order: 3,
  },
];

/**
 * Fonction helper pour obtenir les compétences par catégorie
 */
export const getSkillsByCategory = (category: Skill['category']) => {
  return skillsData
    .filter(skill => skill.category === category)
    .sort((a, b) => a.order - b.order);
};

/**
 * Labels des catégories en français
 */
export const categoryLabels = {
  languages: 'Langages',
  backend: 'Backend',
  frontend: 'Frontend',
  cms: 'CMS',
  databases: 'Bases de données',
  tools: 'Outils',
  seo: 'SEO & performance',
} as const;
