import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Ambient hero backdrop: two soft gradient blobs that drift with the
 * cursor, a faint dashboard-style grid, and a light noise overlay so
 * the flat background never looks like a plain color fill.
 */
export function HeroBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });

  const blob1X = useTransform(springX, [-1, 1], [-30, 30]);
  const blob1Y = useTransform(springY, [-1, 1], [-20, 20]);
  const blob2X = useTransform(springX, [-1, 1], [24, -24]);
  const blob2Y = useTransform(springY, [-1, 1], [16, -16]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    function handleMove(event: PointerEvent) {
      mx.set(event.clientX / window.innerWidth - 0.5);
      my.set(event.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [mx, my, prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-field absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute -left-[10%] top-[10%] h-[420px] w-[420px] rounded-full bg-purple/20 blur-[110px] sm:h-[560px] sm:w-[560px]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute -right-[10%] bottom-[5%] h-[380px] w-[380px] rounded-full bg-blue/20 blur-[110px] sm:h-[520px] sm:w-[520px]"
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
