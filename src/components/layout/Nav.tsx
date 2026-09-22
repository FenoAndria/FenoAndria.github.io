'use client';

import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Code, Folder, Mail } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

/**
 * Navigation verticale : 6 liens icône + libellé.
 * Lien actif = accent + pastille de fond qui glisse verticalement, comme
 * le thumb d'un switch. Un seul élément persistant anime top/height vers
 * la position mesurée du lien actif (pas de layoutId/FLIP, qui peut
 * introduire une distorsion d'échelle visible sur un grand déplacement).
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
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const el = itemRefs.current[active];
    if (el) {
      setPill({ top: el.offsetTop, height: el.offsetHeight });
    }
  }, [active]);

  return (
    <nav aria-label="Navigation du site" className="relative flex w-full flex-col gap-0.5">
      {pill && (
        <motion.div
          className="absolute left-0 w-full rounded-[5px]"
          style={{ background: 'color-mix(in srgb, var(--accent-color) 14%, transparent)' }}
          animate={{ top: pill.top, height: pill.height }}
          transition={{ type: 'spring', stiffness: 400, damping: 35, mass: 0.8 }}
        />
      )}
      {navigationItems.map((item) => {
        const Icon = NAV_ICONS[item.icon];
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            href={item.href}
            onClick={onNavigate}
            className={`relative z-10 flex items-center gap-2.5 rounded-[5px] px-2.5 py-2 text-[13px] transition-colors duration-200 ${
              isActive
                ? 'font-semibold text-accent'
                : 'font-normal text-muted hover:translate-x-0.5 hover:text-body'
            }`}
          >
            {Icon && <Icon size={iconSize} aria-hidden />}
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
