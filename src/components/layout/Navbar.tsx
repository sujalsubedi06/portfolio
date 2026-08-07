"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { NAV_LINKS } from "@/content/site";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/motion/Magnetic";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Image from "next/image";

const NAV_HREFS = NAV_LINKS.map((link) => link.href);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeHref = useScrollSpy(NAV_HREFS, "#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border-subtle)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <Image
              src="/icons/logo.png"
              alt="Sujal Subedi Logo"
              fill
              priority
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="text-[15px] font-semibold text-[var(--color-text)]">
            Sujal Subedi
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-sm transition-colors duration-200",
                    isActive
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <Magnetic strength={0.3} max={6} hoverScale={1.02}>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/20"
          >
            Resume
            <Download size={14} aria-hidden="true" />
          </a>
        </Magnetic>
      </nav>
    </header>
  );
}
