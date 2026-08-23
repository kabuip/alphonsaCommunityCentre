import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '@/components/site/PageHero';
import { Button } from '@/components/ui/button';
import { Heart, Users, HandCoins, Church, Gift, ArrowRight } from 'lucide-react';
import VolunteerForm from '@/components/getinvolved/VolunteerForm';

const WAYS = [
  {
    icon: HandCoins,
    title: 'Make a Donation',
    text: 'Financial gifts fund medication, therapy, nutrition, and daily essentials. Every amount makes a real difference.',
    action: 'Donate Now',
    mpesa: { paybill: '8998990', account: '128663' },
  },
  {
    icon: Gift,
    title: 'Sponsor a Child',
    text: 'Become a monthly sponsor for one of our children — covering their care, schooling and medical needs.',
    action: 'Become a Sponsor',
    mpesa: { paybill: '8998990', account: '128663' },
  },
  {
    icon: Users,
    title: 'Volunteer',
    text: 'Offer your time or professional skills — nursing, physiotherapy, teaching, or simply being present with the children.',
    action: 'Volunteer With Us',
  },
  {
    icon: Church,
    title: 'Pray With Us',
    text: 'Join our spiritual family in prayer. Send your intentions — our sisters remember every one at daily Mass.',
    action: 'Send a Prayer Request',
  },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Walk This Road With Us"
        description="There are as many ways to help as there are hearts willing to give. Whatever you have to offer, we receive it with gratitude."
        image="https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/92afb47a2_IMG_1209.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WAYS.map((way, i) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 md:p-10 bg-secondary/60 hover:bg-secondary/90 transition-colors border-t-4 border-primary shadow-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <way.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-heading font-bold text-accent">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-primary leading-tight mb-3 uppercase tracking-tight">
                  {way.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed mb-6">{way.text}</p>
                {way.mpesa && (
                  <div className="mb-6 bg-white border-l-4 border-accent p-4 rounded-sm">
                    <div className="text-xs font-heading font-bold uppercase tracking-wider text-accent mb-2">
                      M-Pesa Details
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between gap-4">
                        <span className="text-foreground/70 font-semibold">Paybill:</span>
                        <span className="font-heading font-black text-primary">{way.mpesa.paybill}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-foreground/70 font-semibold">Account No:</span>
                        <span className="font-heading font-black text-primary">{way.mpesa.account}</span>
                      </div>
                    </div>
                  </div>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wide text-accent hover:gap-3 transition-all text-sm"
                >
                  {way.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VolunteerForm />

      {/* Donation details */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-gold" />
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-gold mb-3">
            How Your Gift Helps
          </div>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 uppercase tracking-tight">
            Your Gift Becomes Their Meal, Their Healing, Their Hope
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { desc: 'Provides a week of nutritious meals for one child.' },
              { desc: 'Covers a full month of physiotherapy sessions.' },
              { desc: "Sponsors a child's complete care for one month." },
            ].map((tier) => (
              <div key={tier.desc} className="bg-white/10 p-6 border-l-4 border-gold">
                <p className="text-white/90 leading-relaxed text-lg">{tier.desc}</p>
              </div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="mt-12 bg-gold hover:brightness-95 text-primary font-heading font-black uppercase tracking-wide rounded h-14 px-10"
          >
            <Link to="/contact">Give Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}