/**
 * Éléments de navigation du portfolio
 *
 * Utilisés par la sidebar, la top-bar et le menu mobile.
 * `icon` est une clé résolue en icône lucide-react dans components/layout/Nav.tsx.
 */

import type { NavItem } from '@/types';
import { projectsEnabled } from './projects';

const allNavigationItems: NavItem[] = [
  {
    id: 'about',
    label: 'À propos de moi',
    href: '#sec-about',
    icon: 'user',
  },
  {
    id: 'experiences',
    label: 'Expériences',
    href: '#sec-experiences',
    icon: 'briefcase',
  },
  {
    id: 'formations',
    label: 'Formations',
    href: '#sec-formations',
    icon: 'graduation-cap',
  },
  {
    id: 'skills',
    label: 'Compétences',
    href: '#sec-skills',
    icon: 'code',
  },
  {
    id: 'projects',
    label: 'Projets',
    href: '#sec-projects',
    icon: 'folder',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#sec-contact',
    icon: 'mail',
  },
];

export const navigationItems: NavItem[] = allNavigationItems.filter(
  (item) => item.id !== 'projects' || projectsEnabled
);
