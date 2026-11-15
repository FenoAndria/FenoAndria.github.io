/**
 * Données des expériences professionnelles
 * 
 * Pour ajouter une nouvelle expérience :
 * 1. Copiez un objet existant
 * 2. Modifiez les informations
 * 3. Ajustez l'ordre (plus petit = plus récent)
 */

import type { Experience } from '@/types';

export const experiencesData: Experience[] = [
  {
    id: 'dev-php-prestashop',
    title: 'Développeur PHP / PrestaShop',
    company: 'RMT IT Solutions',
    period: 'Janvier 2025 - Septembre 2026',
    description: [
      'Développement et évolution de fonctionnalités spécifiques en PHP / PrestaShop.',
      'Maintenance corrective et évolutive : analyse et résolution de bugs, amélioration et adaptation de fonctionnalités existantes.',
      'Développement et personnalisation de modules PrestaShop et intégration de services externes via API.',
      'Gestion et exploitation des données produits, stocks, prix et informations commerciales.',
      'Développement d\'outils et de traitements spécifiques pour automatiser certaines opérations métier.',
      'Optimisation des performances front-end et back-end : temps de chargement, ressources CSS/JavaScript, images et traitement des données.',
      'Optimisation technique SEO : sitemap, robots.txt, URLs à facettes et problématiques d\'indexation.',
      'Maintenance et évolution d\'une base de code existante en privilégiant les mécanismes d\'extension natifs de PrestaShop.',
    ],
    technologies: [
      'PHP',
      'MySQL',
      'JavaScript/jQuery',
      'REST API',
      'PrestaShop',
      'WordPress',
    ],
    order: 1,
  },
  {
    id: 'dev-web-freelance',
    title: 'Développeur web fullstack',
    company: 'Freelance',
    period: '2022 - Aujourd\'hui',
    description: [
      'Développement d\'applications web sur mesure, côté backend et frontend, de l\'analyse du besoin à la mise en production.',
      'Projets réalisés : gestion d\'une entreprise de déménagement, suivi des stocks pour une entreprise de commerce, plateforme de recrutement, gestion pédagogique pour un établissement scolaire et site web d\'une startup.',
      'Conception de bases de données MySQL / MongoDB et développement de microservices et d\'API REST (Node.js / Express).',
      'Maintenance et évolution des applications : ajout de nouvelles fonctionnalités selon les besoins des clients.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'CodeIgniter',
      'Vue.js',
      'Tailwind CSS',
      'Bootstrap',
      'MySQL',
      'MongoDB',
      'Express',
      'WordPress',
    ],
    order: 2,
  },
  {
    id: 'dev-integrateur-pev',
    title: 'Développeur / Intégrateur',
    period: 'Janvier - Mars 2024',
    company: 'Particulier – PEV Anôsy (Programme Élargi de Vaccination)',
    description: [
      'Conception et développement d\'une plateforme de gestion logistique sur mesure pour le programme de vaccination, garantissant la traçabilité des stocks de vaccins et des équipements de la chaîne de froid.',
      'Implémentation de diverses fonctionnalités avancées permettant une gestion efficace des stocks de vaccins tout en assurant la conformité aux normes de sécurité et de qualité.',
    ],
    technologies: [
      'Vue.js',
      'JavaScript',
      'Node.js',
      'Express',
      'Google Sheets',
      'Tailwind CSS',
    ],
    order: 3,
  },
  {
    id: 'stagiaire-it-hr-services',
    title: 'Stagiaire IT',
    period: 'Août - Novembre 2020',
    company: 'HR Services',
    description: [
      'Installation de systèmes informatiques',
      'Vérification de l\'efficacité des infrastructures informatiques existantes',
      'Identification des éventuelles erreurs',
    ],
    technologies: [],
    order: 4,
  },
  {
    id: 'coach-ekaody',
    title: 'Coach E-Kaody',
    period: '2019',
    company: 'Lycée Nanisana',
    description: [
      'Initiation des lycéens à la programmation informatique',
      'Notions d\'algorithmique, Scratch et Python',
      'Organisé par Orange Madagascar et Techzara',
    ],
    technologies: [],
    order: 5,
  },
  {
    id: 'stagiaire-webmaster',
    title: 'Stagiaire webmaster',
    period: 'Mars - Août 2019',
    company: 'UPLL Antohomadinika',
    description: [
      'Intégration web',
      'Référencement SEO',
      'Développement d\'une plateforme de recrutement',
    ],
    technologies: [
      'PHP',
      'HTML/CSS/JS',
      'WordPress',
      'Google Analytics',
    ],
    order: 6,
  },
];
