import Image from 'next/image';
import type { Project } from '@/types';

/**
 * Carte projet : capture 170px (130px mobile), titre, méta,
 * description, ligne résultat accent2, chips techno et lien.
 */

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = project.link ?? project.github ?? project.detailsPage;

  return (
    <article className="overflow-hidden rounded-md border border-line bg-base">
      <div className="relative h-[130px] lg:h-[170px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
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
              className="rounded-[3px] border border-line px-[9px] py-[4px] text-[10px] text-body"
            >
              {tech}
            </span>
          ))}
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-block text-xs font-semibold text-accent"
          >
            Voir le projet →
          </a>
        )}
      </div>
    </article>
  );
}
