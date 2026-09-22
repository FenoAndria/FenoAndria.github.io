import { profileData } from '@/data/profile';
import TechChip from '@/components/ui/TechChip';

/**
 * Section À propos : titre principal, présentation et chips de stack.
 */

export default function About() {
  return (
    <section
      id="sec-about"
      data-section="about"
      className="flex min-h-[50vh] flex-col justify-center gap-[18px] rounded-md border border-line bg-card p-6 lg:min-h-[75vh] lg:px-14 lg:py-[52px]"
    >
      <h1 className="font-heading text-2xl font-bold leading-[1.2] text-body lg:text-[33px]">
        {profileData.headline}
      </h1>
      <p className="text-[15px] leading-[1.7] text-muted">
        {profileData.description}
      </p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {profileData.stack.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>
    </section>
  );
}
