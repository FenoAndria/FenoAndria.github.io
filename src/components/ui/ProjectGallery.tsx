'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/types';

/**
 * Fiche projet modale : captures en diaporama (flèches, clavier ←/→,
 * miniatures), légende et compteur, plus une colonne de détails
 * (objectif, rôle, points techniques, résultat, liens) si `overview` /
 * `role` / `highlights` / `result`.
 * Desktop : galerie à gauche, détails à droite (défilement propre).
 * Mobile : détails au-dessus de la galerie, le modal défile en entier.
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

const headingClass = 'text-xs font-semibold uppercase tracking-[0.06em] text-accent';
const linkClass =
  'inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-opacity duration-200 hover:opacity-75';

export default function ProjectGallery({ project, open, onClose }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const screenshots = project.screenshots ?? [];
  const count = screenshots.length;
  const overview = project.overview ?? [];
  const highlights = project.highlights ?? [];
  const hasDetails =
    overview.length + highlights.length > 0 || Boolean(project.role) || Boolean(project.result);

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
    if (!open || count < 2) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') go(-1);
      if (event.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go, count]);

  if (count === 0 && !hasDetails) return null;
  const current = count > 0 ? screenshots[index] : null;

  const details = hasDetails && (
    <div className="flex flex-col gap-5 px-5 py-5">
      {overview.length > 0 && (
        <section>
          <h4 className={headingClass}>Objectif</h4>
          <div className="mt-2.5 flex flex-col gap-2.5 text-[13px] leading-[1.7] text-muted">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}
      {project.role && (
        <section>
          <h4 className={headingClass}>Mon rôle</h4>
          <p className="mt-2.5 text-[13px] leading-[1.7] text-muted">{project.role}</p>
        </section>
      )}
      {highlights.length > 0 && (
        <section>
          <h4 className={headingClass}>Points techniques</h4>
          <ul className="mt-2.5 flex flex-col gap-2 text-[13px] leading-[1.6] text-muted">
            {highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {project.result && (
        <section>
          <h4 className={headingClass}>Résultat</h4>
          <p className="mt-2.5 text-[13px] leading-[1.7] text-muted">{project.result}</p>
        </section>
      )}
      {(project.link || project.github) && (
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <ExternalLink size={14} aria-hidden /> En ligne
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaGithub size={14} aria-hidden /> Code
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // Clic sur le fond (hors du contenu) : fermeture
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-label={`${hasDetails ? 'Fiche' : 'Aperçu'} du projet ${project.title}`}
      className={`m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] overflow-y-auto rounded-md border border-line bg-card p-0 text-body backdrop:bg-black/75 backdrop:backdrop-blur-sm ${
        hasDetails && count > 0 ? 'max-w-6xl' : hasDetails ? 'max-w-2xl' : 'max-w-5xl'
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-[16px] font-semibold leading-6 text-accent">{project.title}</h3>
          <div className="text-xs text-muted">
            {[project.meta, count > 1 ? `${index + 1} / ${count}` : null]
              .filter(Boolean)
              .join(' · ')}
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

      <div className={hasDetails && current ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_340px]' : ''}>
        {/* Détails : au-dessus sur mobile ; colonne de droite sur desktop,
            dont la hauteur suit la galerie (défilement interne) */}
        {details && (
          <aside
            className={
              current
                ? 'border-b border-line lg:relative lg:col-start-2 lg:row-start-1 lg:border-b-0 lg:border-l'
                : 'lg:max-h-[75vh] lg:overflow-y-auto'
            }
          >
            <div className={current ? 'lg:absolute lg:inset-0 lg:overflow-y-auto' : ''}>{details}</div>
          </aside>
        )}

        {current && (
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
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
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </motion.div>
              </AnimatePresence>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Capture précédente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-card p-2 text-body shadow-sm transition-colors hover:border-accent hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,var(--card-color))] hover:text-accent"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Capture suivante"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-card p-2 text-body shadow-sm transition-colors hover:border-accent hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,var(--card-color))] hover:text-accent"
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
          </div>
        )}
      </div>
    </dialog>
  );
}
