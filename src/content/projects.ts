import type { Project } from "@/types";

export const PROJECTS_CONTENT = {
  eyebrow: "Featured Projects",
  linkLabel: "View all projects",
  linkHref: "#projects",
};

export const PROJECTS: Project[] = [
  {
    slug: "securityhub",
    name: "SecurityHub",
    status: "In Progress",
    description:
      "A comprehensive cybersecurity toolkit for security engineers and organizations.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    liveHref: "#",
    githubHref: "#",
    thumbnail: "dashboard",
  },
  {
    slug: "krevista-ai",
    name: "Krevista AI",
    status: "In Progress",
    description:
      "AI gateway & multi-model platform uniting multiple AI providers under one API.",
    tags: ["FastAPI", "Python", "PostgreSQL"],
    liveHref: "#",
    githubHref: "#",
    thumbnail: "cube",
  },
  {
    slug: "krevista-cloud",
    name: "Krevista Cloud",
    status: "In Progress",
    description:
      "Secure cloud storage with end-to-end encryption and seamless file sharing.",
    tags: ["Next.js", "AWS S3", "TypeScript"],
    liveHref: "#",
    githubHref: "#",
    thumbnail: "cloud",
  },
  {
    slug: "sajilopass",
    name: "SajiloPass",
    status: "In Progress",
    description:
      "Digital ticketing platform for travelers. QR based ticket verification and bus booking.",
    tags: ["Flutter", "Node.js", "MongoDB"],
    liveHref: "#",
    githubHref: "#",
    thumbnail: "mobile",
  },
  {
    slug: "ganapati-store",
    name: "Ganapati Store",
    status: "In Progress",
    description:
      "E-commerce website for a local general & gift store in Nepalgunj.",
    tags: ["Next.js", "Tailwind CSS"],
    liveHref: "#",
    githubHref: "#",
    thumbnail: "storefront",
  },
];
