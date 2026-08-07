import { motion } from 'framer-motion';
import { Terminal, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-bg px-5 text-center">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple/40 bg-white/5 text-purple-soft"
      >
        <Terminal size={26} />
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-signal relative font-display font-black uppercase leading-none"
        style={{ fontSize: 'clamp(3.5rem, 14vw, 9rem)' }}
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative font-mono text-sm uppercase tracking-widest text-muted"
      >
        <span className="cursor-blink">bash: route not found</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        <Button variant="glass" href="/" icon={<ArrowLeft size={16} />}>
          Back to home
        </Button>
      </motion.div>
    </main>
  );
}
