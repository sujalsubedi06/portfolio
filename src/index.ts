const GITHUB_USERNAME = "sujalsubedi06";

interface Env {
  GITHUB_TOKEN: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const headers = {
      "Access-Control-Allow-Origin": "https://sujalsubedi.name.np",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (url.pathname === "/github/stats") {
      try {
        const response = await fetch(
          "https://api.github.com/graphql",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${env.GITHUB_TOKEN}`,
              "Content-Type": "application/json",
              "User-Agent": "portfolio-api",
            },
            body: JSON.stringify({
              query: `
                query {
                  user(login: "${GITHUB_USERNAME}") {
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
                        field: STARGAZERS
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
              `,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return new Response(
            JSON.stringify({
              error: "GitHub API request failed",
              details: data,
            }),
            {
              status: response.status,
              headers,
            }
          );
        }

        return new Response(
          JSON.stringify(data.data.user),
          {
            headers,
          }
        );

      } catch (error) {
        return new Response(
          JSON.stringify({
            error: error instanceof Error
              ? error.message
              : "Unknown error",
          }),
          {
            status: 500,
            headers,
          }
        );
      }
    }

    return new Response(
      JSON.stringify({
        message: "Portfolio API running",
      }),
      {
        headers,
      }
    );
  },
};