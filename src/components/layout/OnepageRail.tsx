'use client';

import { navigationItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

/**
 * Rail de points (structure onepage) : indique la section visible
 * (point accent) parmi les autres (point border). Masqué en mobile.
 */

export default function OnepageRail() {
  const active = useActiveSection();

  return (
    <div
      role="tablist"
      aria-label="Sections"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    >
      {navigationItems.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            role="tab"
            aria-selected={isActive}
            aria-label={item.label}
            href={item.href}
            className={`h-[9px] w-[9px] rounded-full transition-all duration-200 hover:scale-150 ${isActive ? 'bg-accent' : 'bg-line hover:bg-accent'}`}
          />
        );
      })}
    </div>
  );
}
