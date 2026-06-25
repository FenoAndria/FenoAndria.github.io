/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour GitHub Pages (export statique)
  output: "export",

  // Désactiver l'optimisation d'images pour l'export statique
  images: {
    unoptimized: true,
  },

  // Pas de basePath car on utilise le domaine principal
  // Si vous utilisez username.github.io/repo-name, décommentez et ajustez :
  // basePath: '/FenoAndria.github.io',

  // Ajouter un slash à la fin des URLs
  trailingSlash: true,

  // Configuration stricte pour TypeScript
  typescript: {
    // Arrêter le build en cas d'erreurs TypeScript
    ignoreBuildErrors: false,
  },

  // Configuration ESLint
  eslint: {
    // Arrêter le build en cas d'erreurs ESLint
    ignoreDuringBuilds: false,
  },

  // Optimisations de performance
  swcMinify: true,

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
