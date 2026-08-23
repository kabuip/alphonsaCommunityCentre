import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">
                <span className="font-heading font-black text-xl">A</span>
              </div>
              <div>
                <div className="font-heading font-black text-lg text-white">
                  St. Alphonsa Community Centre
                </div>
                <div className="text-xs uppercase tracking-wider text-white/80 font-semibold">
                  FRANCISCAN CLARIST SISTERS · Ruai
                </div>
              </div>
            </div>
            <p className="text-white/85 leading-relaxed">
              A religious community of sisters devoted to caring for children with cerebral
              palsy and other special needs — offering shelter, therapy, education and love.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-gold mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/our-work', 'Our Work'],
                ['/gallery', 'Gallery'],
                ['/get-involved', 'Get Involved'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/85 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-[15px] text-white/85">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
                <span>St. Alphonsa Community Centre - Ruai<br />Ruai, Nairobi, Kenya</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-1 text-gold shrink-0" />
                <span>+254713721425</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-1 text-gold shrink-0" />
                <span>info@saintaphonsacommunitycentre.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} St. Alphonsa Community Centre - Ruai. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 fill-gold text-gold" /> in service of the children.
          </p>
        </div>
      </div>
    </footer>
  );
}