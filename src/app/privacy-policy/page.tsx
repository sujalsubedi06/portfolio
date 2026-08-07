import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for sujalsubedi.com.np",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
      <Link href="/" className="text-sm text-[var(--color-accent)]">
        ← Back home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-[var(--color-text)]">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        This page is a placeholder. Replace this content with an actual
        privacy policy describing what data this site collects (e.g. contact
        form submissions, analytics), how it&apos;s used, and how visitors can
        request its removal, before taking this site to production.
      </p>
    </main>
  );
}
