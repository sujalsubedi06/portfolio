import { education } from '@/data/education';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TimelineItem } from './TimelineItem';

export function Education() {
  return (
    <section id="education" className="relative px-5 py-section-mobile-lg sm:px-8 md:px-10 md:py-section-desktop-lg">
      <div className="mx-auto max-w-container">
        <SectionTitle index="04" command="~/education $ cat timeline.log" title="Education" />

        <ol className="max-w-2xl">
          {education.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} isLast={i === education.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
