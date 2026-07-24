const GITHUB_USERNAME = "sujalsubedi06";

interface Env {
  GITHUB_TOKEN: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const origin = request.headers.get("Origin");

    const allowedOrigins = [
      "https://sujalsubedi.name.np",
      "http://localhost:3000",
    ];

    const headers = {
      "Access-Control-Allow-Origin": allowedOrigins.includes(origin ?? "")
        ? origin!
        : "https://sujalsubedi.name.np",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers,
      });
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
                    name
                    login
                    avatarUrl

                    followers {
                      totalCount
                    }

                    repositories(
                      first: 100,
                      ownerAffiliations: OWNER
                    ) {
                      totalCount
                    }

                    contributionsCollection {
                      contributionCalendar {
                        totalContributions
                      }
                    }
                  }
                }
              `,
            }),
          }
        );

        const data = await response.json();

        if (data.errors) {
          return new Response(
            JSON.stringify({
              error: "GitHub API error",
              details: data.errors,
            }),
            {
              status: 500,
              headers,
            }
          );
        }

        return new Response(
          JSON.stringify(data.data.user),
          {
            headers: {
              ...headers,
              "Cache-Control": "public, max-age=3600",
            },
          }
        );

      } catch (error) {
        return new Response(
          JSON.stringify({
            error: String(error),
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