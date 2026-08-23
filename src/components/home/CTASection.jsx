import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary text-white p-10 md:p-12 shadow-md">
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl leading-tight uppercase tracking-tight">
              Give a Child Hope Today
            </h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              Every donation — however small — buys therapy sessions, medication,
              schoolbooks, meals and hope for a child.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold hover:brightness-95 text-primary font-heading font-black uppercase tracking-wide rounded h-12 px-7"
            >
              <Link to="/get-involved">Donate Now</Link>
            </Button>
          </div>

          <div className="bg-accent text-white p-10 md:p-12 shadow-md">
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading font-black text-2xl md:text-3xl leading-tight uppercase tracking-tight">
              Come Serve With Us
            </h3>
            <p className="mt-4 text-white/90 leading-relaxed">
              Volunteer your time, skills or professional services. The children blossom
              with every new friend who walks through our gates.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-white hover:bg-white/95 text-accent font-heading font-black uppercase tracking-wide rounded h-12 px-7"
            >
              <Link to="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}