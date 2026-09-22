import Image from 'next/image';
import { profileData } from '@/data/profile';

/**
 * Portrait avec bordure accent 40% et coins arrondis.
 */

interface PortraitProps {
  /** Nombre (px) ou expression CSS (ex. clamp() pour une taille fluide) */
  width?: number | string;
  height?: number | string;
  radius?: number;
  priority?: boolean;
}

export default function Portrait({
  width = 200,
  height = 230,
  radius = 10,
  priority = false,
}: PortraitProps) {
  return (
    <div
      className="relative overflow-hidden border"
      style={{
        width,
        height,
        borderRadius: radius,
        borderColor: 'color-mix(in srgb, var(--accent-color) 40%, transparent)',
      }}
    >
      <Image
        src={profileData.image}
        alt={profileData.imageAlt}
        fill
        className="object-cover"
        sizes={typeof width === 'number' ? `${width}px` : '200px'}
        priority={priority}
      />
    </div>
  );
}
