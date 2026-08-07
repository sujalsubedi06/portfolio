import type { StatItem } from "@/types";

export const ABOUT_CONTENT = {
  eyebrow: "About Me",
  paragraphs: [
    "I'm a cybersecurity student passionate about building products that create real impact.",
    "I love turning complex ideas into simple, useful and secure solutions.",
  ],
  linkLabel: "Know more about me",
  linkHref: "#contact",
};

export const STATS: StatItem[] = [
  { icon: "box", value: "6+", label: "Projects", caption: "In Progress" },
  {
    icon: "shield",
    value: "2+",
    label: "Years Learning",
    caption: "Cybersecurity & Cloud",
  },
  { icon: "code", value: "100+", label: "Commits", caption: "On GitHub" },
  {
    icon: "certificate",
    value: "10+",
    label: "Certifications",
    caption: "Completed",
  },
];
