import { profileData } from '@/data/profile';

/**
 * Bouton secondaire "↓ Télécharger le CV" (outline accent).
 */

interface CvButtonProps {
  className?: string;
}

export default function CvButton({ className = '' }: CvButtonProps) {
  return (
    <a
      href={profileData.cvUrl}
      download
      className={`block w-full rounded border border-accent px-5 py-3 text-center text-[13px] font-semibold text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-onaccent hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] ${className}`}
    >
      ↓ Télécharger le CV
    </a>
  );
}
