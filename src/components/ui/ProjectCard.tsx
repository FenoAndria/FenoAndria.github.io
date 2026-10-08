'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Images } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/types';
import ProjectGallery from './ProjectGallery';

/**
 * Carte projet : capture 170px (130px mobile), titre, méta,
 * description, ligne résultat accent2, chips techno et actions :
 * - Aperçu : galerie modale des captures (si `screenshots`) — la vignette
 *   ouvre aussi la galerie ;
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
      <article className="group overflow-hidden rounded-md border border-line bg-base transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_32px_rgba(0,0,0,0.14)] motion-reduce:hover:translate-y-0">
        {hasGallery ? (
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            aria-label={`Voir les captures de ${project.title}`}
            className="relative block h-[130px] w-full cursor-zoom-in overflow-hidden lg:h-[170px]"
          >
            {thumbnail}
          </button>
        ) : (
          <div className="relative h-[130px] overflow-hidden lg:h-[170px]">{thumbnail}</div>
        )}
        <div className="p-[22px]">
          <h3 className="font-heading text-base font-semibold text-body">{project.title}</h3>
          {project.meta && <div className="mt-1 text-xs text-muted">{project.meta}</div>}
          <p className="mt-2.5 text-[13px] leading-[1.6] text-muted">{project.description}</p>
          {project.result && (
            <div className="mt-2.5 text-[11px] text-accent2">→ {project.result}</div>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-[3px] border border-line px-[9px] py-[4px] text-[10px] text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm motion-reduce:hover:translate-y-0"
              >
                {tech}
              </span>
            ))}
          </div>
          {(hasGallery || project.link || project.github) && (
            <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {hasGallery && (
                <button type="button" onClick={() => setGalleryOpen(true)} className={actionClass}>
                  <Images size={14} aria-hidden /> Aperçu
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
      {hasGallery && (
        <ProjectGallery project={project} open={galleryOpen} onClose={() => setGalleryOpen(false)} />
      )}
    </>
  );
}
