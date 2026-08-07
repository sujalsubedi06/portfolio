"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER_CONTENT } from "@/content/contact";
import { Magnetic } from "@/components/motion/Magnetic";
import { SPRING } from "@/lib/motion/easings";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] text-[10px] font-semibold text-[var(--color-text-muted)]">
            SS
          </span>
          <span>{FOOTER_CONTENT.copyright}</span>
        </div>

        <p className="order-last sm:order-none">{FOOTER_CONTENT.tagline}</p>

        <div className="flex items-center gap-5">
          {FOOTER_CONTENT.links.map((link) => (
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
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </footer>
  );
}
