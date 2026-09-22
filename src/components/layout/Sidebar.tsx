'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import Portrait from '@/components/ui/Portrait';
import ContactInfo from '@/components/ui/ContactInfo';
import SocialLinks from '@/components/ui/SocialLinks';
import CvButton from '@/components/ui/CvButton';
// import LangSwitch from '@/components/ui/LangSwitch';
import Nav from './Nav';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Colonne fixe 350px (structure sidebar, desktop) : panneau plein écran
 * collé au bord gauche, sans carte — portrait → nom → coordonnées →
 * réseaux → nav en flux normal ; seul le CV est plaqué en bas (mt-auto).
 * Entrée en cascade au chargement (framer-motion).
 * (FR/EN et tagline désactivés pour le moment, voir commentaires ci-dessous)
 */

export default function Sidebar() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-card px-6 py-6 text-center">
      <motion.div
        className="flex w-full flex-col items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={sectionReveal}
      >
        {/* <LangSwitch className="self-end" /> */}
        <motion.div variants={fadeUpItem}>
          <Portrait width={150} height={195} priority />
        </motion.div>
        <motion.div variants={fadeUpItem}>
          <div className="font-heading text-xl font-semibold text-body">
            {profileData.name}
          </div>
          {/* <div className="mt-2 text-xs text-muted">{profileData.tagline}</div> */}
        </motion.div>
        <motion.div variants={fadeUpItem} className="w-full">
          <ContactInfo className="w-full" />
        </motion.div>
        <motion.div variants={fadeUpItem}>
          <SocialLinks className="justify-center" />
        </motion.div>
        <motion.div variants={fadeUpItem} className="w-full border-t border-line" />
        <motion.div variants={fadeUpItem} className="w-full">
          <Nav />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-auto w-full pt-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
      >
        <CvButton />
      </motion.div>
    </div>
  );
}
