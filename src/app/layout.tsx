import type { Metadata } from 'next';
import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
  Fraunces,
  Chakra_Petch,
} from 'next/font/google';
import './globals.css';
import { getTheme } from '@/lib/theme';
import { getLayout } from '@/lib/layout';
import { profileData } from '@/data/profile';

const SITE_URL = 'https://fenoandria.github.io';

/**
 * Polices Google chargées via next/font — exposées en variables CSS,
 * consommées par --font-heading / --font-body selon le thème (globals.css).
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  axes: ['opsz'],
  variable: '--font-fraunces',
});

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-chakra-petch',
});

const fontVariables = [
  inter.variable,
  jetbrainsMono.variable,
  spaceGrotesk.variable,
  fraunces.variable,
  chakraPetch.variable,
].join(' ');

/**
 * Métadonnées du site pour le SEO
 * Ces informations apparaissent dans les résultats de recherche et les réseaux sociaux
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Feno Andriamorasata - Développeur Web',
  description: 'Portfolio professionnel de Feno Andriamorasata, développeur web spécialisé en Laravel, Vue.js, React et Next.js. Découvrez mes projets et compétences.',
  keywords: [
    'Feno Andriamorasata',
    'Développeur Web',
    'Portfolio',
    'Laravel',
    'Vue.js',
    'React',
    'Next.js',
    'Madagascar',
    'Antananarivo',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Feno Andriamorasata', url: 'https://github.com/FenoAndria' }],
  creator: 'Feno Andriamorasata',
  publisher: 'Feno Andriamorasata',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Vérification Google Search Console : décommenter et renseigner le code
  // une fois le site ajouté sur https://search.google.com/search-console
  // verification: {
  //   google: 'code-fourni-par-search-console',
  // },
};

/**
 * Layout principal de l'application
 *
 * Le thème (A–E, Monochrome ink par défaut) et la structure (sidebar,
 * topbar, …) sont fixés au build par NEXT_PUBLIC_PORTFOLIO_THEME et
 * NEXT_PUBLIC_PORTFOLIO_LAYOUT, lus côté serveur — aucun state client,
 * aucun flash de thème, pas de sélecteur visible.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getTheme();
  const layout = getLayout();

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    url: SITE_URL,
    image: `${SITE_URL}${profileData.image}`,
    jobTitle: profileData.title,
    description: profileData.description,
    email: `mailto:${profileData.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profileData.location,
    },
    sameAs: profileData.social.map((social) => social.url).filter((url) => url.startsWith('http')),
  };

  return (
    <html lang="fr" data-theme={theme} data-layout={layout} className={fontVariables}>
      <head>
        {/* Données structurées (Person) pour les résultats de recherche */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MC9VPJBS');
            `,
          }}
        />
      </head>
      <body className="font-body">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC9VPJBS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
