import { Code } from 'lucide-react';
import { getSkillsByCategory, categoryLabels } from '@/data/skills';
import type { SkillCategory } from '@/types';
import SkillCategoryCard from '@/components/ui/SkillCategoryCard';

/**
 * Section Compétences : grille 2 colonnes de cartes par catégorie.
 */

const CATEGORIES: SkillCategory[] = ['languages', 'frameworks', 'databases', 'tools'];

export default function Skills() {
  return (
    <section
      id="sec-skills"
      data-section="skills"
      className="rounded-md border border-line bg-card p-6 lg:px-14 lg:py-11"
    >
      <h2 className="mb-7 flex items-center gap-2.5 font-heading text-2xl font-semibold text-body">
        <Code size={22} className="text-accent" aria-hidden />
        Compétences
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {CATEGORIES.map((category) => (
          <SkillCategoryCard
            key={category}
            title={categoryLabels[category]}
            skills={getSkillsByCategory(category)}
          />
        ))}
      </div>
    </section>
  );
}
