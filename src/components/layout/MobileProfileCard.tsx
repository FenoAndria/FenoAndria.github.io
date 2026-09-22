'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import Portrait from '@/components/ui/Portrait';
import ContactInfo from '@/components/ui/ContactInfo';
import SocialLinks from '@/components/ui/SocialLinks';
import CvButton from '@/components/ui/CvButton';
import TechChip from '@/components/ui/TechChip';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Carte de profil mobile (< 1024px, structure sidebar) :
 * portrait, nom, tagline, coordonnées, chips, réseaux et bouton CV,
 * centrés, en cascade au chargement. Le menu de navigation est géré
 * séparément par MobileNav (bouton flottant fixe, disponible dans
 * toutes les sections).
 */

export default function MobileProfileCard() {
  return (
    <motion.div
      className="flex flex-col items-center gap-[18px] rounded-md border border-line bg-card px-[22px] py-7 text-center"
      initial="hidden"
      animate="visible"
      variants={sectionReveal}
    >
      <motion.div variants={fadeUpItem}>
        <Portrait width={100} height={125} radius={8} priority />
      </motion.div>
      <motion.div variants={fadeUpItem} className="font-heading text-lg font-semibold text-body">
        {profileData.name}
      </motion.div>
      {/* <div className="text-[11px] text-muted">{profileData.tagline}</div> */}
      <motion.div variants={fadeUpItem} className="w-full">
        <ContactInfo iconSize={13} className="w-full text-[11px]" />
      </motion.div>
      <motion.div variants={fadeUpItem} className="flex flex-wrap justify-center gap-1.5">
        {profileData.stack.map((tech) => (
          <TechChip key={tech} label={tech} small />
        ))}
      </motion.div>
      <motion.div variants={fadeUpItem}>
        <SocialLinks size={28} className="justify-center" />
      </motion.div>
      <motion.div variants={fadeUpItem} className="w-full">
        <CvButton />
      </motion.div>
    </motion.div>
  );
}
