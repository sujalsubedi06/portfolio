import type { CertificationItem, GithubStat } from "@/types";

export const JOURNEY_CONTENT = {
  eyebrow: "Journey",
};

export const EDUCATION = {
  degree: "Bachelor in Cyber Security (BCS)",
  institution: "Herald College Kathmandu",
  period: "2023 — Present",
};

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2024" },
  { name: "Google Cybersecurity", issuer: "Google", year: "2024" },
];

export const CURRENTLY_LEARNING = ["AWS Cloud Security", "Kubernetes", "AI Security"];

export const GITHUB_STATS: GithubStat[] = [
  { label: "Total Contributions", value: "1,284" },
  { label: "Longest Streak", value: "45 days" },
  { label: "Repositories", value: "15" },
  { label: "Total Stars", value: "287" },
];

export const GITHUB_MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
];
