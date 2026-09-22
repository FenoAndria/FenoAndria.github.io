import { Briefcase } from 'lucide-react';
import { experiencesData } from '@/data/experiences';
import TimelineItem from '@/components/ui/TimelineItem';

/**
 * Section Expériences : timeline verticale des expériences professionnelles.
 */

export default function Experience() {
  const experiences = [...experiencesData].sort((a, b) => a.order - b.order);

  return (
    <section
      id="sec-experiences"
      data-section="experiences"
      className="rounded-md border border-line bg-card p-6 lg:px-14 lg:py-11"
    >
      <h2 className="mb-8 flex items-center gap-2.5 font-heading text-2xl font-semibold text-body">
        <Briefcase size={22} className="text-accent" aria-hidden />
        Expériences
      </h2>
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          title={experience.title}
          meta={[
            ...(experience.company
              ? [{ icon: 'building' as const, label: experience.company }]
              : []),
            { icon: 'calendar' as const, label: experience.period },
          ]}
          description={experience.description}
          chips={experience.technologies}
          isLatest={index === 0}
          isLast={index === experiences.length - 1}
        />
      ))}
    </section>
  );
}
