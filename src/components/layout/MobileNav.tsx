'use client';

import { useEffect, useState } from 'react';
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
 * fond assombri (portrait, nom, réseaux, nav, CV).
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
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>

      {/* Fond assombri */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Tiroir de navigation */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation du site"
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[80vw] flex-col items-center gap-[22px] overflow-y-auto bg-card px-6 py-8 text-center shadow-[0_0_32px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
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
      </div>
    </div>
  );
}
