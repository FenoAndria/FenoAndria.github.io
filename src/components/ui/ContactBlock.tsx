import { profileData } from '@/data/profile';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

/**
 * Bloc contact : coordonnées, réseaux et bouton primaire
 * "Envoyer un message". (Tagline désactivée pour le moment.)
 */

export default function ContactBlock() {
  return (
    <div className="w-full max-w-[420px] rounded-md border border-line bg-base p-[30px]">
      {/* <div className="flex items-center gap-2">
        <span className="blink-slow h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
        <span className="text-xs text-accent">{profileData.tagline}</span>
      </div>
      <div className="my-5 border-t border-line" /> */}
      <ContactInfo className="text-[13px]" />
      <SocialLinks className="mt-[18px]" />
      <a
        href={`mailto:${profileData.email}`}
        className="mt-[22px] inline-block rounded bg-accent px-6 py-3 text-[13px] font-semibold text-onaccent"
      >
        Envoyer un message
      </a>
    </div>
  );
}
