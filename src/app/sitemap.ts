import type { MetadataRoute } from 'next';

/**
 * Génère sitemap.xml au build (compatible export statique) —
 * déjà référencé par public/robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fenoandria.github.io',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
