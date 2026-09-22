import { profileData } from '@/data/profile';
import { experiencesData } from '@/data/experiences';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { projectsData, projectsEnabled } from '@/data/projects';
import type { Theme } from '@/lib/theme';
import SocialLinks from '@/components/ui/SocialLinks';

/**
 * Structure "terminal" : toute la page dans un cadre façon fenêtre
 * de terminal, chaque section rendue comme une commande tapée suivie
 * de sa sortie, curseur clignotant en fin de flux.
 */

interface TerminalLayoutProps {
  theme: Theme;
}

function Prompt({ command }: { command: string }) {
  return (
    <div>
      <span className="text-accent">feno@portfolio</span>
      <span className="text-body"> ~ % </span>
      <span className="text-accent2">{command}</span>
    </div>
  );
}

export default function TerminalLayout(_props: TerminalLayoutProps) {
  const experiences = [...experiencesData].sort((a, b) => a.order - b.order);
  const educations = [...educationData].sort((a, b) => a.order - b.order);
  const projects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <main className="mx-auto w-full max-w-[900px] px-4 py-10 lg:py-[84px]">
      <div className="overflow-hidden rounded-lg border border-line bg-base">
        {/* Barre de titre */}
        <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-2.5">
          <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F56]" aria-hidden />
          <span className="h-[11px] w-[11px] rounded-full bg-[#FFBD2E]" aria-hidden />
          <span className="h-[11px] w-[11px] rounded-full bg-[#27C93F]" aria-hidden />
          <span className="ml-2 font-heading text-xs text-muted">feno@portfolio: ~</span>
        </div>

        {/* Flux de commandes */}
        <div className="p-5 font-heading text-xs leading-[1.8] text-body lg:p-[30px] lg:text-[13px]">
          <section id="sec-about" data-section="about">
            <Prompt command="about" />
            <div className="mb-4 ml-3.5 mt-1 text-muted">
              {profileData.headline} {profileData.tagline}. {profileData.description}
            </div>
          </section>

          <section id="sec-experiences" data-section="experiences">
            <Prompt command="cat experience.log" />
            <div className="mb-4 ml-3.5 mt-1 text-muted">
              {experiences.map((experience) => (
                <div key={experience.id}>
                  {experience.title} —{' '}
                  {[experience.company, experience.period].filter(Boolean).join(' · ')}
                </div>
              ))}
            </div>
          </section>

          <section id="sec-formations" data-section="formations">
            <Prompt command="cat education.log" />
            <div className="mb-4 ml-3.5 mt-1 text-muted">
              {educations.map((education) => (
                <div key={education.id}>
                  {education.degree}
                  {education.specialization ? ` — ${education.specialization}` : ''} ·{' '}
                  {education.institution} · {education.period}
                </div>
              ))}
            </div>
          </section>

          <section id="sec-skills" data-section="skills">
            <Prompt command="skills --list" />
            <div className="mb-4 ml-3.5 mt-1 text-muted">
              {skillsData.map((skill) => (
                <span key={skill.id} className="mr-3.5 inline-block">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {projectsEnabled && (
          <section id="sec-projects" data-section="projects">
            <Prompt command="ls projects/" />
            <div className="mb-4 ml-3.5 mt-1 text-muted">
              {projects.map((project) => (
                <div key={project.id}>
                  {project.title} — {project.description}{' '}
                  {(project.link ?? project.github) && (
                    <a
                      href={project.link ?? project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent"
                    >
                      [voir]
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
          )}

          <section id="sec-contact" data-section="contact">
            <Prompt command="contact" />
            <div className="mb-1 ml-3.5 mt-1 text-muted">
              <a href={`mailto:${profileData.email}`}>{profileData.email}</a> ·{' '}
              <a href={`tel:${profileData.phone.replace(/\s/g, '')}`}>{profileData.phone}</a>{' '}
              · {profileData.location}
            </div>
            <div className="mb-2 ml-3.5">
              <SocialLinks size={26} />
            </div>
          </section>

          <div className="mt-2.5">
            <span className="text-accent">feno@portfolio</span>
            <span className="text-body"> ~ % </span>
            <span
              className="blink ml-1 inline-block h-[15px] w-2 bg-accent align-middle"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </main>
  );
}
