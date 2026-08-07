import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28", className)}>
      {children}
    </div>
  );
}
