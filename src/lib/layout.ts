/**
 * Sélection de la structure de mise en page via variable d'environnement.
 *
 * La structure est fixée au build par NEXT_PUBLIC_PORTFOLIO_LAYOUT,
 * lue côté serveur : app/layout.tsx pose data-layout sur <html> et
 * app/page.tsx monte le composant de structure correspondant.
 */

export type PortfolioLayout = 'sidebar' | 'topbar' | 'onepage' | 'bento' | 'terminal';

export const LAYOUTS: PortfolioLayout[] = ['sidebar', 'topbar', 'onepage', 'bento', 'terminal'];

export const layoutNames: Record<PortfolioLayout, string> = {
  sidebar: 'Sidebar fixe',
  topbar: 'Top-bar horizontale',
  onepage: 'Une page = un écran',
  bento: 'Bento / grille modulaire',
  terminal: 'Terminal interactif',
};

function isLayout(value: string | undefined): value is PortfolioLayout {
  return !!value && (LAYOUTS as string[]).includes(value);
}

/** Structure active — défaut sidebar si la variable est absente ou invalide. */
export function getLayout(): PortfolioLayout {
  const value = process.env.NEXT_PUBLIC_PORTFOLIO_LAYOUT;
  return isLayout(value) ? value : 'sidebar';
}
