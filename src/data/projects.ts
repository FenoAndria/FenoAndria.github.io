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
    id: 'suivi-budgetaire',
    title: 'Suivi budgétaire et autorisations de paiement',
    description: 'Application de suivi budgétaire et de validation des paiements pour le siège et sept antennes d\'un programme international mené avec une association locale.',
    image: '/images/projects/suivi-budgetaire/01-tableau-de-bord-siege.webp',
    imageAlt: 'Tableau de bord du projet : budget, réalisé, taux d\'exécution et disponible',
    technologies: ['Laravel', 'Vue.js', 'TypeScript', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    meta: 'Projet client',
    overview: [
      'Le programme suivait son budget et ses autorisations de paiement dans un classeur Excel partagé entre un siège et sept antennes régionales.',
      'L\'application centralise la saisie des dépenses, leur circuit de validation selon le rôle de chacun et le suivi du budget par code d\'activité et par antenne. Le siège et les antennes disposent de tableaux de bord à jour.',
    ],
    role: 'J\'ai mené le projet de l\'analyse du besoin à la mise en production, de la base de données et des règles métier côté serveur jusqu\'à l\'interface Vue.js.',
    highlights: [
      'Contrôle budgétaire recalculé par le serveur pendant la saisie, en alerte non bloquante, pour que les chiffres affichés soient toujours ceux de la base.',
      'Circuit de validation par rôle et par antenne vérifié côté serveur, avec séparation des tâches et journal en ajout seul, pour tracer chaque décision.',
      'Un seul service de calcul alimente la situation par code, les tableaux de bord et les exports Excel, pour des chiffres identiques au centime près.',
      'Graphiques et tableaux chargés en différé, sur un nombre fixe de requêtes agrégées, pour que l\'application reste utilisable sur des connexions lentes.',
      'Import Excel en tout ou rien des dépenses déjà validées, après un aperçu ligne par ligne, pour reprendre l\'historique sans enregistrer de données partielles.',
    ],
    screenshots: [
      {
        src: '/images/projects/suivi-budgetaire/01-tableau-de-bord-siege.webp',
        alt: 'Tableau de bord du projet avec indicateurs, exécution par Output et courbe du réalisé',
        caption: 'Tableau de bord du siège : budget, réalisé et disponible du projet, exécution par Output, réalisé cumulé face au budget et codes en alerte.',
      },
      // {
      //   src: '/images/projects/suivi-budgetaire/02-carte-de-chaleur.webp',
      //   alt: 'Carte de chaleur du taux d\'exécution par code d\'activité et par antenne',
      //   caption: 'Carte de chaleur codes × antennes : les dépassements et les codes proches du plafond ressortent d\'un coup d\'œil.',
      // },
      // {
      //   src: '/images/projects/suivi-budgetaire/03-situation-par-code.webp',
      //   alt: 'Tableau de la situation budgétaire par code d\'activité, groupé par Output',
      //   caption: 'Situation par code : budget, réalisé, en attente et disponible, en ariary ou en livres, filtrable par période, antenne et Output, exportable en Excel.',
      // },
      {
        src: '/images/projects/suivi-budgetaire/04-saisie-ap-jauges.webp',
        alt: 'Formulaire de saisie d\'une autorisation de paiement avec deux jauges budgétaires',
        caption: 'Saisie d\'une autorisation de paiement : deux jauges calculées par le serveur pendant la frappe (budget du projet et de l\'antenne). Un dépassement est signalé, jamais bloqué.',
      },
      // {
      //   src: '/images/projects/suivi-budgetaire/06-liste-detail-ap.webp',
      //   alt: 'Liste des autorisations de paiement avec le panneau de détail ouvert',
      //   caption: 'Liste des autorisations de paiement et panneau de détail : étapes du circuit, historique complet, modification tracée par le responsable financier.',
      // },
      {
        src: '/images/projects/suivi-budgetaire/07-a-traiter.webp',
        alt: 'File des autorisations de paiement à valider avec le contrôle budgétaire',
        caption: 'File « À traiter » : chaque valideur ne voit que ce qui attend sa décision, avec le contrôle budgétaire sous les yeux.',
      },
      // {
      //   src: '/images/projects/suivi-budgetaire/08-budget-par-antenne.webp',
      //   alt: 'Grille de répartition du budget par code et par antenne',
      //   caption: 'Budget par antenne : grille éditable au clavier, collage depuis Excel, historique de chaque cellule.',
      // },
      // {
      //   src: '/images/projects/suivi-budgetaire/09-import-excel.webp',
      //   alt: 'Écran d\'import Excel avec deux lignes en erreur',
      //   caption: 'Import des autorisations de paiement depuis Excel : aperçu ligne par ligne avant tout enregistrement, import tout ou rien.',
      // },
      // {
      //   src: '/images/projects/suivi-budgetaire/10-tableau-de-bord-sombre.webp',
      //   alt: 'Tableau de bord en thème sombre',
      //   caption: 'Tableau de bord en thème sombre.',
      // },
      // {
      //   src: '/images/projects/suivi-budgetaire/11-mobile-tableau-de-bord.webp',
      //   alt: 'Tableau de bord d\'une antenne sur mobile',
      //   caption: 'Version mobile : tableau de bord d\'une antenne.',
      // },
      // {
      //   src: '/images/projects/suivi-budgetaire/12-mobile-liste-ap.webp',
      //   alt: 'Liste des autorisations de paiement sur mobile',
      //   caption: 'Version mobile : liste des autorisations de paiement, filtrable par statut.',
      // },
      {
        src: '/images/projects/suivi-budgetaire/13-mobile-saisie-ap.webp',
        alt: 'Saisie d\'une autorisation de paiement sur mobile',
        caption: 'Version mobile : saisie d\'une autorisation de paiement.',
      },
      // {
      //   src: '/images/projects/suivi-budgetaire/14-mobile-detail-ap.webp',
      //   alt: 'Détail d\'une autorisation de paiement sur mobile',
      //   caption: 'Version mobile : détail, étapes du circuit et actions.',
      // },
      // {
      //   src: '/images/projects/suivi-budgetaire/15-mobile-menu.webp',
      //   alt: 'Menu de navigation ouvert sur mobile',
      //   caption: 'Version mobile : menu de navigation.',
      // },
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'cv-builder',
    title: 'Tailored CV Builder',
    description: 'Générateur de CV qui fonctionne entièrement dans le navigateur, sans compte ni serveur, pour adapter son CV à chaque candidature.',
    image: '/images/projects/cv-builder/07-personnaliser-sombre.webp',
    imageAlt: 'Tableau de bord de l\'application listant plusieurs CV',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS'],
    meta: 'Projet personnel · 2025–2026',
    link: 'https://tailored-resume-builder.netlify.app/',
    overview: [
      'Adapter son CV à chaque offre oblige souvent à jongler entre plusieurs fichiers, ou à confier ses données personnelles à un service en ligne.',
      'Tailored permet de gérer plusieurs CV, de les modifier avec un aperçu A4 en direct et de les exporter en PDF, sans créer de compte. Les données restent sur l\'appareil de l\'utilisateur.',
    ],
    highlights: [
      'Pagination calculée en mesurant chaque bloc hors écran, pour que l\'aperçu et le PDF affichent les mêmes pages, sans élément coupé ni titre isolé.',
      'Export PDF par l\'impression du navigateur plutôt qu\'en image, pour que le texte reste lisible par les logiciels de tri de candidatures (ATS).',
      'Aucun serveur : les CV vivent dans le navigateur et la photo est recadrée et compressée sur l\'appareil, pour qu\'aucune donnée personnelle ne soit transmise.',
      'Toute donnée externe (import JSON, relecture du stockage) passe par une normalisation versionnée, pour que les CV déjà enregistrés restent lisibles quand le format évolue.',
      'HTML des descriptions limité à quatre balises et assaini à l\'enregistrement comme à l\'affichage, pour qu\'un fichier importé ne puisse pas injecter de script.',
    ],
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
