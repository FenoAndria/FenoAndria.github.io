/**
 * Éléments de navigation du portfolio
 * 
 * Ces éléments sont utilisés dans le menu latéral et mobile
 */

import type { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    id: 'about',
    label: 'A propos de moi',
    href: '#about',
    icon: 'bx-user',
  },
  {
    id: 'experience',
    label: 'Expériences',
    href: '#experience',
    icon: 'bx-code-block',
  },
  {
    id: 'formations',
    label: 'Formations',
    href: '#formations',
    icon: 'bxs-graduation',
  },
  {
    id: 'competences',
    label: 'Compétences',
    href: '#competences',
    icon: 'bx-code-alt',
  },
  {
    id: 'realisation',
    label: 'Projets',
    href: '#realisation',
    icon: 'bx-grid-alt',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: 'bx-envelope',
  },
];
