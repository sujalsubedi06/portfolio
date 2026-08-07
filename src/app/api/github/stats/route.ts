import { GITHUB_QUERY } from "@/lib/github-query";

const GITHUB_API = "https://api.github.com/graphql";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return Response.json(
      {
        error: "GitHub environment variables are missing",
      },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_QUERY,
        variables: {
          username,
        },
      }),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return Response.json(
        {
          error: "GitHub API request failed",
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors) {
      return Response.json(
        {
          error: data.errors,
        },
        { status: 500 }
      );
    }

    return Response.json(data.data);
  } catch {
    return Response.json(
      {
        error: "Unable to fetch GitHub data",
      },
      { status: 500 }
    );
  }
}