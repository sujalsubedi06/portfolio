import type { NavLink, SeoConfig } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const seo: SeoConfig = {
  title: 'Sujal Subedi — Software Developer & Cybersecurity Enthusiast',
  description:
    'Sujal Subedi is a CyberSecurity student at Herald College Kathmandu building modern software while exploring cybersecurity, networking, and Linux.',
  keywords: [
    'Software Developer Nepal',
    'Cybersecurity Student',
    'CyberSecurity Student',
    'Sujal Subedi',
  ],
  url: 'https://sujalsubedi.name.np/',
};
