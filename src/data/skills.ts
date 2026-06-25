/**
 * Données des compétences techniques
 * 
 * Organisation :
 * - languages : Langages de programmation
 * - frameworks : Frameworks et librairies
 * - tools : Outils et technologies
 * 
 * Niveau (level) : 1 à 5 étoiles
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
    name: 'Javascript',
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
  
  // ========== FRAMEWORKS & LIBRAIRIES ==========
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'frameworks',
    level: 4,
    icon: '/images/stack/Laravel-2.png',
    order: 1,
  },
  {
    id: 'codeigniter',
    name: 'Codeigniter',
    category: 'frameworks',
    level: 4,
    icon: '/images/stack/ci.png',
    order: 2,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'frameworks',
    level: 4,
    icon: '/images/stack/bootstrap.png',
    order: 3,
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCss',
    category: 'frameworks',
    level: 4,
    icon: '/images/stack/Tailwind.png',
    order: 4,
  },
  {
    id: 'jquery',
    name: 'JQuery',
    category: 'frameworks',
    level: 4,
    icon: '/images/stack/jquery.png',
    order: 5,
  },
  {
    id: 'vuejs',
    name: 'VueJs',
    category: 'frameworks',
    level: 3,
    icon: '/images/stack/vue.png',
    order: 6,
  },
  {
    id: 'react',
    name: 'React',
    category: 'frameworks',
    level: 2,
    icon: '/images/stack/react.png',
    order: 7,
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
  {
    id: 'trello',
    name: 'Trello',
    category: 'tools',
    level: 3,
    icon: '/images/stack/trello.png',
    order: 2,
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
  frameworks: 'Framework & Librairies',
  tools: 'Outils',
} as const;
