import type { EcosystemProduct } from "@/types";

export const ECOSYSTEM_CONTENT = {
  eyebrow: "The Krevista Ecosystem",
  heading: "Building a connected suite of products.",
  linkLabel: "Explore Ecosystem",
  linkHref: "#projects",
};

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    slug: "securityhub",
    name: "SecurityHub",
    status: "In Progress",
    icon: "shield",
    accent: "success",
    description: "Cybersecurity toolkit for a safer digital world.",
  },
  {
    slug: "krevista-ai",
    name: "Krevista AI",
    status: "In Progress",
    icon: "sparkles",
    accent: "purple",
    description: "AI platform connecting models, simplifying AI.",
  },
  {
    slug: "krevista-cloud",
    name: "Krevista Cloud",
    status: "In Progress",
    icon: "cloud",
    accent: "blue",
    description: "Secure cloud storage for everyone.",
  },
  {
    slug: "sajilopass",
    name: "SajiloPass",
    status: "In Progress",
    icon: "ticket",
    accent: "green",
    description: "Smart ticketing for modern travelers.",
  },
  {
    slug: "coming-soon",
    name: "More Coming Soon",
    status: "In Progress",
    icon: "sparkle-outline",
    accent: "muted",
    description: "More products are on the way. Stay tuned.",
    comingSoon: true,
  },
];
