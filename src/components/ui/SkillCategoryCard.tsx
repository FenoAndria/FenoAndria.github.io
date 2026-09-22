import type { Skill } from '@/types';
import SkillBadge from './SkillBadge';

/**
 * Carte d'une catégorie de compétences : titre accent uppercase
 * + badges techno en flex-wrap.
 */

interface SkillCategoryCardProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategoryCard({ title, skills }: SkillCategoryCardProps) {
  return (
    <div className="rounded-md border border-line bg-base p-[22px]">
      <div className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
        {title}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} id={skill.id} name={skill.name} src={skill.icon} />
        ))}
      </div>
    </div>
  );
}
