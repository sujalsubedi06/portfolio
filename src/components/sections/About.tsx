"use client";

import { motion } from "framer-motion";
import { Box, ShieldCheck, Code2, Award } from "lucide-react";
import { ABOUT_CONTENT, STATS } from "@/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { RevealItem } from "@/components/motion/RevealItem";
import { TiltCard } from "@/components/motion/TiltCard";
import { CountUp } from "@/components/motion/CountUp";
import { SPRING } from "@/lib/motion/easings";

const STAT_ICONS = {
  box: Box,
  shield: ShieldCheck,
  code: Code2,
  certificate: Award,
} as const;

export function About() {
  return (
    <section id="about" className="border-b border-[var(--color-border-subtle)]">
      <SectionContainer>
        <SectionHeading eyebrow={ABOUT_CONTENT.eyebrow} />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ ...SPRING.settle, delay: i * 0.12 }}
                className={
                  i === 0
                    ? "text-lg font-medium leading-relaxed text-[var(--color-text)] sm:text-xl"
                    : "mt-4 text-base leading-relaxed text-[var(--color-text-muted)]"
                }
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING.settle, delay: 0.3 }}
              className="mt-6"
            >
              <ArrowLink href={ABOUT_CONTENT.linkHref}>
                {ABOUT_CONTENT.linkLabel}
              </ArrowLink>
            </motion.div>
          </div>

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
                      <p className="mt-4 text-3xl font-bold text-[var(--color-text)]">
                        <CountUp value={stat.value} delay={0.1 * index} />
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                        {stat.label}
                      </p>
                      <p className="text-xs text-[var(--color-text-faint)]">
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
