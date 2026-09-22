import { Folder } from 'lucide-react';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

/**
 * Section Projets : grille 2 colonnes de cartes projet
 * + emplacement "Nouveau projet" en pointillés.
 */

export default function Projects() {
  const projects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <section
      id="sec-projects"
      data-section="projects"
      className="rounded-md border border-line bg-card p-6 lg:px-14 lg:py-11"
    >
      <h2 className="mb-7 flex items-center gap-2.5 font-heading text-2xl font-semibold text-body">
        <Folder size={22} className="text-accent" aria-hidden />
        Projets
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <div className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-md border border-dashed border-line lg:min-h-[340px]">
          <div className="text-[28px] text-muted">+</div>
          <div className="text-[13px] text-muted">Nouveau projet</div>
        </div>
      </div>
    </section>
  );
}
