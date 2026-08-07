"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";
import { SPRING } from "@/lib/motion/easings";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
}

export function ArrowLink({ href, children, className, size = "md" }: ArrowLinkProps) {
  return (
    <Magnetic strength={0.3} max={8} hoverScale={1.0}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)]",
          size === "sm" ? "text-xs" : "text-sm",
          className
        )}
      >
        {children}
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={SPRING.tactile}
        >
          <ArrowRight size={size === "sm" ? 12 : 15} aria-hidden="true" />
        </motion.span>
      </Link>
    </Magnetic>
  );
}
