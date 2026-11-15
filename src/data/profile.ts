/**
 * Données du profil personnel
 * 
 * Centralisez ici toutes vos informations personnelles.
 * Pour modifier vos informations, éditez simplement ce fichier.
 */

import type { Profile } from '@/types';

export const profileData: Profile = {
  name: 'Feno Andriamorasata',
  shortName: 'Feno Andria',
  title: 'Développeur Web Fullstack',
  headline: 'Développeur Web Fullstack',
  tagline: 'Ouvert aux opportunités freelance',
  stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'CodeIgniter', 'PrestaShop'],
  description: `Développeur informatique passionné, je m'efforce de créer des applications robustes et évolutives, adaptées à divers environnements technologiques. Avec une approche centrée sur l'efficacité et l'innovation, je m'assure de répondre aux besoins spécifiques des projets tout en garantissant des solutions techniques de pointe et sécurisées.`,
  
  age: 26,
  phone: '+261 34 43 458 15',
  email: 'feno.andriamorasata@gmail.com',
  location: 'Antananarivo - Madagascar',
  
  image: '/images/profile/img-profile.webp',
  // Variantes générées depuis img-profile.webp (Lanczos) : le navigateur
  // choisit la plus proche de la taille affichée, ce qui évite le flou de
  // ses propres réductions (écrans à 125 % / 150 %, Edge).
  imageSrcSet: [
    '/images/profile/img-profile-150.webp 150w',
    '/images/profile/img-profile-200.webp 200w',
    '/images/profile/img-profile-300.webp 300w',
    '/images/profile/img-profile.webp 400w',
  ].join(', '),
  imageAlt: 'Photo de profil de Feno Andriamorasata',
  
  cvUrl: '/cv-feno-andriamorasata.pdf',
  
  social: [
    // Facebook désactivé pour le moment
    // {
    //   name: 'Facebook',
    //   url: 'https://facebook.com/feno.randriamorasata',
    //   icon: 'bxl-facebook',
    // },
    {
      name: 'GitHub',
      url: 'https://github.com/FenoAndria',
      icon: 'bxl-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/feno-andriamorasata-29963125b',
      icon: 'bxl-linkedin',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/261344345815',
      icon: 'bxl-whatsapp',
    },
  ],
};
