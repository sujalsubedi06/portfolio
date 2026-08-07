"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustedTech } from "@/components/sections/TrustedTech";
import { TextReveal } from "@/components/motion/TextReveal";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { AmbientGlow } from "@/components/motion/AmbientGlow";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { useSpotlight } from "@/lib/motion/useSpotlight";
import { SPRING } from "@/lib/motion/easings";
import { HERO_CONTENT } from "@/content/hero";
import Image from "next/image";

export function Hero() {
  const { ref: spotlightRef, onPointerMove, onPointerLeave } = useSpotlight<HTMLElement>();

  return (
    <section
      id="home"
      ref={spotlightRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative overflow-hidden border-b border-[var(--color-border-subtle)]"
      style={
        {
          "--spot-x": "70%",
          "--spot-y": "30%",
        } as React.CSSProperties
      }
    >
      {/* cursor-aware spotlight — follows the pointer across the whole hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-300 ease-out"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), color-mix(in srgb, var(--color-accent) 9%, transparent), transparent 60%)",
        }}
      />

      {/* ambient drifting glows, independent of the cursor spotlight */}
      <AmbientGlow className="left-[-10%] top-[-10%] h-72 w-72" duration={18} />
      <AmbientGlow
        className="right-[-8%] bottom-[-15%] h-80 w-80"
        color="var(--color-purple)"
        duration={22}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.settle, delay: 0.05 }}
            className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-faint)]"
          >
            {HERO_CONTENT.eyebrow.map((word, i) => (
              <span key={word} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-[var(--color-accent)]" aria-hidden="true">
                    •
                  </span>
                )}
                {word}
              </span>
            ))}
          </motion.p>

          <TextReveal
            as="h1"
            delay={0.15}
            stagger={0.1}
            className="mt-5 text-[2.6rem] font-bold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-6xl"
            lines={[
              "Building secure systems that",
              <>
                solve <span className="text-[var(--color-accent)]">real</span>{" "}
                problems.
              </>,
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...SPRING.settle, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            {HERO_CONTENT.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.settle, delay: 0.62 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
              View My Work
            </Button>
            <Button href="#contact" variant="outline" icon={<ArrowRight size={16} />}>
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING.settle, delay: 0.75 }}
            className="mt-14"
          >
            <TrustedTech />
          </motion.div>
        </div>

        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center">
          {/* decorative concentric rings, each drifting at its own scroll-linked rate for depth */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
            {[0, 1, 2].map((ringIndex) => (
              <ParallaxLayer
                key={ringIndex}
                distance={18 + ringIndex * 14}
                scaleRange={0.04 * (ringIndex + 1)}
                className="absolute flex items-center justify-center"
              >
                <span
                  className="rounded-full border border-[var(--color-border)]"
                  style={{
                    width: `${210 + ringIndex * 55}px`,
                    height: `${210 + ringIndex * 55}px`,
                    opacity: 0.5 - ringIndex * 0.12,
                  }}
                />
              </ParallaxLayer>
            ))}
          </div>

          <ClipReveal direction="up" delay={0.2} className="h-full w-full">
            <TiltCard max={7} className="h-full w-full">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                <Image
                  src="/images/hero/portrait.webp"
                  alt="Portrait of Sujal Subedi"
                  fill
                  priority
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </TiltCard>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}
