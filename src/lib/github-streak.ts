import type { ContributionWeek } from "@/lib/github-types";

export function calculateLongestStreak(
  weeks: ContributionWeek[]
) {
  const days = weeks
    .flatMap((week) => week.contributionDays)
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
    );

  let longest = 0;
  let current = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      current += 1;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }

  return longest;
}