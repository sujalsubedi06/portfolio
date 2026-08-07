import type { StatItem } from "@/types";

export const ABOUT_CONTENT = {
  eyebrow: "About Me",

  heading: "Learning by Building.",

  paragraphs: [
    "I'm Sujal Subedi, a second-year Information Technology student from Nepal with a strong interest in cybersecurity, software engineering, cloud computing, and artificial intelligence.",

    "I enjoy building practical projects that strengthen my technical skills while creating secure, scalable, and meaningful software.",
  ],

  quote:
    "I believe the best engineers never stop learning, building, and improving.",

  linkLabel: "Let's Connect",
  linkHref: "#contact",
} as const;

export const STATS: StatItem[] = [
  {
    icon: "shield",
    value: "Security",
    label: "Primary Focus",
    caption: "Building secure software with security-first principles.",
  },
  {
    icon: "code",
    value: "Development",
    label: "Core Skill",
    caption: "Building modern, scalable, and maintainable applications.",
  },
  {
    icon: "box",
    value: "Cloud & AI",
    label: "Currently Learning",
    caption: "Expanding my skills through practical projects.",
  },
  {
    icon: "certificate",
    value: "Growth",
    label: "Mindset",
    caption: "Always learning and improving every day.",
  },
];