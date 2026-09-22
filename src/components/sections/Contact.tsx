'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ContactBlock from '@/components/ui/ContactBlock';
import { sectionReveal, fadeUpItem } from '@/lib/motion';

/**
 * Section Contact : titre + bloc contact (coordonnées, réseaux,
 * bouton "Envoyer un message").
 */

export default function Contact() {
  return (
    <section
      id="sec-contact"
      data-section="contact"
      className="rounded-md border border-line bg-card p-6 lg:px-14 lg:py-11"
    >
      <motion.div
        className="flex flex-col items-start gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <motion.h2
          variants={fadeUpItem}
          className="flex items-center gap-2.5 font-heading text-2xl font-semibold text-body"
        >
          <Mail size={22} className="text-accent" aria-hidden />
          Contact
        </motion.h2>
        <motion.div variants={fadeUpItem} className="w-full">
          <ContactBlock />
        </motion.div>
      </motion.div>
    </section>
  );
}
