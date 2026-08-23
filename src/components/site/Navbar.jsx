import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-sm">
      {/* Top blue announcement banner */}
      {showBanner && (
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-4">
            <div className="flex-1 flex items-center gap-3 md:gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full border border-white/40 items-center justify-center shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-heading font-bold text-sm md:text-base leading-tight">
                  Give hope to a child with special needs today
                </div>
                <p className="hidden md:block text-xs md:text-sm text-white/85 leading-snug mt-0.5">
                  Your gift funds therapy, meals, education and shelter for the children in our care.
                </p>
              </div>
              <Link
                to="/get-involved"
                className="hidden sm:inline-flex bg-white text-primary hover:bg-white/90 font-heading font-bold text-xs md:text-sm px-4 py-2 rounded shrink-0 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              aria-label="Dismiss"
              className="text-white/80 hover:text-white shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Green nav bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-accent">
              <span className="font-heading font-black text-xl">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-heading font-black text-base md:text-lg tracking-tight text-white">
                St. Alphonsa
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/85 font-semibold">
                Community Centre · Ruai
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-bold rounded px-6 h-10">
              <Link to="/get-involved">Donate</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav links row */}
        <div className="hidden lg:block border-t border-white/15">
          <nav className="max-w-7xl mx-auto px-4 md:px-6 flex items-center gap-1 h-12">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-heading font-bold uppercase tracking-wide transition-colors rounded ${
                    isActive
                      ? 'text-white bg-white/15'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-accent text-white border-t border-white/15">
          <nav className="flex flex-col py-3 px-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `py-3 text-base font-heading font-bold uppercase tracking-wide border-b border-white/15 ${
                    isActive ? 'text-white' : 'text-white/85'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white font-heading font-bold rounded h-11">
              <Link to="/get-involved">Donate</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}