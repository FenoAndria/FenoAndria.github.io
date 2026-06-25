import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';

/**
 * Configuration de la police Inter de Google Fonts
 */
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * Métadonnées du site pour le SEO
 * Ces informations apparaissent dans les résultats de recherche et les réseaux sociaux
 */
export const metadata: Metadata = {
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
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fenoandria.github.io',
    siteName: 'Feno Andriamorasata - Portfolio',
    title: 'Feno Andriamorasata - Développeur Web',
    description: 'Portfolio professionnel de Feno Andriamorasata, développeur web passionné basé à Madagascar.',
    images: [
      {
        url: '/images/profile/PXL_20221127_121207383~2.jpg',
        width: 1200,
        height: 630,
        alt: 'Feno Andriamorasata',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Feno Andriamorasata - Développeur Web',
    description: 'Portfolio professionnel de Feno Andriamorasata, développeur web passionné.',
    images: ['/images/profile/PXL_20221127_121207383~2.jpg'],
  },
  
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
  
  // Vérification
  verification: {
    google: 'votre-code-google-search-console', // À remplacer
  },
};

/**
 * Layout principal de l'application
 * Enveloppe toutes les pages avec la structure HTML de base
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
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
        {/* Icônes */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.2/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css" />
      </head>
      <body className={inter.className}>
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
