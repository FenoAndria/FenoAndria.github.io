'use client';

import Image from 'next/image';
import { categoryLabels, getSkillsByCategory } from '@/data/skills';
import type { SkillLevel } from '@/types';

function SkillStars({ level }: { level: SkillLevel }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`bx ${star <= level ? 'bxs-star skill-on' : 'bx-star skill-off'}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const categories: Array<keyof typeof categoryLabels> = ['languages', 'frameworks', 'tools'];

  return (
    <section id="competences" className="competences min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="section-title">
          <h2>Compétences</h2>
        </div>

        <div className="space-y-8">
          {categories.map((category, catIndex) => {
            const skills = getSkillsByCategory(category);
            if (skills.length === 0) return null;

            return (
              <div
                key={category}
                data-aos="fade-up"
                data-aos-delay={100 + catIndex * 500}
              >
                <h4 className="competence-bloc-titre">
                  {categoryLabels[category]}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.id}
                      className="competence-container"
                      data-aos="fade-right"
                      data-aos-delay={100 + index * 150}
                    >
                      {/* Logo */}
                      <Image
                        src={skill.icon}
                        alt={`Logo ${skill.name}`}
                        width={35}
                        height={35}
                        className="logo-competence"
                      />

                      {/* Nom + étoiles */}
                      <div className="competence-right">
                        <div className="competence-titre">
                          <span>{skill.name}</span>
                        </div>
                        <SkillStars level={skill.level} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
