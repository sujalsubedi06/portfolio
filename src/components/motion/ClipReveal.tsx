"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { SPRING } from "@/lib/motion/easings";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** direction the shutter opens from */
  direction?: "up" | "left" | "right";
}

const CLIP_FROM: Record<NonNullable<ClipRevealProps["direction"]>, string> = {
  up: "inset(100% 0% 0% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

export function ClipReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        clipPath: CLIP_FROM[direction],
        scale: 1.06,
        filter: "blur(6px)",
      }}
      whileInView={{
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ ...SPRING.drift, delay }}
    >
      {children}
    </motion.div>
  );
}
