import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    number: '01',
    title: 'Personal Portfolio',
    status: 'Featured',
    description:
      'The current portfolio website showcasing modern frontend engineering, animation, and design practices.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    repoUrl: 'https://github.com/sujalsubedi06',
  },
  {
    id: 'sajilopass',
    number: '02',
    title: 'SajiloPass',
    status: 'Upcoming',
    description:
      'A smart mobility platform for Nepal focused on improving transportation experiences through digital services.',
    technologies: ['React', 'Node.js', 'TypeScript'],
  },
  {
    id: 'cybersecurity-fundamentals',
    number: '03',
    title: 'Cybersecurity Fundamentals',
    status: 'Learning',
    description:
      'A collection of practical cybersecurity labs involving Linux, networking, scripting, and web security experimentation.',
    technologies: ['Linux', 'Nmap', 'Wireshark', 'Networking'],
  },
];
