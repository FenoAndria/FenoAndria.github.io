'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Project } from '@/types';

/**
 * Galerie modale de présentation d'un projet : captures d'écran en
 * diaporama (flèches, clavier ←/→, miniatures), légende et compteur.
 *
 * Basée sur <dialog> natif : focus piégé, fermeture Échap et fond
 * (::backdrop) fournis par le navigateur. Le dialog est rendu dans le
 * top layer, donc indépendant du tilt 3D de la carte.
 */

interface ProjectGalleryProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export default function ProjectGallery({ project, open, onClose }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const screenshots = project.screenshots ?? [];
  const count = screenshots.length;

  const go = useCallback(
    (delta: number) => setIndex((current) => (current + delta + count) % count),
    [count]
  );

  // Synchronise l'état React avec le dialog natif + bloque le scroll de la page
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setIndex(0);
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    } else if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') go(-1);
      if (event.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go]);

  if (count === 0) return null;
  const current = screenshots[index];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // Clic sur le fond (hors du contenu) : fermeture
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-label={`Aperçu du projet ${project.title}`}
      className="m-auto w-[calc(100%-32px)] max-w-5xl rounded-md border border-line bg-card p-0 text-body backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-base font-semibold">{project.title}</h3>
          <div className="text-xs text-muted">
            {index + 1} / {count}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="rounded p-1.5 text-muted transition-colors hover:bg-base hover:text-body"
        >
          <X size={20} />
        </button>
      </div>

      {/* Hauteur liée au viewport (pas de ratio fixe) : captures bureau,
          mobile et A4 portrait restent toutes lisibles en object-contain */}
      <div className="relative h-[55vh] bg-base lg:h-[68vh]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Capture précédente"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-card/90 p-2 text-body shadow-sm transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Capture suivante"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-card/90 p-2 text-body shadow-sm transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <p className="border-t border-line px-5 py-3 text-[13px] leading-[1.6] text-muted">
          {current.caption}
        </p>
      )}

      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto border-t border-line px-5 py-3">
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Capture ${i + 1}`}
              aria-current={i === index}
              className={`relative h-12 w-20 shrink-0 overflow-hidden rounded border transition-all ${
                i === index ? 'border-accent' : 'border-line opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={shot.src} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </dialog>
  );
}
