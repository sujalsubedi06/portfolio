import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

/**
 * A single sticky-stacking project card. Each card owns an h-[85vh]
 * scroll container; as the next card scrolls over it, its own scroll
 * progress drives a scale-down so the stack compresses realistically,
 * per the PRD's `targetScale = 1 - (total - 1 - index) * 0.03` spec.
 */
export function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]">
      <div className="sticky top-24 flex items-center md:top-32" style={{ top: `${96 + index * 28}px` }}>
        <motion.article
          style={{ scale }}
          className="group relative w-full origin-top overflow-hidden rounded-lg border-2 border-border-strong bg-bg p-6 transition-colors duration-300 hover:border-purple/60 sm:p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'linear-gradient(120deg, rgba(168,85,247,0.12), transparent 40%, rgba(59,130,246,0.12))',
            }}
          />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5 sm:gap-7">
              <span
                className="font-display font-black leading-none text-border-strong"
                style={{ fontSize: 'clamp(2.75rem, 8vw, 5.5rem)' }}
              >
                {project.number}
              </span>
              <div className="pt-2 sm:pt-4">
                <Badge status={project.status} />
                <h3
                  className="mt-3 font-display font-semibold uppercase text-primary"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}
                >
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-secondary/90" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex shrink-0 gap-3 sm:flex-col sm:items-end">
              {project.liveUrl && (
                <Button variant="ghost" href={project.liveUrl} icon={<ArrowUpRight size={16} />}>
                  Live Project
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="ghost" href={project.repoUrl} icon={<Github size={16} />}>
                  Repository
                </Button>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
