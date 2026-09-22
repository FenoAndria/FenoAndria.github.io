/**
 * Chip techno outline accent2 (sections À propos et Expériences).
 */

interface TechChipProps {
  label: string;
  /** Taille réduite pour les chips de timeline */
  small?: boolean;
}

export default function TechChip({ label, small = false }: TechChipProps) {
  return (
    <span
      className={`inline-block rounded-[3px] border border-accent2 uppercase tracking-[0.04em] text-accent2 transition-colors duration-200 hover:bg-accent2 hover:text-onaccent ${
        small ? 'px-[9px] py-[4px] text-[10px]' : 'px-[11px] py-[5px] text-[11px]'
      }`}
    >
      {label}
    </span>
  );
}
