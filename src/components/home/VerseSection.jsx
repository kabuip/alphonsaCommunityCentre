import { motion } from 'framer-motion';

export default function VerseSection() {
  return (
    <section className="relative bg-primary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-1 bg-gold mx-auto mb-8" />
          <p className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-snug tracking-tight">
            "Whatever you did for one of these least brothers of mine, you did for me."
          </p>
          <div className="mt-6 text-sm uppercase tracking-widest text-white/70 font-semibold">
            — Matthew 25:40
          </div>
        </motion.div>
      </div>
    </section>
  );
}