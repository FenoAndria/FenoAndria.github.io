import { profileData } from '@/data/profile';
import { projectsEnabled } from '@/data/projects';
import type { Theme } from '@/lib/theme';
import Topbar from '@/components/layout/Topbar';
import Portrait from '@/components/ui/Portrait';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

/**
 * Structure "topbar" : barre horizontale en tête, bloc hero
 * portrait + titre en ligne, puis sections empilées pleine largeur.
 */

interface TopbarLayoutProps {
  theme: Theme;
}

export default function TopbarLayout(_props: TopbarLayoutProps) {
  return (
    <>
      <Topbar />
      <main className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-4 pb-16 pt-6 lg:px-[5vw] lg:pb-[120px]">
        {/* Hero */}
        <div className="flex flex-col items-center gap-6 rounded-md border border-line bg-card p-6 text-center lg:flex-row lg:items-center lg:gap-8 lg:p-10 lg:text-left">
          <div className="shrink-0">
            <Portrait width={110} height={138} priority />
          </div>
          <div>
            <div className="font-heading text-xl font-bold leading-[1.25] text-body lg:text-[26px]">
              {profileData.headline}
            </div>
            <div className="mt-2.5 text-[13px] text-muted">
              {profileData.tagline} · {profileData.location}
            </div>
          </div>
        </div>

        <About />
        <Experience />
        <Education />
        <div className="grid grid-cols-1 gap-6">
          <Skills />
          {projectsEnabled && <Projects />}
        </div>
        <Contact />
      </main>
    </>
  );
}
