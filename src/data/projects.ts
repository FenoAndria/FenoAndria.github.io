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

/**
 * Active/désactive la section Projets sur tout le site
 * (sections, navigation, structures alternatives).
 */
export const projectsEnabled = true;

export const projectsData: Project[] = [
  {
    id: 'cv-builder',
    title: 'Tailored CV Builder',
    description: 'Application web permettant de créer et personnaliser son CV de manière interactive avec Vue.js',
    image: '/images/projects/cv-builder/07-personnaliser-sombre.webp',
    imageAlt: 'Tableau de bord de l\'application listant plusieurs CV',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS'],
    meta: 'Projet personnel',
    link: 'https://tailored-resume-builder.netlify.app/',
    screenshots: [
      {
        src: '/images/projects/cv-builder/01-mes-cv.webp',
        alt: 'Tableau de bord listant plusieurs CV avec leur aperçu',
        caption: 'Mes CV : plusieurs versions du CV, chacune avec son modèle. Les données restent dans le navigateur, sans compte ni serveur.',
      },
      {
        src: '/images/projects/cv-builder/02-etat-vide.webp',
        alt: 'Écran d\'accueil sans CV avec les actions de démarrage',
        caption: 'Premier lancement : créer un CV, partir d\'un exemple ou importer un fichier JSON.',
      },
      {
        src: '/images/projects/cv-builder/03-editeur-experiences.webp',
        alt: 'Éditeur de la section Expériences avec aperçu A4 en direct',
        caption: 'Éditeur par sections avec aperçu A4 en temps réel, sections réordonnables et masquables, description en texte riche.',
      },
      {
        src: '/images/projects/cv-builder/04-editeur-profil.webp',
        alt: 'Formulaire du profil : photo, identité, accroche et coordonnées',
        caption: 'Profil : photo locale, accroche avec compteur de caractères et coordonnées.',
      },
      {
        src: '/images/projects/cv-builder/05-editeur-competences-sombre.webp',
        alt: 'Éditeur des compétences en thème sombre avec niveaux sur 5',
        caption: 'Compétences avec niveaux, en thème sombre. L\'aperçu signale quand le CV déborde sur une 2e page.',
      },
      {
        src: '/images/projects/cv-builder/06-personnaliser.webp',
        alt: 'Panneau de personnalisation : modèle, couleur, police et densité',
        caption: 'Personnalisation : modèle, couleur d\'accent, police et densité, appliqués instantanément.',
      },
      {
        src: '/images/projects/cv-builder/07-personnaliser-sombre.webp',
        alt: 'Panneau de personnalisation en thème sombre',
        caption: 'Personnalisation en thème sombre.',
      },
      {
        src: '/images/projects/cv-builder/08-apercu-deux-pages.webp',
        alt: 'Aperçu d\'un CV sur deux pages A4',
        caption: 'Pagination A4 automatique, avec en-tête répété sur la page 2.',
      },
      {
        src: '/images/projects/cv-builder/09-mobile-edition.webp',
        alt: 'Édition d\'une expérience sur mobile',
        caption: 'Version mobile : édition par onglets de sections.',
      },
      {
        src: '/images/projects/cv-builder/10-mobile-apercu.webp',
        alt: 'Aperçu du CV sur mobile',
        caption: 'Version mobile : aperçu du CV.',
      },
      {
        src: '/images/projects/cv-builder/11-mobile-style.webp',
        alt: 'Réglages de style sur mobile',
        caption: 'Version mobile : réglages de style.',
      },
      {
        src: '/images/projects/cv-builder/12-mobile-mes-cv.webp',
        alt: 'Liste des CV sur mobile',
        caption: 'Version mobile : liste des CV.',
      },
      {
        src: '/images/projects/cv-builder/13-modele-classique.webp',
        alt: 'CV exporté avec le modèle Classique',
        caption: 'Modèle Classique.',
      },
      {
        src: '/images/projects/cv-builder/14-modele-moderne.webp',
        alt: 'CV exporté avec le modèle Moderne',
        caption: 'Modèle Moderne.',
      },
      {
        src: '/images/projects/cv-builder/15-modele-creatif.webp',
        alt: 'CV exporté avec le modèle Créatif',
        caption: 'Modèle Créatif.',
      },
    ],
    featured: true,
    order: 1,
  },

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
