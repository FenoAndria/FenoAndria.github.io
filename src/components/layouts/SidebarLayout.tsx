import type { Theme } from '@/lib/theme';
import { projectsEnabled } from '@/data/projects';
import Sidebar from '@/components/layout/Sidebar';
import MobileNav from '@/components/layout/MobileNav';
import MobileProfileCard from '@/components/layout/MobileProfileCard';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

/**
 * Structure "sidebar" : panneau plein écran collé au bord gauche (sans
 * carte, plein écran) + contenu en cartes empilées à droite. En mobile,
 * la sidebar est remplacée par MobileProfileCard (carte profil) et
 * MobileNav (bouton burger flottant, disponible dans toutes les sections).
 */

interface SidebarLayoutProps {
  theme: Theme;
}

export default function SidebarLayout(_props: SidebarLayoutProps) {
  return (
    <main className="w-full pb-16 lg:flex lg:pb-[120px]">
      <MobileNav />

      {/* Profil mobile (< 1024px) */}
      <div className="mb-6 px-4 pt-6 lg:hidden">
        <MobileProfileCard />
      </div>

      {/* Sidebar desktop — collée au bord gauche, plein écran, fixe */}
      <aside className="hidden w-[350px] shrink-0 lg:block">
        <div className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[350px] lg:overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      {/* Colonne de contenu */}
      <div className="flex flex-1 flex-col gap-6 px-4 pt-6 lg:px-[5vw] lg:pt-[84px]">
        <About />
        <Experience />
        <Education />
        <Skills />
        {projectsEnabled && <Projects />}
        <Contact />
      </div>
    </main>
  );
}
