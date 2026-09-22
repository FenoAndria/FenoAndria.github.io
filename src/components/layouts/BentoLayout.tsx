import { profileData } from '@/data/profile';
import { experiencesData } from '@/data/experiences';
import { projectsData, projectsEnabled } from '@/data/projects';
import { skillsData } from '@/data/skills';
import type { Theme } from '@/lib/theme';
import Portrait from '@/components/ui/Portrait';
import SkillBadge from '@/components/ui/SkillBadge';
import ContactInfo from '@/components/ui/ContactInfo';
import SocialLinks from '@/components/ui/SocialLinks';
import CvButton from '@/components/ui/CvButton';

/**
 * Structure "bento" : dashboard en grille modulaire 4 colonnes,
 * cartes de tailles variées, sans flux de lecture linéaire imposé.
 * En mobile : 1 colonne, ordre profil → contact → compétences →
 * expérience → projet.
 */

interface BentoLayoutProps {
  theme: Theme;
}

const cardClasses = 'overflow-hidden rounded-lg border border-line bg-card';

export default function BentoLayout(_props: BentoLayoutProps) {
  const experiences = [...experiencesData].sort((a, b) => a.order - b.order).slice(0, 2);
  const projects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <main className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-3.5 px-4 py-10 md:grid-cols-4 md:auto-rows-[130px] lg:px-[5vw] lg:py-[84px]">
      {/* Profil — 2×2 */}
      <div className={`${cardClasses} flex items-center gap-4 p-6 md:col-span-2 md:row-span-2`}>
        <div className="shrink-0">
          <Portrait width={90} height={112} radius={8} priority />
        </div>
        <div>
          <div className="font-heading text-lg font-bold text-body">
            {profileData.shortName}
          </div>
          <div className="mt-1.5 text-xs text-muted">{profileData.tagline}</div>
          <div className="mt-1.5 text-xs leading-[1.6] text-muted">
            {profileData.headline}
          </div>
        </div>
      </div>

      {/* Contact — 2×1 */}
      <div className={`${cardClasses} p-5 md:col-span-2`}>
        <div className="mb-2 text-[11px] uppercase tracking-[0.06em] text-accent">
          Contact
        </div>
        <ContactInfo iconSize={13} />
      </div>

      {/* Compétences — 2×1 */}
      <div className={`${cardClasses} flex flex-wrap content-center items-center gap-1.5 px-5 py-4 md:col-span-2`}>
        {skillsData.slice(0, 8).map((skill) => (
          <SkillBadge key={skill.id} id={skill.id} name={skill.name} src={skill.icon} />
        ))}
      </div>

      {/* Expérience — 2×1 */}
      <div className={`${cardClasses} p-5 md:col-span-2`}>
        <div className="mb-1.5 text-[11px] uppercase tracking-[0.06em] text-accent">
          Expérience
        </div>
        {experiences.map((experience) => (
          <div key={experience.id} className="mb-1.5">
            <div className="text-[13px] font-semibold text-body">{experience.title}</div>
            <div className="text-[11px] text-muted">
              {[experience.company, experience.period].filter(Boolean).join(' · ')}
            </div>
          </div>
        ))}
      </div>

      {/* Projet — 2×1 */}
      {projectsEnabled && (
        <div className={`${cardClasses} p-5 md:col-span-2`}>
          <div className="mb-1.5 text-[11px] uppercase tracking-[0.06em] text-accent">
            Projet
          </div>
          {projects.map((project) => (
            <div key={project.id}>
              <div className="text-[13px] font-semibold text-body">{project.title}</div>
              <div className="mt-0.5 text-[11px] text-muted">{project.description}</div>
            </div>
          ))}
        </div>
      )}

      {/* Réseaux + CV — 2×1 */}
      <div className={`${cardClasses} flex items-center justify-between gap-4 p-5 md:col-span-4`}>
        <SocialLinks size={28} />
        <div className="w-auto">
          <CvButton className="whitespace-nowrap px-4" />
        </div>
      </div>
    </main>
  );
}
