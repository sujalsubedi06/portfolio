<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { aboutBio, aboutInterests } from '@/data/personal';
import { locationLabel } from '@/data/socials';
import { education } from '@/data/education';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/Card';

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function About() {
  const primaryEducation = education[0];

  return (
    <section id="about" className="relative px-5 py-section-mobile-lg sm:px-8 md:px-10 md:py-section-desktop-lg">
      <div className="mx-auto max-w-container">
        <SectionTitle index="01" command="~/about $ whoami" title="About" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl text-secondary/90"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.4rem)' }}
        >
          {aboutBio}
        </motion.p>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard hoverGlow className="h-full">
              <MapPin className="text-purple-soft" size={22} />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">Location</p>
              <p className="mt-2 font-display text-2xl font-medium text-primary">{locationLabel} 🇳🇵</p>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard hoverGlow className="h-full">
              <GraduationCap className="text-blue-soft" size={22} />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">Education</p>
              <p className="mt-2 font-display text-xl font-medium text-primary">{primaryEducation.degree}</p>
              <p className="mt-1 text-sm text-secondary/80">{primaryEducation.institution}</p>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard hoverGlow className="h-full">
              <Sparkles className="text-orange-soft" size={22} />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">Interests</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {aboutInterests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-border px-3 py-1 text-xs text-secondary/90"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> b7a93ce (feat: initial portfolio release)
