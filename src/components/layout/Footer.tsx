"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

import { SITE } from "@/config/site";
import { Magnetic } from "@/components/motion/Magnetic";
import { SPRING } from "@/lib/motion/easings";

const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
] as const;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={SPRING.settle}
        className="flex flex-col items-center gap-4 border-t border-[var(--color-border-subtle)] pt-8 text-xs text-[var(--color-text-faint)] sm:flex-row sm:justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 overflow-hidden rounded-md">
            <Image
              src="/icons/logo.png"
              alt={`${SITE.name} Logo`}
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>

          <span>{SITE.copyright}</span>
        </div>

        <p className="order-last sm:order-none">
          {SITE.tagline}
        </p>

        <div className="flex items-center gap-5">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}

          <Magnetic strength={0.4} max={8} hoverScale={1.0}>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
            >
              <ArrowUp
                size={14}
                aria-hidden="true"
              />
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </footer>
  );
}