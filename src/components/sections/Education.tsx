'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '@/data/education';
import TimelineItem from '@/components/ui/TimelineItem';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Section Formations : timeline verticale des diplômes.
 */

export default function Education() {
  const educations = [...educationData].sort((a, b) => a.order - b.order);

  return (
    <section
      id="sec-formations"
      data-section="formations"
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
          <GraduationCap size={22} className="text-accent" aria-hidden />
          Formations
        </motion.h2>
        {educations.map((education, index) => (
          <motion.div key={education.id} variants={fadeUpItem}>
            <TimelineItem
              title={
                education.specialization
                  ? `${education.degree} — ${education.specialization}`
                  : education.degree
              }
              meta={[
                { icon: 'building' as const, label: education.institution },
                { icon: 'calendar' as const, label: education.period },
                { icon: 'location' as const, label: education.location },
              ]}
              isLatest={index === 0}
              isLast={index === educations.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
