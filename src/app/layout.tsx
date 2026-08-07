import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://sujalsubedi.com.np"),
  title: {
    default: "Sujal Subedi — Cybersecurity Student & Builder",
    template: "%s | Sujal Subedi",
  },
  description:
    "I build secure, scalable and intelligent solutions with a focus on cloud, automation, and AI. Cybersecurity student, builder, problem solver.",
  keywords: [
    "Sujal Subedi",
    "cybersecurity",
    "software engineer",
    "cloud",
    "Nepal developer",
    "AWS",
    "portfolio",
  ],
  authors: [{ name: "Sujal Subedi" }],
  openGraph: {
    title: "Sujal Subedi — Cybersecurity Student & Builder",
    description:
      "Building secure systems that solve real problems. I build secure, scalable and intelligent solutions with a focus on cloud, automation, and AI.",
    url: "https://sujalsubedi.com.np",
    siteName: "Sujal Subedi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Subedi — Cybersecurity Student & Builder",
    description:
      "Building secure systems that solve real problems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
