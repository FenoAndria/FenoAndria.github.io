/**
 * Données des formations académiques
 * 
 * Pour ajouter une nouvelle formation :
 * 1. Ajoutez un nouvel objet au tableau
 * 2. Renseignez tous les champs
 * 3. Ajustez l'ordre (plus petit = plus récent)
 */

import type { Education } from '@/types';

export const educationData: Education[] = [
  {
    id: 'master-informatique',
    degree: '5ème année en Informatique',
    period: '2023 - 2024',
    institution: 'CNTEMAD',
    location: 'Antananarivo - Madagascar',
    specialization: 'Base de données et génie logiciel',
    order: 1,
  },
/*   {
    id: 'bacc-4-informatique',
    degree: 'Bacc+4 en Informatique',
    period: '2022',
    institution: 'CNTEMAD',
    location: 'Antananarivo - Madagascar',
    specialization: 'Base de données et génie logiciel',
    order: 2,
  }, */
  {
    id: 'licence-informatique',
    degree: 'Licence en Informatique',
    period: '2021',
    institution: 'CNTEMAD',
    location: 'Antananarivo - Madagascar',
    specialization: 'Base de données et génie logiciel',
    order: 3,
  },
/*   {
    id: 'dts-informatique',
    degree: 'DTS en Informatique de Gestion',
    period: '2019',
    institution: 'GSI',
    location: 'Antananarivo - Madagascar',
    order: 4,
  },
  {
    id: 'baccalaureat',
    degree: 'Baccalauréat',
    period: '2015',
    institution: 'Lycée Nanisana',
    location: 'Antananarivo - Madagascar',
    order: 5,
  }, */
];
