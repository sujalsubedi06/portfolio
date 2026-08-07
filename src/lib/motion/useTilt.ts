"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { SPRING } from "./easings";

interface TiltOptions {
  /** max rotation in degrees */
  max?: number;
  disabled?: boolean;
}

/**
 * Attach `ref` to the tilting element and spread `style` onto it
 * (rotateX/rotateY + perspective). `glareX`/`glareY` (0-100) can drive a
 * radial-gradient position for a light-catching sheen.
 */
export function useTilt({ max = 8, disabled = false }: TiltOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springX = useSpring(px, SPRING.settle);
  const springY = useSpring(py, SPRING.settle);

  const rotateX = useTransform(springY, [0, 1], [max, -max]);
  const rotateY = useTransform(springX, [0, 1], [-max, max]);
  const glareX = useTransform(springX, [0, 1], [0, 100]);
  const glareY = useTransform(springY, [0, 1], [0, 100]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return {
    ref,
    rotateX,
    rotateY,
    glareX,
    glareY,
    onPointerMove,
    onPointerLeave,
  };
}
