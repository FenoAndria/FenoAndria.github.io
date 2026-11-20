'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, FileText, Images } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/types';
import ProjectGallery from './ProjectGallery';

/**
 * Carte projet : capture 170px (130px mobile), titre, méta,
 * description, chips techno et actions :
 * - Détails : fiche projet modale (objectif, rôle, points techniques,
 *   résultat, captures) si `overview` / `role` / `highlights` / `result` ;
 *   sinon Aperçu : galerie des captures.
 *   La vignette ouvre aussi le modal ;
 * - En ligne : projet déployé (`link`) ;
 * - Code : dépôt (`github`).
 * Au survol : légère élévation avec ombre douce et bordure accent.
 */

interface ProjectCardProps {
  project: Project;
}

const actionClass =
  'inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-opacity duration-200 hover:opacity-75';

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasGallery = (project.screenshots?.length ?? 0) > 0;
  const hasDetails =
    (project.overview?.length ?? 0) + (project.highlights?.length ?? 0) > 0 ||
    Boolean(project.role) ||
    Boolean(project.result);
  const hasModal = hasGallery || hasDetails;
  const [galleryOpen, setGalleryOpen] = useState(false);

  const thumbnail = (
    <Image
      src={project.image}
      alt={project.imageAlt}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 1024px) 100vw, 480px"
    />
  );

  return (
    <>
      {/* 6 lignes en subgrid (vignette, titre, méta, description, technos,
          actions) : chaque ligne a la même hauteur sur toutes les cartes
          d'une rangée. Les lignes vides sont rendues quand même pour garder
          l'alignement. Doit rester synchronisé avec Projects.tsx. */}
      <article className="group row-[span_6] grid grid-rows-subgrid gap-y-0 overflow-hidden rounded-md border border-line bg-base transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_32px_rgba(0,0,0,0.14)] motion-reduce:hover:translate-y-0">
        {hasModal ? (
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            aria-label={`${hasDetails ? 'Voir la fiche' : 'Voir les captures'} de ${project.title}`}
            className="relative block h-[130px] w-full cursor-zoom-in overflow-hidden lg:h-[170px]"
          >
            {thumbnail}
          </button>
        ) : (
          <div className="relative h-[130px] overflow-hidden lg:h-[170px]">{thumbnail}</div>
        )}
        <h3 className="px-[22px] pt-[22px] font-heading text-[16px] font-semibold leading-6 text-accent">
          {project.title}
        </h3>
        <div className="px-[22px]">
          {project.meta && <div className="mt-1 text-xs text-muted">{project.meta}</div>}
        </div>
        <p className="px-[22px] pt-2.5 text-[13px] leading-[1.6] text-muted">{project.description}</p>
        <div className="px-[22px] pt-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-[3px] border border-line px-[9px] py-[4px] text-[10px] text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm motion-reduce:hover:translate-y-0"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="px-[22px] pb-[22px]">
          {(hasModal || project.link || project.github) && (
            <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {hasModal && (
                <button type="button" onClick={() => setGalleryOpen(true)} className={actionClass}>
                  {hasDetails ? (
                    <>
                      <FileText size={14} aria-hidden /> Détails
                    </>
                  ) : (
                    <>
                      <Images size={14} aria-hidden /> Aperçu
                    </>
                  )}
                </button>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={actionClass}>
                  <ExternalLink size={14} aria-hidden /> En ligne
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={actionClass}>
                  <FaGithub size={14} aria-hidden /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </article>
      {hasModal && (
        <ProjectGallery project={project} open={galleryOpen} onClose={() => setGalleryOpen(false)} />
      )}
    </>
  );
}
