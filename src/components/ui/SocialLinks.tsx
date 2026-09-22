import type { IconType } from 'react-icons';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { profileData } from '@/data/profile';

/**
 * Pastilles réseaux sociaux aux couleurs de marque, logo blanc.
 * 30×30 desktop, 28×28 mobile (prop size).
 */

const BRANDS: Record<string, { Icon: IconType; background: string; rounded: string }> = {
  Facebook: { Icon: FaFacebookF, background: '#1877F2', rounded: 'rounded-full' },
  GitHub: { Icon: FaGithub, background: '#181717', rounded: 'rounded-full' },
  LinkedIn: { Icon: FaLinkedinIn, background: '#0A66C2', rounded: 'rounded-md' },
  WhatsApp: { Icon: FaWhatsapp, background: '#25D366', rounded: 'rounded-full' },
};

interface SocialLinksProps {
  size?: number;
  className?: string;
}

export default function SocialLinks({ size = 30, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {profileData.social.map((social) => {
        const brand = BRANDS[social.name];
        if (!brand) return null;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 ${brand.rounded}`}
            style={{ width: size, height: size, background: brand.background }}
          >
            <brand.Icon size={size / 2} color="#fff" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
