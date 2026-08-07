<<<<<<< HEAD
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
=======
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { socials, locationLabel } from '@/data/socials';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/Card';

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail, 'file-text': FileText, 'map-pin': MapPin };

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Enter your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'Enter your email.';
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Enter a message.';
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // No backend is wired up yet — replace with a real submit handler
      // (e.g. an API route or a service like Formspree) before deploying.
      setSubmitted(true);
      setValues({ name: '', email: '', message: '' });
    }
  }

  return (
    <section id="contact" className="relative px-5 py-section-mobile-lg sm:px-8 md:px-10 md:py-section-desktop-lg">
      <div className="mx-auto max-w-container">
        <SectionTitle index="06" command="~/contact $ ./send_message.sh" title="Contact" />

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="max-w-md text-secondary/80" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}>
              Reach out for internships, collaboration, or just to talk about software and security.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center gap-3 text-secondary transition-colors hover:text-purple-soft"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-purple/50">
                        <Icon size={16} />
                      </span>
                      {social.label}
                    </a>
                  </li>
                );
              })}
              <li className="flex items-center gap-3 text-secondary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <MapPin size={16} />
                </span>
                {locationLabel}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard>
              {submitted ? (
                <div role="status" className="flex flex-col items-start gap-3 py-6">
                  <CheckCircle2 className="text-purple-soft" size={28} />
                  <p className="font-display text-xl text-primary">Message sent.</p>
                  <p className="text-sm text-secondary/80">
                    Thanks for reaching out — a reply will come by email soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-purple-soft underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <Input
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    error={errors.name}
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    error={errors.email}
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    error={errors.message}
                  />
                  <Button type="submit" variant="primary" icon={<Send size={16} />} className="self-start">
>>>>>>> b7a93ce (feat: initial portfolio release)
                    Send Message
                  </Button>
                </form>
              )}
<<<<<<< HEAD
            </Card>
          </ClipReveal>
        </div>
      </SectionContainer>
=======
            </GlassCard>
          </motion.div>
        </div>
      </div>
>>>>>>> b7a93ce (feat: initial portfolio release)
    </section>
  );
}
