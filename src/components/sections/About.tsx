"use client";

import { motion } from "framer-motion";
import { Box, ShieldCheck, Code2, Award } from "lucide-react";
import { ABOUT_CONTENT, STATS } from "@/content/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { RevealItem } from "@/components/motion/RevealItem";
import { TiltCard } from "@/components/motion/TiltCard";
import { SPRING } from "@/lib/motion/easings";

const STAT_ICONS = {
  box: Box,
  shield: ShieldCheck,
  code: Code2,
  certificate: Award,
} as const;

export function About() {
  return (
    <section
      id="about"
      className="border-b border-[var(--color-border-subtle)]"
    >
      <SectionContainer>
        <SectionHeading eyebrow={ABOUT_CONTENT.eyebrow} />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={SPRING.settle}
              className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl"
            >
              {ABOUT_CONTENT.heading}
            </motion.h2>

            {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ ...SPRING.settle, delay: 0.12 + i * 0.12 }}
                className="mt-6 text-base leading-8 text-[var(--color-text-muted)]"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING.settle, delay: 0.35 }}
              className="mt-8 border-l-2 border-[var(--color-accent)] pl-5 italic text-[var(--color-text)]"
            >
              "{ABOUT_CONTENT.quote}"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING.settle, delay: 0.45 }}
              className="mt-8"
            >
              <ArrowLink href={ABOUT_CONTENT.linkHref}>
                {ABOUT_CONTENT.linkLabel}
              </ArrowLink>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {STATS.map((stat, index) => {
              const Icon = STAT_ICONS[stat.icon];

              return (
                <RevealItem key={stat.label} index={index} direction="up">
                  <TiltCard max={5}>
                    <Card className="h-full">
                      <IconTile>
                        <Icon size={18} aria-hidden="true" />
                      </IconTile>

                      <p className="mt-5 text-2xl font-bold leading-tight text-[var(--color-text)]">
                        {stat.value}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                        {stat.label}
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-faint)]">
                        {stat.caption}
                      </p>
                    </Card>
                  </TiltCard>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}