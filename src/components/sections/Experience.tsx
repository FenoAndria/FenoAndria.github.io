'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiencesData } from '@/data/experiences';
import TimelineItem from '@/components/ui/TimelineItem';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Section Expériences : timeline verticale des expériences professionnelles.
 */

export default function Experience() {
  const experiences = [...experiencesData].sort((a, b) => a.order - b.order);

  return (
    <section
      id="sec-experiences"
      data-section="experiences"
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
          className="mb-8 flex items-center gap-2.5 font-heading text-2xl font-semibold text-body"
        >
          <Briefcase size={22} className="text-accent" aria-hidden />
          Expériences
        </motion.h2>
        {experiences.map((experience, index) => (
          <motion.div key={experience.id} variants={fadeUpItem}>
            <TimelineItem
              title={experience.title}
              meta={[
                ...(experience.company
                  ? [{ icon: 'building' as const, label: experience.company }]
                  : []),
                { icon: 'calendar' as const, label: experience.period },
              ]}
              description={experience.description}
              chips={experience.technologies}
              isLatest={index === 0}
              isLast={index === experiences.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
