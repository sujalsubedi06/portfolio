"use client";

import { motion, useMotionTemplate } from "framer-motion";
import { type ReactNode, type ElementRef } from "react";
import { useTilt } from "@/lib/motion/useTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  /** disable tilt but keep the card static (useful on touch) */
  disabled?: boolean;
}

/**
 * Perspective-tilting card with a cursor-tracking glare layer, giving cards
 * real depth instead of a flat hover-elevate.
 */
export function TiltCard({
  children,
  className,
  max = 6,
  disabled = false,
}: TiltCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave } =
    useTilt({ max, disabled });

  const glareBackground = useMotionTemplate`radial-gradient(480px circle at ${glareX}% ${glareY}%, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 60%)`;

  return (
    <motion.div
      ref={ref as React.RefObject<ElementRef<"div">>}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        transformPerspective: 900,
      }}
      className={`group relative ${className ?? ""}`}
    >
      {children}
      {!disabled && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}
