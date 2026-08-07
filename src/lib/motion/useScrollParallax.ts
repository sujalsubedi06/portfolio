"use client";

import { useRef } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

interface ParallaxOptions {
  /** negative = moves up faster than scroll, positive = moves down (drifts behind) */
  distance?: number;
  /** additional scale change across the scroll range, e.g. 0.08 = grows 8% */
  scaleRange?: number;
}

export function useScrollParallax({
  distance = 60,
  scaleRange = 0,
}: ParallaxOptions = {}): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 - scaleRange, 1, 1 - scaleRange]
  );

  return { ref, y, scale };
}
