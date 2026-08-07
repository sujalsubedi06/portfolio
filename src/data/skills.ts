import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'HTML', category: 'Programming' },
  { name: 'CSS', category: 'Programming' },

  // Frontend Development
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },

  // Cybersecurity
  { name: 'Linux', category: 'Cybersecurity' },
  { name: 'Networking', category: 'Cybersecurity' },
  { name: 'OWASP Fundamentals', category: 'Cybersecurity' },
  { name: 'Web Security', category: 'Cybersecurity' },
  { name: 'Nmap', category: 'Cybersecurity' },
  { name: 'Wireshark', category: 'Cybersecurity' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Claude Code', category: 'Tools' },
];

export const skillCategories: Skill['category'][] = [
  'Programming',
  'Frontend',
  'Backend',
  'Cybersecurity',
  'Tools',
];
