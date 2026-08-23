import { motion } from 'framer-motion';
import PageHero from '@/components/site/PageHero';
import { HandHeart, Stethoscope, GraduationCap, Home as HomeIcon, Sprout, Cross } from 'lucide-react';

const WORK = [
  {
    icon: HandHeart,
    title: 'Special Needs Care',
    description: 'Our sisters provide 24-hour care to children with cerebral palsy and multiple disabilities — feeding, lifting, bathing, comforting. Every gesture is a prayer.',
    image: 'https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/92afb47a2_IMG_1209.jpg',
  },
  {
    icon: Stethoscope,
    title: 'Physiotherapy & Medical Care',
    description: 'Regular physiotherapy, occupational therapy and access to specialist medical care help our children reach their fullest potential of mobility and wellbeing.',
    image: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/bbe7e990c_IMG_1169.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Adapted Education',
    description: 'Tailored learning programs meet each child where they are — opening the world through letters, numbers, song and the simple joy of discovery.',
    image: 'https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/8762e2710_IMG_1216.jpg',
  },
  {
    icon: HomeIcon,
    title: 'A Loving Home',
    description: 'More than an institution, ours is a true home — with family meals, bedtime prayers, birthday celebrations, and sisters who become mothers.',
    image: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/9e3f24356__MG_1325.jpg',
  },
  {
    icon: Sprout,
    title: 'Sustainable Farming',
    description: 'Our on-site gardens and fish-ponds provide fresh food for the community and teach essential life and vocational skills.',
    image: 'https://media.base44.com/images/public/69e883e9eabc5d05d7044c6f/c13846097__MG_1337.jpg',
  },
  {
    icon: Cross,
    title: 'Spiritual Formation',
    description: 'Daily prayer, the sacraments, and catechesis form the heartbeat of our life together — nourishing the soul of every child and sister.',
    image: 'https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/cbba4fc11_IMG_1406.jpg',
  },
];

export default function OurWork() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="The Many Expressions of a Single Love"
        description="Every child at Alphonsa Community receives holistic care — body, mind and soul — through programs born from listening to their needs."
        image="https://media.base44.com/images/public/user_69b3d0e247c41e851133a1a2/8762e2710_IMG_1216.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20 md:space-y-24">
          {WORK.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded">
                <img src={w.image} alt={w.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs md:text-sm uppercase tracking-wider font-heading font-bold text-accent mb-3">
                  0{i + 1} / 0{WORK.length}
                </div>
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <w.icon className="w-6 h-6" />
                </div>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-primary leading-tight mb-4 uppercase tracking-tight">
                  {w.title}
                </h2>
                <div className="w-12 h-1 bg-accent mb-5" />
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {w.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}