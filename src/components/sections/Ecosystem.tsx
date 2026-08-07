"use client";

import { Shield, Sparkles, Cloud, Ticket, Sparkle } from "lucide-react";
import { ECOSYSTEM_CONTENT, ECOSYSTEM_PRODUCTS } from "@/content/ecosystem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Badge } from "@/components/ui/Badge";
import { RevealItem } from "@/components/motion/RevealItem";
import { TiltCard } from "@/components/motion/TiltCard";
import { ConnectorLine } from "@/components/motion/LineDraw";
import { cascade } from "@/lib/motion/easings";

const ICON_MAP = {
  shield: Shield,
  sparkles: Sparkles,
  cloud: Cloud,
  ticket: Ticket,
  "sparkle-outline": Sparkle,
} as const;

export function Ecosystem() {
  return (
    <section className="border-b border-[var(--color-border-subtle)]">
      <SectionContainer>
        <SectionHeading
          eyebrow={ECOSYSTEM_CONTENT.eyebrow}
          heading={ECOSYSTEM_CONTENT.heading}
          link={{ label: ECOSYSTEM_CONTENT.linkLabel, href: ECOSYSTEM_CONTENT.linkHref }}
        />

        <div className="relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {ECOSYSTEM_PRODUCTS.map((product, index) => {
            const Icon = ICON_MAP[product.icon];
            const isLast = index === ECOSYSTEM_PRODUCTS.length - 1;

            return (
              <div key={product.slug} className="relative flex items-stretch lg:px-2.5">
                <RevealItem index={index} direction="up" className="w-full">
                  <TiltCard max={4} disabled={product.comingSoon}>
                    <Card
                      dashed={product.comingSoon}
                      className="flex h-full flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <IconTile accent={product.accent === "muted" ? "muted" : product.accent}>
                            <Icon size={17} aria-hidden="true" />
                          </IconTile>
                          {!product.comingSoon && <Badge status={product.status} />}
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">
                          {product.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                        {product.description}
                      </p>
                    </Card>
                  </TiltCard>
                </RevealItem>

                {!isLast && (
                  <ConnectorLine
                    className="pointer-events-none absolute right-[-14px] top-1/2 z-10 hidden h-px w-7 -translate-y-1/2 border-t border-dashed border-[var(--color-border)] lg:block"
                    delay={cascade(index, 0.06)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
