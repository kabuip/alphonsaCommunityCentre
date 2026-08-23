import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="aspect-[4/3] overflow-hidden rounded"
        >
          <img
            src="https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/cbba4fc11_IMG_1406.jpg"
            alt="Marian grotto at Alphonsa Community"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-4">
            Real Care for Real Children
          </div>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary leading-tight tracking-tight">
            Cerebral palsy doesn't discriminate.
          </h2>
          <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              It affects children from every walk of life. Too often, these children are
              abandoned, hidden away, or left behind by the systems meant to serve them.
              At St. Alphonsa, they find a real home.
            </p>
            <p>
              Our sisters welcome each child as their own — providing round-the-clock care,
              daily therapy, adapted education, and the tender love that makes a life
              possible.
            </p>
          </div>
          <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-white font-heading font-bold uppercase tracking-wide rounded h-12 px-7">
            <Link to="/about" className="group">
              Meet Our Sisters
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}