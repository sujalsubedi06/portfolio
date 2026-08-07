"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SPRING } from "@/lib/motion/easings";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  heading?: string;
  link?: { label: string; href: string };
  className?: string;
  align?: "left" | "between";
}

export function SectionHeading({
  eyebrow,
  heading,
  link,
  className,
  align = "between",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "between" && "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING.settle}
          className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-faint)]"
        >
          {eyebrow}
        </motion.p>
        {heading && (
          <TextReveal
            as="h2"
            lines={[heading]}
            className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl"
          />
        )}
      </div>

      {link && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...SPRING.settle, delay: 0.1 }}
        >
          <ArrowLink href={link.href}>{link.label}</ArrowLink>
        </motion.div>
      )}
    </div>
  );
}
