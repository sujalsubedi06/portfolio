"use client";

import { Check } from "lucide-react";
import { TECH_STACK_CONTENT, TECH_CATEGORIES } from "@/data/techstack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { RevealItem } from "@/components/motion/RevealItem";
import { motion } from "framer-motion";
import { SPRING, cascade } from "@/lib/motion/easings";

export function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-[var(--color-border-subtle)]">
      <SectionContainer>
        <SectionHeading
          eyebrow={TECH_STACK_CONTENT.eyebrow}
          link={{ label: TECH_STACK_CONTENT.linkLabel, href: TECH_STACK_CONTENT.linkHref }}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TECH_CATEGORIES.map((category, colIndex) => (
            <RevealItem
              key={category.title}
              index={colIndex}
              direction={colIndex % 2 === 0 ? "up" : "left"}
              staggerBase={0.05}
            >
              <Card padding="sm" className="h-full">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-faint)]">
                  {category.title}
                </h3>
                <ul className="mt-3 space-y-2.5" role="list">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        ...SPRING.settle,
                        delay: cascade(colIndex, 0.06) + cascade(itemIndex, 0.04),
                      }}
                      className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
                    >
                      <Check
                        size={12}
                        className="shrink-0 text-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </RevealItem>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
