import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
  Icon: LucideIcon;
  delay: number;
}

export function SkillCard({ skill, Icon, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center gap-3 rounded-md border border-border bg-surface px-4 py-6 text-center transition-colors duration-300 hover:border-purple/50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: '0 0 0 1px rgba(168,85,247,0.35), 0 8px 30px rgba(168,85,247,0.15)' }}
      />
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-purple-soft transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-soft">
        <Icon size={20} />
      </span>
      <p className="relative text-sm font-medium text-secondary">{skill.name}</p>
    </motion.div>
  );
}
