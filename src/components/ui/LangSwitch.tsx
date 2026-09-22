/**
 * Sélecteur de langue FR/EN — placeholder statique, FR actif.
 */

export default function LangSwitch({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-1.5 text-[11px] ${className}`} aria-label="Langue">
      <span className="border-b-2 border-accent pb-0.5 text-accent">FR</span>
      <span className="text-muted">/</span>
      <span className="text-muted">EN</span>
    </div>
  );
}
