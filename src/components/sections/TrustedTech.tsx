"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  CloudCog,
  Box,
  Hexagon,
  Zap,
  Terminal,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { TRUSTED_TECH } from "@/data/site";
import { Magnetic } from "@/components/motion/Magnetic";
import { SPRING, cascade } from "@/lib/motion/easings";

const ICON_MAP: Record<string, LucideIcon> = {
  cloud: Cloud,
  "cloud-cog": CloudCog,
  box: Box,
  hexagon: Hexagon,
  zap: Zap,
  terminal: Terminal,
  leaf: Leaf,
};

export function TrustedTech() {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
        Trusted Technologies
      </p>
      <ul className="mt-4 flex flex-wrap items-center gap-3" role="list">
        {TRUSTED_TECH.map((tech, index) => {
          const Icon = ICON_MAP[tech.icon];
          return (
            <motion.li
              key={tech.name}
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ ...SPRING.tactile, delay: 0.9 + cascade(index) }}
            >
              <Magnetic strength={0.5} max={8} hoverScale={1.08}>
                <span
                  className="flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-200 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)]"
                  title={tech.name}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span className="sr-only">{tech.name}</span>
                </span>
              </Magnetic>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
