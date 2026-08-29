import { motion } from 'framer-motion';
import { Mail, Users } from 'lucide-react';

export default function VolunteerForm() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center mb-5">
            <Users className="w-6 h-6" />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— Volunteer With Us —</div>
          <h2 className="font-heading text-4xl md:text-5xl font-light leading-[1.1] mb-5">
            Lend your <span className="italic">hands and heart</span>.
          </h2>
          <p className="text-muted-foreground font-light text-[17px] max-w-2xl mx-auto leading-relaxed">
            Leave us your details and tell us how you'd like to help. One of our sisters will reach out to you personally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-background border border-border border-t-4 border-accent p-8 md:p-12 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-xs uppercase tracking-wider font-heading font-bold text-accent mb-3">
            Coming Soon
          </p>
          <h3 className="font-heading text-3xl font-light mb-3">Volunteer Enquiries</h3>
          <p className="text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
            Our volunteer enquiry form is being prepared. Please contact us directly using the details on our contact page.
          </p>
        </motion.div>
      </div>
    </section>
  );
}