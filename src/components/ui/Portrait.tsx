/* eslint-disable @next/next/no-img-element */
import { profileData } from '@/data/profile';

/**
 * Portrait avec bordure accent 40% et coins arrondis.
 *
 * <img> natif plutôt que next/image : avec l'export statique
 * (images.unoptimized), next/image ne produit pas de srcset — ici le
 * navigateur choisit la variante pré-réduite adaptée à la densité d'écran.
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
      <img
        src={profileData.image}
        srcSet={profileData.imageSrcSet}
        sizes={typeof width === 'number' ? `${width}px` : '200px'}
        alt={profileData.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  );
}
