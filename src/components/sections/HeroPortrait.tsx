import { useRef, type PointerEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import portrait from '@/assets/images/portrait.png';


export function HeroPortrait() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springRY = useSpring(rotateY, { stiffness: 120, damping: 20 });
  const translateZ = useTransform(springRX, () => 0);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: 1200 }}
      className="relative mx-auto w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px]"
    >
      <motion.div
        style={{
          rotateX: springRX,
          rotateY: springRY,
          translateZ,
          willChange: 'transform',
        }}
        className={prefersReducedMotion ? '' : 'animate-float'}
      >
        {/* Radar rings */}
        <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple/20" />
        <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/10" />

        {/* Portrait frame */}
        <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-lg border border-border-strong bg-gradient-to-b from-surface to-bg shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          
          {/* Existing purple/blue glow overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, rgba(168,85,247,0.18), transparent 55%, rgba(59,130,246,0.18))',
            }}
          />

          {/* 3D Portrait */}
          <div className="relative h-full w-full overflow-hidden">
            <img
                src={portrait}
                alt="Sujal Subedi 3D portrait"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-contain
                    translate-y-10
                "
            />
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
}