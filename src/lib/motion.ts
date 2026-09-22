import type { Variants } from 'framer-motion';

/**
 * Variants d'entrée partagés par les sections : le conteneur orchestre le
 * décalage des enfants (staggerChildren), chaque enfant fait un fade-up
 * individuel. Déclenché au scroll via whileInView (once: true).
 */
export const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
