import { Phone, Mail, MapPin } from 'lucide-react';
import { profileData } from '@/data/profile';

/**
 * Coordonnées avec icônes trait (téléphone, email, localisation).
 */

interface ContactInfoProps {
  /** Taille des icônes : 14px desktop, 13px mobile */
  iconSize?: number;
  className?: string;
}

export default function ContactInfo({ iconSize = 14, className = '' }: ContactInfoProps) {
  return (
    <div className={`flex flex-col gap-2 text-left text-xs text-muted ${className}`}>
      <div className="flex items-center gap-2">
        <Phone size={iconSize} className="shrink-0" aria-hidden />
        <a href={`tel:${profileData.phone.replace(/\s/g, '')}`}>{profileData.phone}</a>
      </div>
      <div className="flex items-center gap-2">
        <Mail size={iconSize} className="shrink-0" aria-hidden />
        <a href={`mailto:${profileData.email}`} className="break-all">
          {profileData.email}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={iconSize} className="shrink-0" aria-hidden />
        <span>{profileData.location}</span>
      </div>
    </div>
  );
}
