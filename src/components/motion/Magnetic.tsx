"use client";

import { motion } from "framer-motion";
import { type ReactNode, type ElementRef } from "react";
import { useMagnetic } from "@/lib/motion/useMagnetic";
import { SPRING } from "@/lib/motion/easings";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  max?: number;
  /** scale applied on hover, in addition to the magnetic pull */
  hoverScale?: number;
}

export function Magnetic({
  children,
  className,
  strength = 0.35,
  max = 14,
  hoverScale = 1.03,
}: MagneticProps) {
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic({
    strength,
    max,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<ElementRef<"div">>}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ x, y }}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.96 }}
      transition={SPRING.tactile}
      className={className}
    >
      {children}
    </motion.div>
  );
}
