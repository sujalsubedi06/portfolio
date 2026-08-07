import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://sujalsubedi.com.np"),

  title: {
    default: "Sujal Subedi | Cybersecurity Student, Software Engineer & Builder",
    template: "%s | Sujal Subedi",
  },

  description:
    "Sujal Subedi is a cybersecurity student, software engineer, and builder from Nepal specializing in secure systems, cloud computing, AI, automation, Flutter, Next.js, and NestJS.",

  applicationName: "Sujal Subedi Portfolio",

  authors: [
    {
      name: "Sujal Subedi",
      url: "https://sujalsubedi.com.np",
    },
  ],

  creator: "Sujal Subedi",

  publisher: "Sujal Subedi",

  category: "Technology",

  keywords: [
    "Sujal Subedi",
    "Sujal Subedi Portfolio",
    "Cybersecurity",
    "Cybersecurity Student",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Computing",
    "Artificial Intelligence",
    "Flutter Developer",
    "Next.js Developer",
    "NestJS Developer",
    "TypeScript",
    "React",
    "AWS",
    "Developer Nepal",
    "Software Engineer Nepal",
    "Cybersecurity Nepal",
    "Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://sujalsubedi.com.np",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujalsubedi.com.np",
    siteName: "Sujal Subedi",

    title: "Sujal Subedi | Cybersecurity Student, Software Engineer & Builder",

    description:
      "Building secure, scalable, and intelligent digital experiences with cybersecurity, cloud computing, AI, and modern web technologies.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sujal Subedi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sujal Subedi | Cybersecurity Student, Software Engineer & Builder",

    description:
      "Building secure, scalable, and intelligent digital experiences.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}