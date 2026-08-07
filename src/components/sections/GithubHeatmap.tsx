"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { GITHUB_MONTHS } from "@/content/journey";
import { cn } from "@/lib/utils";

const WEEKS = 46;
const DAYS = 7;

// Deterministic pseudo-random so server and client render identically.
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return x - Math.floor(x);
}

function levelFor(week: number, day: number) {
  const n = pseudoRandom(week * DAYS + day);
  if (n > 0.86) return 4;
  if (n > 0.68) return 3;
  if (n > 0.48) return 2;
  if (n > 0.3) return 1;
  return 0;
}

const LEVEL_OPACITY = [0.08, 0.28, 0.5, 0.72, 1];

export function GithubHeatmap() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-10%" });

  return (
    <div>
      <div className="mb-1.5 hidden justify-between px-0.5 text-[10px] text-[var(--color-text-faint)] sm:flex">
        {GITHUB_MONTHS.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
      <div
        ref={gridRef}
        className={cn("grid gap-[3px]", isInView && "is-revealed")}
        style={{ gridTemplateColumns: `repeat(${WEEKS}, minmax(0, 1fr))` }}
        role="img"
        aria-label="GitHub contribution activity over the past year"
      >
        {Array.from({ length: WEEKS }).map((_, week) => (
          <div key={week} className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}>
            {Array.from({ length: DAYS }).map((_, day) => {
              const level = levelFor(week, day);
              return (
                <span
                  key={day}
                  className="heatmap-cell aspect-square rounded-[2px] bg-[var(--color-success)]"
                  style={
                    {
                      "--cell-opacity": LEVEL_OPACITY[level],
                      "--cell-delay": `${(week * DAYS + day) * 2}ms`,
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-[var(--color-text-faint)]">
        Less
        {LEVEL_OPACITY.map((op) => (
          <span
            key={op}
            className="h-2.5 w-2.5 rounded-[2px] bg-[var(--color-success)]"
            style={{ opacity: op }}
          />
        ))}
        More
      </div>
    </div>
  );
}
