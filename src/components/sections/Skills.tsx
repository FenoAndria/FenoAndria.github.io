'use client';

import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { getSkillsByCategory, categoryLabels } from '@/data/skills';
import type { SkillCategory } from '@/types';
import SkillCategoryCard from '@/components/ui/SkillCategoryCard';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Section Compétences : grille de cartes par catégorie.
 * Desktop : 2 cartes sur la 1re ligne, 3 sur la 2e (grille 6 colonnes),
 * cartes d'une même ligne à hauteur égale.
 */

const CATEGORIES: { category: SkillCategory; span: string }[] = [
  { category: 'languages', span: 'lg:col-span-3' },
  { category: 'frameworks', span: 'lg:col-span-3' },
  { category: 'cms', span: 'lg:col-span-2' },
  { category: 'databases', span: 'lg:col-span-2' },
  { category: 'tools', span: 'lg:col-span-2' },
];

export default function Skills() {
  return (
    <section
      id="sec-skills"
      data-section="skills"
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
          <Code size={22} className="text-accent" aria-hidden />
          Compétences
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {CATEGORIES.map(({ category, span }) => (
            <motion.div key={category} variants={fadeUpItem} className={span}>
              <SkillCategoryCard
                title={categoryLabels[category]}
                skills={getSkillsByCategory(category)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
