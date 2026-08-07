import type { ContactChannel } from "@/types";

export const CONTACT_CONTENT = {
  heading: "Let's build something meaningful together.",
  subtext:
    "I'm open to discussing new opportunities, collaborations or interesting projects.",
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  { icon: "mail", label: "sujal.subedi96@gmail.com", href: "mailto:sujal.subedi96@gmail.com" },
  { icon: "map-pin", label: "Nepalgunj, Nepal", href: "#" },
  {
    icon: "linkedin",
    label: "linkedin.com/in/sujal-subedi",
    href: "https://linkedin.com/in/sujal-subedi",
  },
  {
    icon: "github",
    label: "github.com/sujal-subedi",
    href: "https://github.com/sujal-subedi",
  },
];

export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} Sujal Subedi. All rights reserved.`,
  tagline: "Built with care in Nepal.",
  links: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};
