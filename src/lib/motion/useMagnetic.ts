"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { SPRING } from "./easings";

interface MagneticOptions {
  /** how strongly the element travels toward the pointer, 0-1 */
  strength?: number;
  /** clamp the maximum travel distance in px */
  max?: number;
  disabled?: boolean;
}

/**
 * Attach the returned ref to the element you want to feel magnetic.
 * Bind `style={{ x, y }}` on the same (or a child) element.
 */
export function useMagnetic({
  strength = 0.35,
  max = 16,
  disabled = false,
}: MagneticOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING.magnetic);
  const springY = useSpring(y, SPRING.magnetic);

  const onPointerMove = (e: React.PointerEvent) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-max, Math.min(max, relX * strength)));
    y.set(Math.max(-max, Math.min(max, relY * strength)));
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}
