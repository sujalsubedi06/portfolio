<<<<<<< HEAD
import { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
  dashed?: boolean;
}

const PADDING: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  padding = "md",
  dashed = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-[var(--color-bg-elevated)]",
        dashed
          ? "border-dashed border-[var(--color-border)]"
          : "border-[var(--color-border)]",
        PADDING[padding],
        className
      )}
      {...rest}
=======
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverGlow?: boolean;
}

/**
 * The base glass surface: translucent panel, blurred backdrop,
 * hairline border. Optional hover glow adds a gradient border
 * pulse used by interactive cards (skills, about).
 */
export function GlassCard({ children, hoverGlow = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-md p-6 transition-all duration-300',
        hoverGlow &&
          'hover:-translate-y-1 hover:border-purple/50 hover:shadow-[0_8px_40px_rgba(168,85,247,0.18)]',
        className,
      )}
      {...props}
>>>>>>> b7a93ce (feat: initial portfolio release)
    >
      {children}
    </div>
  );
}
