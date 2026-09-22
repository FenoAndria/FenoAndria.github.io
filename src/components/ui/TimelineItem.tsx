import { Calendar, Building2, MapPin } from 'lucide-react';
import TechChip from './TechChip';

/**
 * Élément de timeline verticale (Expériences, Formations) :
 * puce 10px (accent pour le plus récent), ligne verticale 2px,
 * titre, méta (établissement, date, localisation, avec icônes),
 * description et chips.
 */

export interface TimelineMetaItem {
  icon: 'building' | 'calendar' | 'location';
  label: string;
}

const META_ICONS = {
  building: Building2,
  calendar: Calendar,
  location: MapPin,
};

interface TimelineItemProps {
  title: string;
  /** Méta structurée (établissement, date…) affichée avec icônes */
  meta: TimelineMetaItem[];
  description?: string[];
  chips?: string[];
  /** Puce accent (élément le plus récent) */
  isLatest?: boolean;
  /** Dernier élément : pas de ligne verticale */
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  meta,
  description = [],
  chips = [],
  isLatest = false,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex gap-5">
      <div className="flex w-4 shrink-0 flex-col items-center">
        <div
          className={`mt-[7px] h-[10px] w-[10px] shrink-0 rounded-full ${isLatest ? 'bg-accent' : 'bg-muted'}`}
        />
        {!isLast && <div className="mt-1 w-[2px] flex-1 bg-line" />}
      </div>
      <div className={`group flex-1 ${isLast ? '' : 'pb-8'}`}>
        <h3 className="font-heading text-base font-semibold text-body transition-colors duration-200 group-hover:text-accent">
          {title}
        </h3>
        <div className="mt-1.5 flex flex-col gap-1 text-[13px] text-muted">
          {meta.map((item, index) => {
            const Icon = META_ICONS[item.icon];
            return (
              <span key={index} className="flex items-center gap-1.5">
                <Icon size={13} className="shrink-0" aria-hidden />
                {item.label}
              </span>
            );
          })}
        </div>
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="mt-2.5 text-sm leading-[1.6] text-muted"
          >
            {paragraph}
          </p>
        ))}
        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((chip) => (
              <TechChip key={chip} label={chip} small />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
