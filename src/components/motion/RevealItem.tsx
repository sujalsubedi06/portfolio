"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { SPRING, cascade } from "@/lib/motion/easings";

type Direction = "up" | "left" | "right";

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  direction?: Direction;
  /** base stagger unit passed to the cascade() curve */
  staggerBase?: number;
  baseDelay?: number;
}

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
};

/**
 * Scroll-triggered, layered reveal for grid items: combines position, scale,
 * blur and a slight 3D rotation resolving to flat — never opacity alone.
 * Pass `index` so items in the same grid cascade with natural, non-linear
 * timing instead of a flat per-item interval.
 */
export function RevealItem({
  children,
  className,
  index = 0,
  direction = "up",
  staggerBase = 0.08,
  baseDelay = 0,
}: RevealItemProps) {
  const offset = OFFSETS[direction];
  const rotateAxis = direction === "up" ? "rotateX" : "rotateY";
  const rotateSign = direction === "left" ? 1 : -1;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.94,
        filter: "blur(8px)",
        [rotateAxis]: 10 * rotateSign,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        [rotateAxis]: 0,
      }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        ...SPRING.settle,
        delay: baseDelay + cascade(index, staggerBase),
      }}
      style={{ transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  );
}
