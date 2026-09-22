import { getLayout } from '@/lib/layout';
import { getTheme } from '@/lib/theme';
import SidebarLayout from '@/components/layouts/SidebarLayout';
import TopbarLayout from '@/components/layouts/TopbarLayout';
import OnepageLayout from '@/components/layouts/OnepageLayout';
import BentoLayout from '@/components/layouts/BentoLayout';
import TerminalLayout from '@/components/layouts/TerminalLayout';

/**
 * Page d'accueil du portfolio.
 *
 * La structure de mise en page est fixée au build par
 * NEXT_PUBLIC_PORTFOLIO_LAYOUT (défaut : sidebar) et le thème par
 * NEXT_PUBLIC_PORTFOLIO_THEME (défaut : A) — rendu 100 % server-side,
 * pas de bascule client.
 */
export default function Home() {
  const layout = getLayout();
  const theme = getTheme();

  switch (layout) {
    case 'topbar':
      return <TopbarLayout theme={theme} />;
    case 'onepage':
      return <OnepageLayout theme={theme} />;
    case 'bento':
      return <BentoLayout theme={theme} />;
    case 'terminal':
      return <TerminalLayout theme={theme} />;
    case 'sidebar':
    default:
      return <SidebarLayout theme={theme} />;
  }
}
