<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { NAV_LINKS } from "@/config/navigation";
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
=======
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/seo';
import { personal } from '@/data/personal';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeId, scrolled } = useActiveSection(sectionIds);

  function handleNavigate(href: string) {
    setMenuOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            'flex w-full max-w-container items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 sm:px-8',
            scrolled ? 'border-border bg-bg/75 backdrop-blur-xl' : 'border-transparent bg-transparent',
          )}
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#home');
            }}
            className="font-mono text-sm uppercase tracking-widest text-primary"
          >
            {personal.name.split(' ')[0]}
            <span className="text-purple">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(link.href);
                  }}
                  className={cn(
                    'font-medium text-sm uppercase tracking-wider text-secondary transition-opacity duration-200 hover:opacity-70',
                    activeId === link.href.replace('#', '') && 'text-purple-soft opacity-100',
>>>>>>> b7a93ce (feat: initial portfolio release)
                  )}
                >
                  {link.label}
                </a>
<<<<<<< HEAD
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
=======
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-secondary md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-bg/98 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end p-6">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-secondary"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(link.href);
                    }}
                    className="font-display text-4xl font-semibold uppercase tracking-wide text-secondary"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
>>>>>>> b7a93ce (feat: initial portfolio release)
  );
}
