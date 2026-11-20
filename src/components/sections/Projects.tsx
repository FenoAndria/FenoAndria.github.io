'use client';

import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Section Projets : grille 2 colonnes de cartes projet.
 * Chaque carte occupe 6 lignes partagées en subgrid (voir ProjectCard) :
 * titres, descriptions, technos et actions s'alignent d'une carte à l'autre.
 */

export default function Projects() {
  const projects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <section
      id="sec-projects"
      data-section="projects"
      className="rounded-md border border-line bg-card p-6 lg:px-14 lg:py-11"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
      >
        <motion.h2
          variants={fadeUpItem}
          className="mb-7 flex items-center gap-2.5 font-heading text-2xl font-semibold text-body"
        >
          <Folder size={22} className="text-accent" aria-hidden />
          Projets
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUpItem}
              className="row-[span_6] grid grid-rows-subgrid gap-y-0"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
