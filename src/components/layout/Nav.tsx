'use client';

import type { LucideIcon } from 'lucide-react';
import { User, Briefcase, GraduationCap, Code, Folder, Mail } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

/**
 * Navigation verticale : 6 liens icône + libellé.
 * Lien actif = accent + fond color-mix accent 14% + 600 ;
 * actif piloté par IntersectionObserver (useActiveSection).
 */

export const NAV_ICONS: Record<string, LucideIcon> = {
  user: User,
  briefcase: Briefcase,
  'graduation-cap': GraduationCap,
  code: Code,
  folder: Folder,
  mail: Mail,
};

interface NavProps {
  /** Callback au clic sur un lien (fermeture du menu mobile) */
  onNavigate?: () => void;
  iconSize?: number;
}

export default function Nav({ onNavigate, iconSize = 17 }: NavProps) {
  const active = useActiveSection();

  return (
    <nav aria-label="Navigation du site" className="flex w-full flex-col gap-0.5">
      {navigationItems.map((item) => {
        const Icon = NAV_ICONS[item.icon];
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-2.5 rounded-[5px] px-2.5 py-2 text-[13px] ${
              isActive ? 'font-semibold text-accent' : 'font-normal text-muted'
            }`}
            style={{
              background: isActive
                ? 'color-mix(in srgb, var(--accent-color) 14%, transparent)'
                : 'transparent',
            }}
          >
            {Icon && <Icon size={iconSize} aria-hidden />}
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
