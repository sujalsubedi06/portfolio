<<<<<<< HEAD
export type ProjectStatus = "In Progress" | "Live" | "Completed";

export interface StatItem {
  icon: "box" | "shield" | "code" | "certificate";
  value: string;
  label: string;
  caption: string;
}

export interface EcosystemProduct {
  slug: string;
  name: string;
  status: ProjectStatus;
  icon: "shield" | "sparkles" | "cloud" | "ticket" | "sparkle-outline";
  accent: "success" | "purple" | "blue" | "green" | "muted";
  description: string;
  comingSoon?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  liveHref?: string;
  githubHref?: string;
  thumbnail: "dashboard" | "cube" | "cloud" | "mobile" | "storefront";
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface GithubStat {
  label: string;
  value: string;
}

export interface ContactChannel {
  icon: "mail" | "map-pin" | "linkedin" | "github";
  label: string;
  href: string;
}
=======
export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'file-text' | 'map-pin';
}

export interface PersonalInfo {
  name: string;
  greeting: string;
  title: string;
  taglineParts: string[];
  introduction: string;
  location: string;
  resumeUrl: string;
}

export type ProjectStatus = 'Featured' | 'Upcoming' | 'Learning';

export interface Project {
  id: string;
  number: string;
  title: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export type SkillCategory =
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Cybersecurity'
  | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialUrl?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  url: string;
}
>>>>>>> b7a93ce (feat: initial portfolio release)
