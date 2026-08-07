import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Accent = "success" | "purple" | "blue" | "green" | "muted" | "accent";

interface IconTileProps {
  children: ReactNode;
  accent?: Accent;
  size?: "sm" | "md";
  className?: string;
}

const ACCENT_STYLES: Record<Accent, string> = {
  success: "bg-[var(--color-success)]/12 text-[var(--color-success)]",
  purple: "bg-[var(--color-purple)]/12 text-[var(--color-purple)]",
  blue: "bg-sky-400/12 text-sky-400",
  green: "bg-emerald-400/12 text-emerald-400",
  muted: "bg-[var(--color-text-faint)]/10 text-[var(--color-text-faint)]",
  accent: "bg-[var(--color-accent)]/12 text-[var(--color-accent)]",
};

const SIZE_STYLES: Record<NonNullable<IconTileProps["size"]>, string> = {
  sm: "h-9 w-9 rounded-lg",
  md: "h-11 w-11 rounded-xl",
};

export function IconTile({
  children,
  accent = "accent",
  size = "md",
  className,
}: IconTileProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        ACCENT_STYLES[accent],
        SIZE_STYLES[size],
        className
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
