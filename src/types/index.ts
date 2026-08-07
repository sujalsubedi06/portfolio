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
