<<<<<<< HEAD
import type { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";
=======
import type { ProjectStatus } from '@/types';
import { cn } from '@/utils/cn';

const statusStyles: Record<ProjectStatus, string> = {
  Featured: 'border-purple/50 text-purple-soft bg-purple/10',
  Upcoming: 'border-orange/50 text-orange-soft bg-orange/10',
  Learning: 'border-blue/50 text-blue-soft bg-blue/10',
};
>>>>>>> b7a93ce (feat: initial portfolio release)

interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

<<<<<<< HEAD
const STATUS_STYLES: Record<ProjectStatus, string> = {
  "In Progress": "bg-[var(--color-accent)]/12 text-[var(--color-accent)]",
  Live: "bg-[var(--color-success)]/15 text-[var(--color-success)]",
  Completed: "bg-[var(--color-purple)]/15 text-[var(--color-purple)]",
};

=======
>>>>>>> b7a93ce (feat: initial portfolio release)
export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
<<<<<<< HEAD
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
        STATUS_STYLES[status],
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
=======
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest',
        statusStyles[status],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
>>>>>>> b7a93ce (feat: initial portfolio release)
      {status}
    </span>
  );
}
