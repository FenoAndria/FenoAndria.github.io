'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profileData } from '@/data/profile';
import Portrait from '@/components/ui/Portrait';
import SocialLinks from '@/components/ui/SocialLinks';
import CvButton from '@/components/ui/CvButton';
import Nav from './Nav';

/**
 * Navigation mobile (< 1024px) : bouton flottant fixe en haut à droite,
 * disponible dans toutes les sections au scroll — devient une croix (X)
 * quand le tiroir est ouvert. Le tiroir glisse depuis la gauche sur un
 * fond assombri (portrait, nom, réseaux, nav, CV), avec une vraie
 * animation d'entrée/sortie (AnimatePresence) plutôt qu'un simple
 * masquage CSS.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={open ? 'Fermer le menu' : 'Menu de navigation'}
        onClick={() => setOpen((value) => !value)}
        className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-accent text-onaccent shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Fond assombri */}
            <motion.div
              key="backdrop"
              onClick={() => setOpen(false)}
              aria-hidden
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Tiroir de navigation */}
            <motion.div
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation du site"
              className="fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[80vw] flex-col items-center gap-[22px] overflow-y-auto bg-card px-6 py-8 text-center shadow-[0_0_32px_rgba(0,0,0,0.35)]"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <Portrait width={100} height={125} radius={8} />
              <div className="font-heading text-lg font-semibold text-body">
                {profileData.name}
              </div>
              <SocialLinks size={28} className="justify-center" />
              <div className="w-full border-t border-line" />
              <Nav onNavigate={() => setOpen(false)} iconSize={16} />
              <div className="mt-auto w-full pt-8">
                <CvButton />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
