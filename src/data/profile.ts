/**
 * Données du profil personnel
 * 
 * Centralisez ici toutes vos informations personnelles.
 * Pour modifier vos informations, éditez simplement ce fichier.
 */

import type { Profile } from '@/types';

export const profileData: Profile = {
  name: 'Feno Andriamorasata',
  title: 'Développeur web',
  description: `Développeur informatique passionné, je m'efforce de créer des applications robustes et évolutives, adaptées à divers environnements technologiques. Avec une approche centrée sur l'efficacité et l'innovation, je m'assure de répondre aux besoins spécifiques des projets tout en garantissant des solutions techniques de pointe et sécurisées.`,
  
  age: 26,
  phone: '+261 34 43 458 15',
  email: 'feno.andriamorasata@gmail.com',
  location: 'Antananarivo - Madagascar',
  
  image: '/images/profile/PXL_20221127_121207383~2.jpg',
  imageAlt: 'Photo de profil de Feno Andriamorasata',
  
  cvUrl: '/CV - Fenomanjato.pdf',
  
  social: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/feno.randriamorasata',
      icon: 'bxl-facebook',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/FenoAndria',
      icon: 'bxl-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/fenomanjato-andriamorasata-29963125b',
      icon: 'bxl-linkedin',
    },
    {
      name: 'WhatsApp',
      url: 'tel:+261344345815',
      icon: 'bxl-whatsapp',
    },
  ],
};
