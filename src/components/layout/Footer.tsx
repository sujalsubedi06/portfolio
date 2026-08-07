<<<<<<< HEAD
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
=======
import { Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';
import { navLinks } from '@/data/seo';
import { socials, locationLabel } from '@/data/socials';
import { personal } from '@/data/personal';

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail, 'file-text': FileText, 'map-pin': MapPin };

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-5 py-14 sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-container flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-primary">{personal.name}</p>
          <p className="mt-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted">
            <MapPin size={14} />
            {locationLabel}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-secondary transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-purple/50 hover:text-purple-soft"
                >
                  <Icon size={17} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto mt-12 max-w-container border-t border-border pt-6 font-mono text-xs text-muted">
        <p>Built with React &amp; Framer Motion</p>
        <p className="mt-1">© 2026 {personal.name}</p>
      </div>
    </footer>
  );
}
>>>>>>> b7a93ce (feat: initial portfolio release)
