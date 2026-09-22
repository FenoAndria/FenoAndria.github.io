/* eslint-disable @next/next/no-img-element */
import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPython,
  SiLaravel,
  SiCodeigniter,
  SiVuedotjs,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiMysql,
  SiMongodb,
  SiGit,
  SiTrello,
} from 'react-icons/si';

/**
 * Badge compact techno : logo 16×16 couleur de marque + libellé 11px.
 *
 * Les logos viennent de simple-icons (via react-icons) — base provisoire.
 * Un remplacement de source est possible sans changer la structure :
 * passer `icon` (composant) ou `src` (fichier image) en props ;
 * à défaut, le registre interne est utilisé via `id`.
 */

const BRAND_ICONS: Record<string, { Icon: IconType; color: string }> = {
  html: { Icon: SiHtml5, color: '#E44D26' },
  css: { Icon: SiCss3, color: '#1572B6' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  php: { Icon: SiPhp, color: '#777BB4' },
  python: { Icon: SiPython, color: '#3776AB' },
  laravel: { Icon: SiLaravel, color: '#FF2D20' },
  codeigniter: { Icon: SiCodeigniter, color: '#EF4223' },
  vuejs: { Icon: SiVuedotjs, color: '#4FC08D' },
  react: { Icon: SiReact, color: '#61DAFB' },
  bootstrap: { Icon: SiBootstrap, color: '#7952B3' },
  tailwindcss: { Icon: SiTailwindcss, color: '#38BDF8' },
  jquery: { Icon: SiJquery, color: '#0769AD' },
  mysql: { Icon: SiMysql, color: '#4479A1' },
  mongodb: { Icon: SiMongodb, color: '#47A248' },
  git: { Icon: SiGit, color: '#F05032' },
  trello: { Icon: SiTrello, color: '#0079BF' },
};

interface SkillBadgeProps {
  /** Identifiant de la compétence (clé du registre de logos) */
  id: string;
  name: string;
  /** Remplacement de la source du logo par un composant icône */
  icon?: IconType;
  /** Remplacement de la source du logo par un fichier image */
  src?: string;
}

export default function SkillBadge({ id, name, icon: IconOverride, src }: SkillBadgeProps) {
  const brand = BRAND_ICONS[id];

  return (
    <span className="flex items-center gap-1.5 rounded border border-line bg-card py-[5px] pl-1.5 pr-2.5">
      {IconOverride ? (
        <IconOverride size={16} aria-hidden />
      ) : src ? (
        <img src={src} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
      ) : brand ? (
        <brand.Icon size={16} color={brand.color} aria-hidden />
      ) : null}
      <span className="text-[11px] text-body">{name}</span>
    </span>
  );
}
