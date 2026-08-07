import type { Transition } from "framer-motion";

/**
 * Custom cubic-bezier easings. Framer's built-ins ("easeOut", "easeInOut")
 * are what every AI-generated site reaches for by default — these are tuned
 * to feel like a considered decision (steeper deceleration, slight overshoot
 * anticipation) rather than a system default.
 */
export const EASE = {
  /** Confident deceleration for content entering the viewport */
  exit: [0.16, 1, 0.3, 1] as const,
  /** Snappy start, soft landing — for reveals that should feel alive */
  glide: [0.22, 1, 0.36, 1] as const,
  /** Gentle in and out — for ambient, looping motion (glows, drift) */
  ambient: [0.45, 0, 0.55, 1] as const,
};

/** Spring presets, named by the quality of motion they produce, not by number. */
export const SPRING: Record<string, Transition> = {
  /** Content settling into place — used for reveals */
  settle: { type: "spring", stiffness: 260, damping: 26, mass: 0.9 },
  /** Snappy, tactile — buttons, chips, anything you click */
  tactile: { type: "spring", stiffness: 420, damping: 24, mass: 0.6 },
  /** Magnetic pull-and-release — heavier, more momentum, slight overshoot */
  magnetic: { type: "spring", stiffness: 150, damping: 15, mass: 0.6 },
  /** Slow, weighted drift for large elements (portrait frame, big cards) */
  drift: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
};

/** Stagger children with a slight ease-in acceleration rather than a flat interval,
 *  so choreography reads as "cascading" instead of "looped n times". */
export function cascade(index: number, base = 0.07) {
  return base * Math.sqrt(index + 1);
}
