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
    >
      {children}
    </div>
  );
}
