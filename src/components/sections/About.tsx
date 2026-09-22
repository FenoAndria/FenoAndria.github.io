'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import TechChip from '@/components/ui/TechChip';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Section À propos : titre principal, présentation et chips de stack.
 */

export default function About() {
  return (
    <section
      id="sec-about"
      data-section="about"
      className="min-h-[50vh] rounded-md border border-line bg-card p-6 lg:min-h-[75vh] lg:px-14 lg:py-[52px]"
    >
      <motion.div
        className="flex h-full flex-col justify-center gap-[18px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <motion.h1
          variants={fadeUpItem}
          className="font-heading text-2xl font-bold leading-[1.2] text-body lg:text-[33px]"
        >
          {profileData.headline}
        </motion.h1>
        <motion.p variants={fadeUpItem} className="text-[15px] leading-[1.7] text-muted">
          {profileData.description}
        </motion.p>
        <motion.div variants={fadeUpItem} className="mt-1.5 flex flex-wrap gap-2">
          {profileData.stack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
