import { Mail } from 'lucide-react';
import ContactBlock from '@/components/ui/ContactBlock';

/**
 * Section Contact : titre + bloc contact (coordonnées, réseaux,
 * bouton "Envoyer un message").
 */

export default function Contact() {
  return (
    <section
      id="sec-contact"
      data-section="contact"
      className="flex flex-col items-start gap-6 rounded-md border border-line bg-card p-6 lg:px-14 lg:py-11"
    >
      <h2 className="flex items-center gap-2.5 font-heading text-2xl font-semibold text-body">
        <Mail size={22} className="text-accent" aria-hidden />
        Contact
      </h2>
      <ContactBlock />
    </section>
  );
}
