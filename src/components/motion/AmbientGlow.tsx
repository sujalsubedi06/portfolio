"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion/easings";

interface AmbientGlowProps {
  className?: string;
  /** hex or css color for the blob */
  color?: string;
  /** seconds for one drift cycle */
  duration?: number;
}

/**
 * A single soft, blurred blob that drifts slowly in a loop. Compose two or
 * three with different colors/positions/durations per section so each part
 * of the page has its own ambient signature rather than reusing one glow.
 */
export function AmbientGlow({
  className,
  color = "var(--color-accent)",
  duration = 16,
}: AmbientGlowProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className ?? ""}`}
      style={{
        background: `radial-gradient(circle, color-mix(in srgb, ${color} 35%, transparent), transparent 70%)`,
      }}
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.12, 0.96, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: EASE.ambient,
      }}
    />
  );
}
