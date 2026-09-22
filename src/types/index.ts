/**
 * Types pour les données du portfolio
 * 
 * Ce fichier contient tous les types TypeScript utilisés dans l'application
 * pour garantir la cohérence des données et faciliter la maintenance.
 */

/**
 * Informations personnelles du profil
 */
export interface Profile {
  name: string;
  /** Nom court affiché dans la sidebar / les en-têtes */
  shortName: string;
  title: string;
  /** Titre principal de la section À propos */
  headline: string;
  /** Phrase de disponibilité (sidebar, bloc contact) */
  tagline: string;
  description: string;
  /** Chips de stack affichés dans À propos */
  stack: string[];
  age: number;
  phone: string;
  email: string;
  location: string;
  image: string;
  imageAlt: string;
  cvUrl: string;
  social: SocialLink[];
}

/**
 * Liens vers les réseaux sociaux
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Nom de l'icône (ex: 'bxl-facebook')
}

/**
 * Expérience professionnelle
 */
export interface Experience {
  id: string;
  title: string;
  period: string;
  company?: string;
  location?: string;
  description: string[];
  technologies: string[];
  order: number; // Pour trier les expériences
}

/**
 * Formation académique
 */
export interface Education {
  id: string;
  degree: string;
  period: string;
  institution: string;
  location: string;
  specialization?: string;
  order: number;
}

/**
 * Catégories de compétences
 */
export type SkillCategory = 'languages' | 'frameworks' | 'databases' | 'tools';

/**
 * Niveau de compétence (1-5 étoiles)
 */
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Compétence technique
 */
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon: string; // Chemin vers l'image du logo
  order: number;
}

/**
 * Projet réalisé
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  /** Ligne résultat / impact affichée en accent2 ("→ …") */
  result?: string;
  /** Méta affichée sous le titre (ex. "Projet personnel · 2023") */
  meta?: string;
  link?: string;
  github?: string;
  detailsPage?: string; // Slug pour la page de détails
  featured: boolean; // Projet mis en avant
  order: number;
}

/**
 * Message de contact
 */
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Élément de navigation
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}
