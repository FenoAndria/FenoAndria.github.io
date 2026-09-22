'use client';

import { useRef, type MouseEvent } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Project } from '@/types';

/**
 * Carte projet : capture 170px (130px mobile), titre, méta,
 * description, ligne résultat accent2, chips techno et lien.
 * Tilt 3D léger au survol, suivant la position du curseur.
 */

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = project.link ?? project.github ?? project.detailsPage;
  const cardRef = useRef<HTMLElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group overflow-hidden rounded-md border border-line bg-base transition-colors duration-300 hover:border-accent hover:shadow-[0_16px_32px_rgba(0,0,0,0.14)]"
    >
      <div className="relative h-[130px] overflow-hidden lg:h-[170px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
            className="mt-3.5 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-[gap] duration-200 hover:gap-2"
          >
            Voir le projet <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}
