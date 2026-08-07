import type { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  "In Progress": "bg-[var(--color-accent)]/12 text-[var(--color-accent)]",
  Live: "bg-[var(--color-success)]/15 text-[var(--color-success)]",
  Completed: "bg-[var(--color-purple)]/15 text-[var(--color-purple)]",
};

export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
        STATUS_STYLES[status],
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
