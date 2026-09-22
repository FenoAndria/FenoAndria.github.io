import { profileData } from '@/data/profile';
import { experiencesData } from '@/data/experiences';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { projectsData, projectsEnabled } from '@/data/projects';
import type { Theme } from '@/lib/theme';
import Portrait from '@/components/ui/Portrait';
import TechChip from '@/components/ui/TechChip';
import SkillBadge from '@/components/ui/SkillBadge';
import ContactBlock from '@/components/ui/ContactBlock';
import OnepageRail from '@/components/layout/OnepageRail';

/**
 * Structure "onepage" : chaque section occupe un écran plein
 * (scroll-snap vertical), contenu centré ; rail de points à droite.
 */

interface OnepageLayoutProps {
  theme: Theme;
}

const screenClasses =
  'flex min-h-screen snap-start flex-col items-center justify-center gap-4 px-6 py-16 text-center';

export default function OnepageLayout(_props: OnepageLayoutProps) {
  const experiences = [...experiencesData].sort((a, b) => a.order - b.order);
  const educations = [...educationData].sort((a, b) => a.order - b.order);
  const projects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto">
      <OnepageRail />

      {/* À propos */}
      <section id="sec-about" data-section="about" className={screenClasses}>
        <Portrait width={110} height={138} priority />
        <div className="font-heading text-2xl font-bold text-body">
          {profileData.shortName}
        </div>
        <div className="max-w-[560px] font-heading text-lg font-semibold text-body">
          {profileData.headline}
        </div>
        <div className="max-w-[420px] text-[13px] text-muted">{profileData.tagline}</div>
        <div className="flex flex-wrap justify-center gap-2">
          {profileData.stack.map((tech) => (
            <TechChip key={tech} label={tech} small />
          ))}
        </div>
      </section>

      {/* Expériences */}
      <section id="sec-experiences" data-section="experiences" className={screenClasses}>
        <div className="flex max-w-[560px] flex-col gap-4">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <div className="font-heading text-sm font-semibold text-body">
                {experience.title}
              </div>
              <div className="mt-0.5 text-xs text-muted">
                {[experience.company, experience.period].filter(Boolean).join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formations */}
      <section id="sec-formations" data-section="formations" className={screenClasses}>
        <div className="flex max-w-[560px] flex-col gap-4">
          {educations.map((education) => (
            <div key={education.id}>
              <div className="font-heading text-sm font-semibold text-body">
                {education.specialization
                  ? `${education.degree} — ${education.specialization}`
                  : education.degree}
              </div>
              <div className="mt-0.5 text-xs text-muted">
                {education.institution} · {education.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section id="sec-skills" data-section="skills" className={screenClasses}>
        <div className="flex max-w-[560px] flex-wrap justify-center gap-2">
          {skillsData.map((skill) => (
            <SkillBadge key={skill.id} id={skill.id} name={skill.name} src={skill.icon} />
          ))}
        </div>
      </section>

      {/* Projets */}
      {projectsEnabled && (
      <section id="sec-projects" data-section="projects" className={screenClasses}>
        {projects.map((project) => (
          <div key={project.id} className="max-w-[420px]">
            <div className="font-heading text-xl font-semibold text-body">
              {project.title}
            </div>
            <p className="mt-2 text-[13px] leading-[1.6] text-muted">
              {project.description}
            </p>
            {(project.link ?? project.github) && (
              <a
                href={project.link ?? project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-accent"
              >
                Voir le projet →
              </a>
            )}
          </div>
        ))}
      </section>
      )}

      {/* Contact */}
      <section id="sec-contact" data-section="contact" className={screenClasses}>
        <div className="text-left">
          <ContactBlock />
        </div>
      </section>
    </main>
  );
}
