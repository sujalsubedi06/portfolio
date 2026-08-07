"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/motion/Magnetic";
import { SPRING } from "@/lib/motion/easings";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-hover)]",
  outline:
    "bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-text-faint)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  icon,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 overflow-hidden",
    variantStyles[variant],
    className
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.span
          className="relative z-10 inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={SPRING.tactile}
        >
          {icon}
        </motion.span>
      )}
      {/* sheen sweep on hover — tactile rather than decorative */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  return (
    <Magnetic strength={0.4} max={10} hoverScale={1.02}>
      {href ? (
        <Link href={href} className={classes} onClick={onClick}>
          {inner}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={classes}>
          {inner}
        </button>
      )}
    </Magnetic>
  );
}
