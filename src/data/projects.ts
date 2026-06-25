/**
 * Données des projets réalisés
 * 
 * Pour ajouter un nouveau projet :
 * 1. Ajoutez un objet au tableau
 * 2. Renseignez tous les champs
 * 3. Mettez featured: true pour les projets importants
 * 4. Ajustez l'ordre d'affichage
 */

import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'cv-builder',
    title: 'CV Builder',
    description: 'Application web permettant de créer et personnaliser son CV de manière interactive avec Vue.js',
    image: '/images/projects/CV-Builder.jpg',
    imageAlt: 'Aperçu de l\'application CV Builder',
    technologies: ['VueJS', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/FenoAndria/cv-builder-vuejs',
    featured: true,
    order: 1,
  },
  // Projets commentés dans le HTML original - à activer si nécessaire
  /*
  {
    id: 'repeater-component',
    title: 'Repeater component',
    description: 'Composant réutilisable pour la gestion de champs répétables dans les formulaires',
    image: '/images/projects/Repeater-Component.jpg',
    imageAlt: 'Aperçu du composant Repeater',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    detailsPage: '/projets/repeater',
    featured: false,
    order: 2,
  },
  {
    id: 'gestion-recrutement',
    title: 'Gestion de recrutement',
    description: 'Plateforme complète de gestion des processus de recrutement',
    image: '/images/projects/RecruitmentManagment.JPG',
    imageAlt: 'Interface de gestion de recrutement',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    detailsPage: '/projets/gestion-recrutement',
    featured: false,
    order: 3,
  },
  {
    id: 'fokontany-search',
    title: 'Fokontany Search',
    description: 'Application de recherche et localisation des fokontany à Madagascar',
    image: '/images/projects/Fkt-Search.jpg',
    imageAlt: 'Interface de recherche Fokontany',
    technologies: ['JavaScript', 'API', 'Leaflet'],
    detailsPage: '/projets/fokontany-search',
    featured: false,
    order: 4,
  },
  {
    id: 'panier-ecommerce',
    title: 'Panier e-commerce',
    description: 'Système de panier d\'achat pour site e-commerce avec gestion des stocks',
    image: '/images/projects/Panier-ecommerce.jpg',
    imageAlt: 'Interface du panier e-commerce',
    technologies: ['PHP', 'JavaScript', 'MySQL'],
    detailsPage: '/projets/panier-e-commerce',
    featured: false,
    order: 5,
  },
  {
    id: 'php-pattern',
    title: 'PHP Pattern',
    description: 'Implémentation de design patterns en PHP',
    image: '/images/projects/php-pattern.jpg',
    imageAlt: 'Exemples de patterns PHP',
    technologies: ['PHP', 'OOP'],
    detailsPage: '/projets/php-pattern',
    featured: false,
    order: 6,
  },
  */
];

/**
 * Fonction helper pour obtenir uniquement les projets mis en avant
 */
export const getFeaturedProjects = () => {
  return projectsData
    .filter(project => project.featured)
    .sort((a, b) => a.order - b.order);
};

/**
 * Fonction helper pour obtenir un projet par son ID
 */
export const getProjectById = (id: string) => {
  return projectsData.find(project => project.id === id);
};
