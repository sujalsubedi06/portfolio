"use client";

import { GITHUB_MONTHS } from "@/content/journey";
import { useGithub } from "@/hooks/useGithub";

function getColor(count: number) {
  if (count === 0) return "#161b22";
  if (count <= 2) return "#0e4429";
  if (count <= 5) return "#006d32";
  if (count <= 9) return "#26a641";
  return "#39d353";
}

export function GithubHeatmap() {
  const { data, loading } = useGithub();

  const weeks =
    data?.user.contributionsCollection.contributionCalendar.weeks ?? [];

  if (loading) {
    return (
      <p className="text-xs text-[var(--color-text-faint)]">
        Loading GitHub activity...
      </p>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-2 hidden justify-between text-[10px] text-[var(--color-text-faint)] sm:flex">
        {GITHUB_MONTHS.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>

      <div className="flex w-full justify-between gap-[2px]">
        {weeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="flex flex-1 flex-col gap-[2px]"
          >
            {week.contributionDays.map((day) => (
              <span
                key={day.date}
                title={`${day.date}: ${day.contributionCount} contributions`}
                className="aspect-square w-full rounded-[1px]"
                style={{
                  backgroundColor: getColor(
                    day.contributionCount
                  ),
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-[var(--color-text-faint)]">
        <span>Less</span>

        {[1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className="h-2.5 w-2.5 rounded-[2px]"
            style={{
              backgroundColor: getColor(level * 3),
            }}
          />
        ))}

        <span>More</span>
      </div>
    </div>
  );
}