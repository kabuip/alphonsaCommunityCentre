import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TILES = [
  {
    title: 'Our Work',
    text: "See how our sisters care for children with special needs — therapy, education, shelter and a loving home.",
    to: '/our-work',
    image: 'https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/92afb47a2_IMG_1209.jpg',
  },
  {
    title: 'Ways to Get Involved',
    text: 'Donate, volunteer, sponsor a child, or pray with us. There are many ways to make a difference.',
    to: '/get-involved',
    image: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/9e3f24356__MG_1325.jpg',
  },
  {
    title: 'Our Story',
    text: 'Meet the FRANCISCAN CLARIST SISTERS and the mission that grew into a home for the forgotten.',
    to: '/about',
    image: 'https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/cbba4fc11_IMG_1406.jpg',
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-secondary/70 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.title}
              to={tile.to}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="font-heading font-black text-xl md:text-2xl text-primary group-hover:text-accent transition-colors">
                  {tile.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75 flex-1">
                  {tile.text}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wide text-sm text-accent">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}