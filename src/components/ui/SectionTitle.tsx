import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  index: string;
  command: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * "01 / ~/about $ cat bio.md" style eyebrow followed by a massive
 * gradient headline. This is the site's recurring signature: every
 * section is framed as a command being run, tying visual language
 * back to the cybersecurity / terminal identity.
 */
export function SectionTitle({ index, command, title, align = 'left', className }: SectionTitleProps) {
  return (
    <div className={cn('mb-14 sm:mb-16 md:mb-20', align === 'center' && 'text-center', className)}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '50px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          'mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted sm:text-sm',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="text-purple">{index}</span>
        <span className="cursor-blink">{command}</span>
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '50px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-signal font-display font-black uppercase leading-[0.95] tracking-tight"
        style={{ fontSize: 'clamp(2.75rem, 9vw, 6.5rem)' }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
