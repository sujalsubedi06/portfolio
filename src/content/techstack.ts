import type { TechCategory } from "@/types";

export const TECH_STACK_CONTENT = {
  eyebrow: "Tech Stack",
  linkLabel: "View all skills",
  linkHref: "#tech-stack",
};

export const TECH_CATEGORIES: TechCategory[] = [
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "PHP", "SQL"] },
  { title: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend", items: ["Node.js", "FastAPI", "Laravel", "Express.js", "REST APIs"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Git & GitHub", "Linux", "Nginx"] },
  {
    title: "Security",
    items: [
      "Network Security",
      "Linux Security",
      "OWASP Top 10",
      "Penetration Testing",
      "Incident Response",
    ],
  },
  { title: "Tools", items: ["VS Code", "Postman", "Figma", "MongoDB", "GitHub Actions"] },
];
