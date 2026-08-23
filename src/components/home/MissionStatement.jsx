import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <section className="bg-white py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center px-4 md:px-6"
      >
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-tight">
          Our Mission
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-6" />
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-foreground/80">
          St. Alphonsa Community Centre - Ruai is a home run by the FRANCISCAN CLARIST
          SISTERS, devoted to caring for children with cerebral palsy and other special
          needs. We provide therapy, education, shelter and love — giving each child the
          dignity and hope of a full life.
        </p>
      </motion.div>
    </section>
  );
}