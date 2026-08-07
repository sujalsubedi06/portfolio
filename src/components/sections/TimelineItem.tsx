import { motion } from 'framer-motion';
import type { EducationEntry } from '@/types';

interface TimelineItemProps {
  entry: EducationEntry;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-purple/40 animate-pulse-ring" />
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-signal" />
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-border-strong" />}
      </div>

      <div className="pb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-purple-soft">{entry.period}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-primary sm:text-2xl">
          {entry.institution}
        </h3>
        <p className="mt-1 text-secondary">{entry.degree}</p>
        {entry.description && <p className="mt-2 max-w-lg text-sm text-muted">{entry.description}</p>}
      </div>
    </motion.li>
  );
}
