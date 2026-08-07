export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_CONTENT = {
  eyebrow: ["Cybersecurity Student", "Builder", "Problem Solver"],
  subtext:
    "I build secure, scalable and intelligent solutions with focus on cloud, automation, and AI.",
  stats: [
    { label: "Projects", value: "6+", caption: "In Progress" },
    { label: "Years Learning", value: "2+", caption: "Cybersecurity & Cloud" },
    { label: "Commits", value: "100+", caption: "On GitHub" },
    { label: "Certifications", value: "10+", caption: "Completed" },
  ],
};

export const TRUSTED_TECH = [
  { name: "AWS", icon: "cloud" },
  { name: "Cloud Platforms", icon: "cloud-cog" },
  { name: "Docker", icon: "box" },
  { name: "Next.js", icon: "hexagon" },
  { name: "Automation", icon: "zap" },
  { name: "Python", icon: "terminal" },
  { name: "Node.js", icon: "leaf" },
] as const;
