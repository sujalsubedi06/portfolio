"use client";

import { motion } from "framer-motion";

interface LineDrawProps {
  /** SVG path 'd' attribute */
  d: string;
  className?: string;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  dashed?: boolean;
}

/**
 * A single animated SVG path that draws itself in on scroll-into-view.
 * Intended to be placed inside a parent <svg> that sizes the viewBox.
 */
/**
 * A straight horizontal dashed connector that reveals left-to-right via
 * scaleX. Use between grid items (e.g. the Ecosystem row) where a full SVG
 * path isn't necessary — same reveal vocabulary (spring settle) as the rest
 * of the system, just for a simpler straight-line case.
 */
export function ConnectorLine({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{ transformOrigin: "left center" }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function LineDraw({
  d,
  className,
  delay = 0,
  duration = 1.1,
  strokeWidth = 1.5,
  dashed = true,
}: LineDrawProps) {
  return (
    <motion.path
      d={d}
      className={className}
      fill="none"
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? "4 5" : undefined}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
