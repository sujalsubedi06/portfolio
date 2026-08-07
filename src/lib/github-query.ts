export const GITHUB_QUERY = `
query GetGithubStats($username: String!) {
  user(login: $username) {
    login
    name
    avatarUrl
    bio
    url

    followers {
      totalCount
    }

    following {
      totalCount
    }

    repositories(
      first: 100
      ownerAffiliations: OWNER
      orderBy: {
        field: UPDATED_AT
        direction: DESC
      }
    ) {
      totalCount

      nodes {
        name
        stargazerCount

        primaryLanguage {
          name
          color
        }
      }
    }

    contributionsCollection {
      contributionCalendar {
        totalContributions

        weeks {
          contributionDays {
            contributionCount
            date
            contributionLevel
          }
        }
      }
    }
  }
}
`;