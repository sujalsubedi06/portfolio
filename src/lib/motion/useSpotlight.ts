"use client";

import { useRef } from "react";

/**
 * Attach `ref` to the container. Use the CSS variables --spot-x / --spot-y
 * (percentages) in a background like:
 *   background: radial-gradient(500px circle at var(--spot-x) var(--spot-y), ...)
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${xPct}%`);
    el.style.setProperty("--spot-y", `${yPct}%`);
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot-x", `50%`);
    el.style.setProperty("--spot-y", `40%`);
  };

  return { ref, onPointerMove, onPointerLeave };
}
