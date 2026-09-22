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
      className={`block w-full rounded border border-accent px-5 py-3 text-center text-[13px] font-semibold text-accent ${className}`}
    >
      ↓ Télécharger le CV
    </a>
  );
}
