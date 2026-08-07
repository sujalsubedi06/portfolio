<<<<<<< HEAD
"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { PROJECTS_CONTENT, PROJECTS } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RevealItem } from "@/components/motion/RevealItem";
import { TiltCard } from "@/components/motion/TiltCard";
import { Magnetic } from "@/components/motion/Magnetic";
import { ProjectThumbnail } from "@/components/sections/ProjectThumbnail";

export function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--color-border-subtle)]">
      <SectionContainer>
        <SectionHeading
          eyebrow={PROJECTS_CONTENT.eyebrow}
          link={{ label: PROJECTS_CONTENT.linkLabel, href: PROJECTS_CONTENT.linkHref }}
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PROJECTS.map((project, index) => (
            <RevealItem
              key={project.slug}
              index={index}
              direction={index % 2 === 0 ? "up" : "left"}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <TiltCard max={5} className="h-full">
                <Card padding="sm" className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated-2)]">
                    <ProjectThumbnail type={project.thumbnail} />
                    <div className="absolute left-2.5 top-2.5">
                      <Badge status={project.status} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-1.5 pt-4">
                    <h3 className="text-sm font-semibold text-[var(--color-text)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {project.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5" role="list">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-[10px] text-[var(--color-text-faint)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-center gap-4 border-t border-[var(--color-border-subtle)] pt-3">
                      {project.liveHref && (
                        <Magnetic strength={0.4} max={6}>
                          <a
                            href={project.liveHref}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
                          >
                            Live Demo
                            <ExternalLink size={12} aria-hidden="true" />
                          </a>
                        </Magnetic>
                      )}
                      {project.githubHref && (
                        <Magnetic strength={0.4} max={6}>
                          <a
                            href={project.githubHref}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                          >
                            GitHub
                            <GithubIcon size={12} />
                          </a>
                        </Magnetic>
                      )}
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </RevealItem>
          ))}
        </div>
      </SectionContainer>
=======
import { projects } from '@/data/projects';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section
      id="projects"
      className="relative -mt-10 rounded-t-[40px] bg-bg px-5 pb-section-mobile-lg pt-section-mobile-lg sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-section-desktop-lg md:pt-section-desktop-lg"
      style={{ zIndex: 10 }}
    >
      <div className="mx-auto max-w-container">
        <SectionTitle index="03" command="~/projects $ git log --oneline" title="Project" />

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} totalCards={projects.length} />
          ))}
        </div>
      </div>
>>>>>>> b7a93ce (feat: initial portfolio release)
    </section>
  );
}
