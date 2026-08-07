"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { SPRING } from "@/lib/motion/easings";

interface TextRevealProps {
  /** Each string is revealed as its own masked line */
  lines: ReactNode[];
  /** stagger offset between lines, seconds */
  stagger?: number;
  /** delay before the first line starts */
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

const line: Variants = {
  hidden: { y: "115%", filter: "blur(10px)", rotateX: 24 },
  show: {
    y: "0%",
    filter: "blur(0px)",
    rotateX: 0,
    transition: SPRING.settle,
  },
};

/**
 * Wraps each line in an overflow-hidden mask, so the reveal reads as the
 * text rising up from behind an edge — layered (position + blur + subtle
 * 3D rotation resolving to flat) rather than a flat opacity fade.
 */
export function TextReveal({
  lines,
  stagger = 0.09,
  delay = 0,
  className,
  as = "div",
}: TextRevealProps) {
  const Wrapper = motion[as] as typeof motion.div;

  return (
    <Wrapper
      initial="hidden"
      animate="show"
      className={className}
      style={{ perspective: 600 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {lines.map((content, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            variants={line}
            className="block"
            style={{ transformOrigin: "bottom" }}
          >
            {content}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
