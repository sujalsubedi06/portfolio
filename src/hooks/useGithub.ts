"use client";

import { useEffect, useState } from "react";
import type { GithubResponse } from "@/lib/github-types";

export function useGithub() {
  const [data, setData] = useState<GithubResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGithub() {
      try {
        const response = await fetch("/api/github/stats");

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unknown error"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchGithub();
  }, []);

  return {
    data,
    loading,
    error,
  };
}