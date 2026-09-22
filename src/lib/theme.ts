/**
 * Sélection du thème de couleur via variable d'environnement.
 *
 * Le thème est fixé au build par NEXT_PUBLIC_PORTFOLIO_THEME (A–E),
 * lu côté serveur dans app/layout.tsx qui pose data-theme sur <html>.
 * Les variables CSS correspondantes sont déclarées dans globals.css.
 */

export type Theme = 'A' | 'B' | 'C' | 'D' | 'E';

export const THEMES: Theme[] = ['A', 'B', 'C', 'D', 'E'];

export const themeNames: Record<Theme, string> = {
  A: 'Terminal dev',
  B: 'Blueprint technique',
  C: 'Éditorial chaleureux',
  D: 'Cyberpunk néon',
  E: 'Monochrome ink',
};

function isTheme(value: string | undefined): value is Theme {
  return !!value && (THEMES as string[]).includes(value);
}

/** Thème actif — défaut E (Monochrome ink) si la variable est absente ou invalide. */
export function getTheme(): Theme {
  const value = process.env.NEXT_PUBLIC_PORTFOLIO_THEME;
  return isTheme(value) ? value : 'E';
}

/** Le thème A affiche les labels de section en pseudo-commande terminal. */
export function isTerminalTheme(theme: Theme): boolean {
  return theme === 'A';
}
