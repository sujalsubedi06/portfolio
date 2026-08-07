import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications, certificationsEmptyMessage } from '@/data/certifications';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/Card';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-5 py-section-mobile-lg sm:px-8 md:px-10 md:py-section-desktop-lg"
    >
      <div className="mx-auto max-w-container">
        <SectionTitle index="05" command="~/certifications $ ls ./earned" title="Certifications" />

        {certifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard className="flex max-w-xl flex-col items-start gap-3 border-dashed">
              <Award className="text-muted" size={22} />
              <p className="text-secondary/80">{certificationsEmptyMessage}</p>
            </GlassCard>
          </motion.div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '50px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard hoverGlow className="h-full">
                  <Award className="text-orange-soft" size={20} />
                  <h3 className="mt-3 font-display text-lg font-medium text-primary">{cert.name}</h3>
                  <p className="mt-1 text-sm text-secondary/80">{cert.organization}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">{cert.date}</p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-purple-soft hover:opacity-80"
                    >
                      View credential <ExternalLink size={14} />
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
