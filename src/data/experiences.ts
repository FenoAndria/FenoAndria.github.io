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
    id: 'dev-web-freelance',
    title: 'Développeur web',
    period: '2022 - Aujourd\'hui',
    description: [
      'Contribution à des projets en freelance',
      'Exemples de projet : application web pour la gestion d\'une entreprise de déménagement, conception et développement d\'un site web d\'un startup, ERP pour une entreprise de consulting, application de suivi des stocks pour une entreprise de commerce, une plateforme de recrutement, application de gestion pédagogique pour un établissement scolaire, ...',
      'Ma mission consiste à répondre aux différentes attentes au niveau backend et/ou frontend. J\'ai participé au développement technique des plateformes web en exposant mes compétences et mes savoir-faire dans ce domaine. Ainsi, je veille aux applications en donnant une attention particulière à des nouvelles fonctionnalités.',
      'J\'ai apporté mes compétences en développement web à la réalisation de différents nouveaux microservices, à la recherche de solutions innovantes tout en faisant une veille technologique sur l\'évolution des outils techniques.',
    ],
    technologies: [
      'Laravel',
      'Codeigniter',
      'PHP',
      'VueJs',
      'TailwindCss',
      'Bootstrap',
      'MySQL',
      'MongoDB',
      'Express',
    ],
    order: 1,
  },
  {
    id: 'dev-integrateur-pev',
    title: 'Développeur / Intégrateur',
    period: 'Janvier - Mars 2024',
    company: 'Particulier – PEV (Programme Elargi de Vaccination) Anôsy',
    description: [
      'Conception et développement d\'une plateforme de gestion logistique sur mesure pour la programme de vaccination, garantissant la traçabilité des stocks de vaccins et les équipements chaine de froid',
      'Implémentation de diverses fonctionnalités avancées permettant une gestion efficace des stocks de vaccins tout en assurant la conformité aux normes de sécurité et de qualité',
    ],
    technologies: [
      'VueJS',
      'Javascript',
      'NodeJs',
      'Express',
      'Google sheets',
      'TailwindCss',
    ],
    order: 2,
  },
  {
    id: 'stagiaire-it-hr-services',
    title: 'Stagiaire IT',
    period: 'Août - Novembre 2020',
    company: 'HR Services',
    description: [
      'Installation de quelques système informatiques',
      'Vérification de l\'efficacité des infrastructures informatiques existants',
      'Identification des éventuelles erreurs',
    ],
    technologies: [],
    order: 3,
  },
  {
    id: 'coach-ekaody',
    title: 'Coach E-Kaody',
    period: '2019',
    company: 'Lycée Nanisana',
    description: [
      'Initiation des lycéens à la programmation informatique',
      'Notion en algorithme, Scratch et Python',
      'Organisé par Orange Madagascar et Techzara',
    ],
    technologies: [],
    order: 4,
  },
  {
    id: 'stagiaire-webmaster',
    title: 'Stagiaire webmaster',
    period: 'Mars - Août 2019',
    company: 'UPLL Antohomadinika',
    description: [
      'Intégration web',
      'Reférencement SEO',
      'Développement plateforme de recrutement',
    ],
    technologies: [
      'PHP',
      'HTML/CSS/JS',
      'Wordpress',
      'Google Analytics',
    ],
    order: 5,
  },
];
