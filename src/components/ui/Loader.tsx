import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { loadingGreetings, personal } from '@/data/personal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface LoaderProps {
  onComplete: () => void;
}

/**
 * Four-stage loader: name reveal -> rotating greetings -> progress
 * 0-100% -> fade/blur transition into the homepage. Runs on CSS
 * transforms only and never blocks the underlying app from rendering.
 */
export function Loader({ onComplete }: LoaderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const greetingInterval = setInterval(() => {
      setGreetingIndex((i) => (i + 1 < loadingGreetings.length ? i + 1 : i));
    }, 260);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 18 + 6, 100));
    }, 140);

    const exitTimer = setTimeout(() => setExiting(true), 1900);
    const completeTimer = setTimeout(onComplete, 2650);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {!exiting || progress < 100 ? (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bg"
        >
          <div className="grid-field absolute inset-0 opacity-40" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative font-display text-3xl font-semibold text-primary sm:text-4xl"
          >
            {personal.name}
          </motion.p>

          <div className="relative h-7 overflow-hidden font-mono text-sm uppercase tracking-[0.3em] text-purple">
            <AnimatePresence mode="wait">
              <motion.span
                key={loadingGreetings[greetingIndex]}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="block"
              >
                {loadingGreetings[greetingIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="relative w-[220px] sm:w-[280px]">
            <div className="h-px w-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-gradient-signal"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-center font-mono text-xs text-muted">
              Loading Experience {Math.floor(progress)}%
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
