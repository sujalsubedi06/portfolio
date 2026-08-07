import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CursorGlow() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isTouch, setIsTouch] = useState(true);

  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", move, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[60]
        h-[500px]
        w-[500px]
        rounded-full
      "
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: `
          radial-gradient(
            circle,
            rgba(168,85,247,0.22) 0%,
            rgba(99,102,241,0.16) 25%,
            rgba(59,130,246,0.08) 45%,
            transparent 70%
          )
        `,
        filter: "blur(10px)",
        willChange: "transform",
      }}
    />
  );
}