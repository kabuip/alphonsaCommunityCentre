import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PHOTOS = [
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/48a795791_IMG_1104.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/83df4496f_IMG_1111.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e710d96c6_IMG_1114.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/34571fe9b_IMG_1122.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/f5ac46b5a_IMG_1131.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e3d73473c_IMG_1145.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/837d41173_IMG_1151.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/bbe7e990c_IMG_1169.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/f7efb44b7_IMG_1170.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/e2b3d054d_IMG_1173.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/1b4b76790_IMG_1181.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/932d7ef95_IMG_1188.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/17d668941_IMG_1190.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/9446759dc_IMG_1194.jpg',
  'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/d433a9bea_IMG_1207.jpg',
];

export default function PhotoMarquee() {
  // Duplicate the list so the scroll loops seamlessly
  const loop = [...PHOTOS, ...PHOTOS];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-10">
        <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
          Our Gallery
        </div>
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-tight">
          Faces of Our Family
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-6" />
      </div>

      <div className="relative group" aria-label="Scrolling gallery">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-4 md:gap-6 marquee-track">
          {loop.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-56 h-40 md:w-72 md:h-52 lg:w-80 lg:h-56 overflow-hidden rounded shadow-sm"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wide text-accent hover:gap-3 transition-all"
        >
          View Full Gallery <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}