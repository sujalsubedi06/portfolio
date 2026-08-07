"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  /** e.g. "6+", "100+", "1,284" */
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}

/** Splits "1,284" or "6+" into { number: 1284, prefix: "", suffix: "+"/"" } */
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, hasCommas: false };
  const [, prefix, digits, suffix] = match;
  return {
    prefix,
    number: parseInt(digits.replace(/,/g, ""), 10),
    suffix,
    hasCommas: digits.includes(","),
  };
}

export function CountUp({ value, className, duration = 1.4, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("0");
  const { prefix, number, suffix, hasCommas } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, number, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        const rounded = Math.round(latest);
        setDisplay(hasCommas ? rounded.toLocaleString() : String(rounded));
      },
    });
    return () => controls.stop();
  }, [isInView, number, duration, delay, hasCommas]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
