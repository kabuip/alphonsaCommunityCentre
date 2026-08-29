import { motion } from 'framer-motion';
import PageHero from '@/components/site/PageHero';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We Would Love to Hear From You"
        description="Whether you wish to visit, volunteer, donate or simply share a prayer — our doors and hearts are open."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
                Reach Us
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-primary leading-tight uppercase tracking-tight">
                Come Visit, Write or Call
              </h2>
              <div className="w-12 h-1 bg-accent mt-5" />
            </div>

            {[
              { icon: MapPin, label: 'Address', value: 'St. Alphonsa Community Centre - Ruai\nRuai, Nairobi, Kenya' },
              { icon: Phone, label: 'Telephone', value: '+254713721425\n+254705798772' },
              { icon: Mail, label: 'Email', value: 'info@saintaphonsacommunitycentre.org' },
              { icon: Clock, label: 'Visiting Hours', value: 'Mon – Sat · 9:00 am – 4:00 pm' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-heading font-bold text-accent mb-1">
                    {item.label}
                  </div>
                  <div className="text-base whitespace-pre-line leading-snug text-foreground/85">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-border bg-secondary/60 p-6">
              <p className="font-heading font-bold text-lg text-primary leading-snug">
                "Whatever you did for one of these least brothers of mine, you did for me."
              </p>
              <p className="text-xs uppercase tracking-wider font-heading font-bold text-accent mt-2">
                Matthew 25:40
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-secondary/60 p-6 md:p-10 shadow-sm border-t-4 border-primary flex flex-col items-start justify-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-wider font-heading font-bold text-accent mb-3">
              Coming Soon
            </p>
            <h2 className="font-heading font-black text-3xl text-primary leading-tight uppercase">
              Online Contact Form
            </h2>
            <p className="mt-4 max-w-lg text-foreground/75 leading-relaxed">
              Our online contact form is being prepared. In the meantime, please email or call us using the details shown here.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}