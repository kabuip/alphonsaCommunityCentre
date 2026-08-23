import { motion } from 'framer-motion';

const STATS = [
{ value: "30+", label: 'Children in our care' },
{ value: "5+", label: 'Years of service' },
{ value: '100%', label: "SUSTAINED BY donations" }];


export default function Stats() {
  return (
    <section className="bg-secondary/70 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-primary uppercase tracking-tight">
            Our Impact
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white text-center py-8 md:py-10 px-4 shadow-sm">
            
              <div className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-primary">
                {stat.value}
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-wider font-semibold text-accent">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}