"use client";

import { GraduationCap, BadgeCheck, Rocket } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import {
  JOURNEY_CONTENT,
  EDUCATION,
  CERTIFICATIONS,
  CURRENTLY_LEARNING,
} from "@/content/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { RevealItem } from "@/components/motion/RevealItem";
import { CountUp } from "@/components/motion/CountUp";
import { GithubHeatmap } from "@/components/sections/GithubHeatmap";
import { useGithub } from "@/hooks/useGithub";

export function Journey() {
  const { data } = useGithub();

  const repositories =
    data?.user.repositories.nodes ?? [];

  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazerCount,
    0
  );

  const githubStats = [
    {
      label: "Total Contributions",
      value:
        data?.user.contributionsCollection.contributionCalendar
          .totalContributions ?? 0,
    },
    {
      label: "Longest Streak",
      value: "—",
    },
    {
      label: "Repositories",
      value: data?.user.repositories.totalCount ?? 0,
    },
    {
      label: "Total Stars",
      value: totalStars,
    },
  ];

  return (
    <section id="journey" className="border-b border-[var(--color-border-subtle)]">
      <SectionContainer>
        <SectionHeading eyebrow={JOURNEY_CONTENT.eyebrow} />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">

          <RevealItem index={0} direction="up" className="lg:col-span-3">
            <Card className="h-full">
              <IconTile>
                <GraduationCap size={18} aria-hidden="true" />
              </IconTile>

              <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">
                Education
              </h3>

              <p className="mt-3 text-sm font-medium text-[var(--color-text)]">
                {EDUCATION.degree}
              </p>

              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                {EDUCATION.institution}
              </p>

              <p className="mt-3 text-xs text-[var(--color-text-faint)]">
                {EDUCATION.period}
              </p>
            </Card>
          </RevealItem>


          <RevealItem index={1} direction="up" className="lg:col-span-3">
            <Card className="flex h-full flex-col">

              <div className="flex items-center justify-between">
                <IconTile>
                  <BadgeCheck size={18} aria-hidden="true" />
                </IconTile>

                <ArrowLink href="#journey" size="sm">
                  View all
                </ArrowLink>
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">
                Certifications
              </h3>

              <ul className="mt-3 flex-1 space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-baseline justify-between gap-2"
                  >
                    <span>
                      <span className="block text-xs font-medium text-[var(--color-text)]">
                        {cert.name}
                      </span>

                      <span className="block text-[11px] text-[var(--color-text-faint)]">
                        {cert.issuer}
                      </span>
                    </span>

                    <span className="shrink-0 text-[11px] text-[var(--color-text-faint)]">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>

            </Card>
          </RevealItem>


          <RevealItem index={2} direction="up" className="lg:col-span-2">
            <Card className="h-full">

              <IconTile accent="purple">
                <Rocket size={18} aria-hidden="true" />
              </IconTile>

              <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">
                Currently Learning
              </h3>

              <ul className="mt-3 space-y-2.5">
                {CURRENTLY_LEARNING.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-purple)]" />
                    {item}
                  </li>
                ))}
              </ul>

            </Card>
          </RevealItem>


          <RevealItem index={3} direction="right" className="lg:col-span-4">

            <Card className="h-full">

              <div className="flex items-center justify-between">

                <IconTile>
                  <GithubIcon size={18} />
                </IconTile>

                <ArrowLink href="https://github.com/sujalsubedi06" size="sm">
                  View profile
                </ArrowLink>

              </div>


              <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">
                GitHub Activity
              </h3>


              <div className="mt-4 overflow-x-auto">

                <div className="min-w-[380px]">
                  <GithubHeatmap />
                </div>

              </div>


              <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--color-border-subtle)] pt-4 sm:grid-cols-4">

                {githubStats.map((stat, i) => (

                  <div key={stat.label}>

                    <dt className="text-[11px] text-[var(--color-text-faint)]">
                      {stat.label}
                    </dt>

                    <dd className="mt-0.5 text-base font-semibold text-[var(--color-text)]">

                      {typeof stat.value === "number" ? (
                        <CountUp
                          value={String(stat.value)}
                          delay={0.15 * i}
                          duration={1.1}
                        />
                      ) : (
                        stat.value
                      )}

                    </dd>

                  </div>

                ))}

              </dl>

            </Card>

          </RevealItem>


        </div>
      </SectionContainer>
    </section>
  );
}