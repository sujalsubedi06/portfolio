import { useState } from 'react';
import {
  Braces,
  FileCode2,
  Terminal,
  Globe,
  Palette,
  Atom,
  Layers,
  Server,
  Network,
  Wifi,
  ShieldCheck,
  Bug,
  Radar,
  GitBranch,
  Github,
  MonitorSmartphone,
  Figma as FigmaIcon,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { skills, skillCategories } from '@/data/skills';
import type { SkillCategory } from '@/types';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SkillCard } from './SkillCard';
import { cn } from '@/utils/cn';

const iconMap: Record<string, LucideIcon> = {
  JavaScript: Braces,
  TypeScript: FileCode2,
  Python: Terminal,
  HTML: Globe,
  CSS: Palette,
  React: Atom,
  'Next.js': Layers,
  'Tailwind CSS': Palette,
  'Node.js': Server,
  Express: Server,
  Linux: Terminal,
  Networking: Network,
  'OWASP Fundamentals': ShieldCheck,
  'Web Security': Bug,
  Nmap: Radar,
  Wireshark: Wifi,
  Git: GitBranch,
  GitHub: Github,
  'VS Code': MonitorSmartphone,
  Figma: FigmaIcon,
  'Claude Code': Sparkles,
};

const categoryLabels: Record<SkillCategory, string> = {
  Programming: 'Programming',
  Frontend: 'Frontend',
  Backend: 'Backend',
  Cybersecurity: 'Cybersecurity',
  Tools: 'Tools',
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const filteredSkills =
    activeCategory === 'All' ? skills : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative px-5 py-section-mobile-lg sm:px-8 md:px-10 md:py-section-desktop-lg">
      <div className="mx-auto max-w-container">
        <SectionTitle index="02" command="~/skills $ ls -la" title="Skills" />

        <div className="mb-10 flex flex-wrap gap-2 md:mb-14" role="tablist" aria-label="Filter skills by category">
          {(['All', ...skillCategories] as const).map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200',
                activeCategory === category
                  ? 'border-purple/60 bg-purple/10 text-purple-soft'
                  : 'border-border text-muted hover:border-border-strong hover:text-secondary',
              )}
            >
              {category === 'All' ? 'All' : categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              Icon={iconMap[skill.name] ?? Braces}
              delay={(i % 10) * 0.04}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
