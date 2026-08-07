"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { CONTACT_CONTENT, CONTACT_CHANNELS } from "@/content/contact";
import { TextReveal } from "@/components/motion/TextReveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { SPRING } from "@/lib/motion/easings";

const ICON_MAP = { mail: Mail, "map-pin": MapPin, linkedin: LinkedinIcon, github: GithubIcon };

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired up yet — replace with a real submit handler
    // (API route, email service, or form provider) when ready.
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-b border-[var(--color-border-subtle)]">
      <SectionContainer>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <TextReveal
              as="h2"
              lines={["Let's build something", "meaningful together."]}
              className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING.settle, delay: 0.25 }}
              className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]"
            >
              {CONTACT_CONTENT.subtext}
            </motion.p>

            <ul className="mt-8 space-y-3" role="list">
              {CONTACT_CHANNELS.map((channel, index) => {
                const Icon = ICON_MAP[channel.icon as keyof typeof ICON_MAP];
                return (
                  <RevealItem key={channel.label} index={index} direction="left" staggerBase={0.06}>
                    <Magnetic strength={0.2} max={5} hoverScale={1.0}>
                      <a
                        href={channel.href}
                        className="group flex items-center gap-3 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-faint)] transition-colors group-hover:border-[var(--color-accent)]/50 group-hover:text-[var(--color-accent)]">
                          <Icon size={15} aria-hidden="true" />
                        </span>
                        {channel.label}
                      </a>
                    </Magnetic>
                  </RevealItem>
                );
              })}
            </ul>
          </div>

          <ClipReveal direction="up" delay={0.1}>
            <Card padding="lg">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={SPRING.settle}
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <CheckCircle2
                    size={32}
                    className="text-[var(--color-success)]"
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-sm font-medium text-[var(--color-text)]">
                    Message sent — thanks for reaching out.
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-faint)]">
                    I&apos;ll get back to you as soon as I can.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <FormField label="Your Name" name="name" type="text" required autoComplete="name" />
                  <FormField label="Your Email" name="email" type="email" required autoComplete="email" />
                  <FormField label="Your Message" name="message" as="textarea" required />
                  <Button type="submit" variant="primary" icon={<Send size={15} />} className="w-full justify-center">
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </ClipReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
