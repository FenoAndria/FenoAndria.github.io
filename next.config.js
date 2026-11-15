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

  // Pas de headers() : ignoré avec output "export", GitHub Pages ne
  // permet pas de définir des en-têtes HTTP personnalisés.
};

module.exports = nextConfig;
