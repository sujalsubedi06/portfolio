export interface ContributionDay {
  contributionCount: number;
  date: string;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface GithubRepository {
  name: string;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
}

export interface GithubResponse {
  user: {
    login: string;
    name: string;
    avatarUrl: string;
    bio: string | null;
    url: string;

    followers: {
      totalCount: number;
    };

    following: {
      totalCount: number;
    };

    repositories: {
      totalCount: number;
      nodes: GithubRepository[];
    };

    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: ContributionWeek[];
      };
    };
  };
}