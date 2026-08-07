"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { GITHUB_MONTHS } from "@/content/journey";
import { cn } from "@/lib/utils";
import { useGithub } from "@/hooks/useGithub";

const LEVEL_OPACITY = [0.08, 0.28, 0.5, 0.72, 1];

const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export function GithubHeatmap() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, {
    once: true,
    margin: "-10%",
  });

  const { data, loading } = useGithub();

  const weeks =
    data?.user.contributionsCollection.contributionCalendar.weeks ?? [];

  if (loading) {
    return (
      <div className="grid gap-[3px] opacity-50">
        Loading GitHub activity...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-1.5 hidden justify-between px-0.5 text-[10px] text-[var(--color-text-faint)] sm:flex">
        {GITHUB_MONTHS.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>

      <div
        ref={gridRef}
        className={cn(
          "grid gap-[3px]",
          isInView && "is-revealed"
        )}
        style={{
          gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
        }}
        role="img"
        aria-label="GitHub contribution activity over the past year"
      >
        {weeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid gap-[3px]"
            style={{
              gridTemplateRows:
                "repeat(7, minmax(0, 1fr))",
            }}
          >
            {week.contributionDays.map((day) => {
              const level =
                LEVEL_MAP[day.contributionLevel];

              return (
                <span
                  key={day.date}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                  className="heatmap-cell aspect-square rounded-[2px] bg-[var(--color-success)]"
                  style={
                    {
                      "--cell-opacity":
                        LEVEL_OPACITY[level],
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

        {LEVEL_OPACITY.map((opacity) => (
          <span
            key={opacity}
            className="h-2.5 w-2.5 rounded-[2px] bg-[var(--color-success)]"
            style={{ opacity }}
          />
        ))}

        More
      </div>
    </div>
  );
}