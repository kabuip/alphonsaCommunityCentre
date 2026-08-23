import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-primary">
      <div className="relative h-[520px] md:h-[620px] lg:h-[680px] overflow-hidden">
        {/* Background image */}
        <img
          src="https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/bbfbac5ba__MG_1325.jpg"
          alt="The verandah of our community centre"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Left gradient for card legibility on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent md:from-primary/60 md:via-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-primary text-white p-8 md:p-12 lg:p-14 max-w-md md:max-w-lg shadow-xl"
          >
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Give Hope to a Child in Need
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90">
              Every contribution you make brings care, therapy and meals to children
              with cerebral palsy and other special needs. Your support brings dignity, joy
              and a future to families who need it most.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-10 h-[3px] bg-white/30" />
            </div>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:brightness-95 text-primary font-heading font-black uppercase tracking-wide rounded h-14 px-10 text-base w-full md:w-auto"
              >
                <Link to="/get-involved">Donate Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}