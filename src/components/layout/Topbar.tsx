'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { profileData } from '@/data/profile';
import { navigationItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NAV_ICONS } from './Nav';

/**
 * Barre horizontale (structure topbar) : nom à gauche, nav en ligne
 * au centre (lien actif souligné accent), bouton CV à droite.
 * En mobile la nav passe en menu burger déroulant.
 */

export default function Topbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="sticky top-0 z-40 border-b border-line bg-card">
      <div className="relative mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-3.5 lg:px-7">
        <div className="font-heading text-base font-semibold text-body">
          {profileData.shortName}
        </div>

        {/* Nav desktop */}
        <nav aria-label="Navigation du site" className="hidden items-center gap-[22px] md:flex">
          {navigationItems.map((item) => {
            const Icon = NAV_ICONS[item.icon];
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-1.5 pb-1 text-[13px] transition-colors duration-200 ${
                  isActive
                    ? 'border-b-2 border-accent font-semibold text-accent'
                    : 'border-b-2 border-transparent font-normal text-muted hover:text-body'
                }`}
              >
                {Icon && <Icon size={14} aria-hidden />}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profileData.cvUrl}
            download
            className="rounded border border-accent px-4 py-2 text-xs font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-onaccent"
          >
            CV ↓
          </a>
          {/* Burger mobile */}
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={open}
            aria-label="Menu de navigation"
            onClick={() => setOpen((value) => !value)}
            className="flex items-center gap-[7px] rounded-[5px] border border-line px-2.5 py-[7px] text-[11px] text-body md:hidden"
          >
            <Menu size={15} aria-hidden />
            Menu
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {open && (
          <div
            role="menu"
            aria-label="Navigation du site"
            className="absolute left-4 right-4 top-[calc(100%+8px)] z-10 flex flex-col gap-0.5 rounded-lg border border-line bg-card p-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.35)] md:hidden"
          >
            {navigationItems.map((item) => {
              const Icon = NAV_ICONS[item.icon];
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 rounded-[5px] px-2.5 py-2 text-[13px] transition-colors duration-200 ${
                    isActive ? 'font-semibold text-accent' : 'font-normal text-muted hover:text-body'
                  }`}
                  style={{
                    background: isActive
                      ? 'color-mix(in srgb, var(--accent-color) 14%, transparent)'
                      : 'transparent',
                  }}
                >
                  {Icon && <Icon size={16} aria-hidden />}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
