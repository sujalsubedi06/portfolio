"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useScrollParallax } from "@/lib/motion/useScrollParallax";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  scaleRange?: number;
}

export function ParallaxLayer({
  children,
  className,
  distance = 60,
  scaleRange = 0,
}: ParallaxLayerProps) {
  const { ref, y, scale } = useScrollParallax({ distance, scaleRange });

  return (
    <motion.div ref={ref} style={{ y, scale }} className={className}>
      {children}
    </motion.div>
  );
}
